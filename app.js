const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const users = require('./routes/users');
const home = require('./routes/home');
const path= require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/users',users);
app.use(home);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views','page-not-found.html'));
  });


app.listen(3000, () => {
  console.log("server listen on the 3000");
});
