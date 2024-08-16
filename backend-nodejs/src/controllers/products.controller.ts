import express, { Request, Response } from "express";
import Product from "../models/product.model";
import { getCollectionData } from "../services/get-collection-db.service";

export default class ProductController {
  public path = "/products";
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getAllProducts);
    this.router.post(this.path, this.postAllProducts);
  }

  getAllProducts = async (req: Request, res: Response) => {
    const productItem = await getCollectionData("products");
    res.send(productItem);
  };

  postAllProducts = (req: Request, res: Response) => {
    const product: Product = req.body;
    // this.productItem.push(product);
    // res.send(this.productItem);
    res.send();
  };
}
