const express = require('express');
const app = express();
const PORT = 4321;

app.get('/home', (req, res) => {
    res.send('Welcome to the Home Page');
});

app.get('/contact-us', (req, res) => {
    res.send('Contact us');
});

app.get('/about', (req, res) => {
    res.send('About us');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});