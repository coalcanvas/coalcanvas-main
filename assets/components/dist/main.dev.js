"use strict";

var express = require('express');

var app = express();
app.get('/', function (req, res) {
  res.send("Welcome to our homepage.");
}); //first is homepage (the forward slash)

app.get('/about', function (req, res) {
  res.send("thanks for learning more about us.");
});
app.get('/scenes', function (req, res) {});
app.listen(3000);