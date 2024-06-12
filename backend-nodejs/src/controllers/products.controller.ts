import express, { Request, Response } from "express";
import Product from "../models/product.model";

export default class ProductController {
  public path = "/products";
  public router = express.Router();

  private productItem: Product[] = [
    {
      name: "Binh nuoc Lock and Lock",
      price: "100000",
      description: "Binh nuoc 550ml, lam bang thep 316L",
    },
  ];

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getAllProducts);
    this.router.post(this.path, this.postAllProducts);
  }

  getAllProducts = (req: Request, res: Response) => {
    res.send(this.productItem);
  };

  postAllProducts = (req: Request, res: Response) => {
    const product: Product = req.body;
    this.productItem.push(product);
    res.send(this.productItem);
  };
}
