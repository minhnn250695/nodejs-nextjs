import { NextFunction, Request, Response } from "express";

const express = require("express");
const router = express.Router();

router.get("/products", (req: Request, res: Response, next: NextFunction) => {
  res.send(["Product1", "Product2"]);
});

export default router;
