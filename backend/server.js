import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";
import router from "./router/productRouter.js";

const app = express();

const port = process.env.PORT || 5000;

connectDB();

app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api/products", router);

app.get("/", (req, res) => {
  res.send("App is running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
