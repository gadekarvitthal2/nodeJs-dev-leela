const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const users = require("./routes/users");
const home = require("./routes/home");
const path = require("path");
const rooDir = require("./utility/util");

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
    .sendFile(path.join(__dirname, "views", "page-not-found.html"));
});

app.listen(3000, () => {
  console.log("server listen on the 3000");
});
