const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const productRecords = express.Router();
const routeDir = require("../utility/util");
const path = require("path");
const products = require("../utility/products");
app.use(bodyParser.urlencoded({ extended: true }));
productRecords.get("/add", (req, res) => {
  // res.sendFile(path.join(routeDir, "views", "addProduct.html"));
  res.render('addProduct',{
    name: req.body.productName,
    price: req.body.productPrice,
  })
});

productRecords.post("/add", (req, res) => {
  products.productFunc({
    name: req.body.productName,
    price: req.body.productPrice,
  });
  res.redirect("/");
});

module.exports = productRecords;
