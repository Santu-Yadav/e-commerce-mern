import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import products from "./data/products.js";

const app = express();

const port = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173" }));

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
