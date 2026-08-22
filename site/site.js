const path = require('path');
const http = require('http');
const express = require('express');
const { spawn } = require('child_process');
const WebSocket = require('ws');
const pty = require('node-pty');

const app = express();
const server = http.createServer(app);
const publicPath = path.join(__dirname, 'public');
const wss = new WebSocket.Server({ server, path: '/ws' });

app.use(express.static(publicPath));

app.get('/api/whois', (req, res) => {
  const domain = (req.query.domain || '').trim();
  if (\!domain) {
    return res.status(400).json({ error: 'Provide ?domain=example.com' });
  }

  const whois = spawn('whois', [domain]);
  let output = '';
  let error = '';

  whois.stdout.on('data', (chunk) => { output += chunk.toString(); });
  whois.stderr.on('data', (chunk) => { error += chunk.toString(); });
  whois.on('close', (code) => {
    if (code \!== 0 && \!output) {
      return res.status(500).json({ error: error || `whois failed with code ${code}` });
    }
    res.json({ domain, output: output || error, code });
  });
});

wss.on('connection', (ws) => {
  const shell = process.platform === 'win32' ? 'powershell.exe' : 'bash';
  const ptyProcess = pty.spawn(shell, [], {
    name: 'xterm-color',
    cols: 80,
    rows: 24,
    cwd: process.cwd(),
    env: process.env,
  });

  ptyProcess.onData((data) => {
    ws.send(JSON.stringify({ type: 'output', data }));
  });

  ws.on('message', (message) => {
    try {
      const msg = JSON.parse(message);
      if (msg.type === 'input') {
        ptyProcess.write(msg.data);
      } else if (msg.type === 'resize') {
        ptyProcess.resize(msg.cols, msg.rows);
      }
    } catch (err) {
      console.error('WebSocket parse error:', err);
    }
  });

  ws.on('close', () => {
    ptyProcess.kill();
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
