const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
require('dotenv').config();
require('./config/database');

app.use(express.static(path.join(__dirname, 'build')));

app.use("/api", require('./routes/api'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(process.env.PORT || 8080);


