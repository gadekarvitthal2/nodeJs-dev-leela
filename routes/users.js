const express = require('express');
const path = require('path')
const users = express.Router();

users.get("/add", (req, res) => {
    res.sendFile(path.join(__dirname,'../','views','user-add.html'));
  });
  
  users.post("/add", (req, res) => {
    console.log("req.body :>> ", req.body.username);
    res.redirect("/");
  });;

  module.exports = users;