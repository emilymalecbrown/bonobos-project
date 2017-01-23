const chalk = require('chalk');
const express = require('express');
const app = require('./app');

app.listen(app.get('port'), () => {
  console.log(chalk.green("Node app is running at localhost:" + app.get('port')));
});
