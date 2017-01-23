const chalk = require('chalk');
const express = require('express');
const app = express();
const path = require('path');
const router = require('./api/api.js');

app.set('port', (process.env.PORT || 5000));
app.use(express.static('./browser'));
app.use('/api', router)

app.get('/', (req, res, next) => {
  res.sendfile('./browser/index.html');
  next();
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

module.exports = app;
