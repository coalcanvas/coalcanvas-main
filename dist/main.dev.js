"use strict";

var express = require('express');

var app = express();

var path = require('path');

app.use(express.urlencoded({
  extended: false
})); //middleware to program functions ref getCredential

app.use(getCredential);
app.use(express["static"](path.join(__dirname, "css")));
app.use(express["static"](path.join(__dirname, "assets"))); //after installing npm i ejs, configure it into the app

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); //last item is foldername, __dirname is current directory

function getCredential(req, res, next) {
  req.visitorCredential = false;

  if (req.visitorCredential) {
    res.send("Welcome back.");
  } else {
    next();
  } // next() //move to next function

}

app.get('/', function (req, res) {
  res.render("home", {
    isMember: req.visitorCredential,
    credentials: [{
      username: "amygdala",
      email: "ansb1987@gmail.com",
      password: "mypassword"
    }, {
      username: "amy",
      email: "amy@handshoesafety.com",
      password: "pwd"
    }]
  });
}); //first is homepage (the forward slash)

app.get('/about', function (req, res) {
  res.send("thanks for learning more about us.");
});
app.get('/scenes', function (req, res) {});
app.post("/result", function (req, res) {
  if (req.body.username === "amygdala" && req.body.password === "ansb1987") {
    res.send("Logging you in.");
  } else {
    res.send("Incorrect credentials. Please go back try again.");
  }
});
app.get("/result", function (req, res) {
  res.send("Destination doesn't exist.");
});
app.get('/api/credentials', function (req, res) {
  res.json([{
    username: "amygdala",
    email: "ansb1987@gmail.com",
    password: "mypassword"
  }, {
    username: "amy",
    email: "amy@handshoesafety.com",
    password: "pwd"
  }]);
});
app.listen(3000);