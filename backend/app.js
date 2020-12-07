const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('hi')
  next();
});

app.use((req, res, next) => {
  res.send('yo');
});

module.exports = app;
