import express from "express";
import { Error } from "mongoose";

const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://minhnn250695:yANNrE03Gcz0ggFI@mindb-nodejs.djpawy2.mongodb.net/?retryWrites=true&w=majority&appName=mindb-nodejs"
  )
  .then(() => console.log("Kết nối với MongoDB thành công!"))
  .catch((err: Error) => console.error("Lỗi kết nối MongoDB:", err));

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
