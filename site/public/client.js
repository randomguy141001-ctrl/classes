const termContainer = document.getElementById('terminal');
const whoisForm = document.getElementById('whois-form');
const whoisResult = document.getElementById('whois-result');

const term = new Terminal({ cursorBlink: true, fontFamily: 'monospace', fontSize: 14 });
const fitAddon = new FitAddon.FitAddon();
term.loadAddon(fitAddon);
term.open(termContainer);
fitAddon.fit();

const protocol = location.protocol === 'https:' ? 'wss' : 'ws';
const socket = new WebSocket(`${protocol}://${location.host}/ws`);

socket.addEventListener('open', () => {
  term.writeln('Connected to server shell.');
  resizeTerminal();
});

socket.addEventListener('message', (event) => {
  try {
    const msg = JSON.parse(event.data);
    if (msg.type === 'output') {
      term.write(msg.data);
    }
  } catch (err) {
    console.error('Invalid WS message', err);
  }
});

socket.addEventListener('close', () => {
  term.writeln('\r\nDisconnected.');
});

socket.addEventListener('error', () => {
  term.writeln('\r\nWebSocket error.');
});

term.onData((data) => {
  socket.send(JSON.stringify({ type: 'input', data }));
});

function resizeTerminal() {
  fitAddon.fit();
  socket.send(JSON.stringify({ type: 'resize', cols: term.cols, rows: term.rows }));
}

window.addEventListener('resize', resizeTerminal);

whoisForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const domain = document.getElementById('domain').value.trim();
  if (\!domain) return;

  whoisResult.textContent = 'Looking up...';

  try {
    const response = await fetch(`/api/whois?domain=${encodeURIComponent(domain)}`);
    const data = await response.json();
    if (\!response.ok) {
      whoisResult.textContent = data.error || 'Whois lookup failed.';
      return;
    }
    whoisResult.textContent = data.output;
  } catch (err) {
    whoisResult.textContent = 'Unable to reach whois service.';
  }
});
