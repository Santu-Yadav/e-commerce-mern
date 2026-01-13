import express from "express";
import products from "./data/products.js";

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.get("/", (req, res) => {
  res.send("App is running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
