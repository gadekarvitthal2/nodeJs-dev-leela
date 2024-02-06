const path = require("path");
const express = require("express");
const app = express();
const home = express.Router();
const products = require('../utility/products');

app.use(express.static(path.join(__dirname, "public")));
home.get("/", (req, res, next) => {
  // res.sendFile(path.join(rooDir, "views", "home.html"));
   res.render('home',{productTitle:products.productTitle,productsData:products.productList});
});

module.exports = home;
