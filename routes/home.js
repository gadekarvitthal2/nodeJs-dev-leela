const path = require('path');
const express = require("express");
const home = express.Router();

home.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname,'../','views','home.html'));
//   next();
});

module.exports = home;