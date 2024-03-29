const path = require("path");
const express = require("express");
const app = express();
const home = express.Router();
const rooDir = require("../utility/util");
app.use(express.static(path.join(__dirname, "public")));

home.get("/", (req, res, next) => {
  res.sendFile(path.join(rooDir, "views", "home.html"));
});

module.exports = home;
