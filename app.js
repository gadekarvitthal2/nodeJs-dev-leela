const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const users = require("./routes/users");
const home = require("./routes/home");
const path = require("path");
const rooDir = require("./utility/util");
//--Set the ejs
app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", home);
app.use("/users", users);
app.use(
  "/css",
  express.static(path.join(rooDir, "node_modules", "bootstrap", "dist", "css"))
);

app.use((req, res, next) => {
  res
    .status(404)
    .render('page-not-found',{pageNotFound :'This is coming from the app.js'});
});

app.listen(3000, () => {
  console.log("server listen on the 3000");
});
