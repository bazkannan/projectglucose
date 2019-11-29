const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const port = 3001;
const preoperative = require('./tests/preoperative');
const ontheday = require('./tests/ontheday');
app.use(express.json());

server.listen(port, () => console.log('Server running on port: ' + port));

app.post('preoperative', preoperative.basic);
app.post('ontheday', ontheday.basic);
