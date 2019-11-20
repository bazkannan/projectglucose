const express = require("express");
const app = express();
const server = require('http').createServer(app);
const port = 3000;
const preoperative = require('./tests/preoperative');
app.use(express.json());

server.listen(port, () => console.log('Server running on port: ' + port));

app.post('/preoperative', preoperative.basic);
