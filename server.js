const express = require('express');
const app = express();
const port = 3000;
const base = `${_dirname}/public`;
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(`${base}/device-list.html`);
   });

app.get('*', (req, res) => {
    res.sendFile(`${base}/404.html`);
   });

app.get('/register-device', (req, res) => {
    res.sendFile(`${base}/register-device.html`);
   });
app.get('/send-command', (req, res) => {
    res.sendFile(`${base}/send-command.html`);
   });
app.get('/about', (req, res) => {
    res.sendFile(`${base}/about-me.html`);
   });
   
   
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


