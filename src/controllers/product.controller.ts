import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  public create = async (req: Request, res: Response) => {
    const product = await this.productService.create(req.body);
    res.status(201).json(product);
  };

  public findAll = async (_req: Request, res: Response) => {
    const allProducts = await this.productService.findAll();
    res.status(200).json(allProducts);
  };
}