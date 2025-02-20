const express = require("express");
const path = require("path");
const router = express.Router();

const rootDir = require("../util/path");

const products = [];

router.get("/add-product", (req, res, next) => {
  //   console.log("Product page middleware!");
  //   res.sendFile(path.join(rootDir, "templates", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
