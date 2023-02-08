import ProductModel from '../models/product.model';
import { IProduct } from '../interfaces/product.interface';
import connection from '../models/connection';

export default class ProductService {
  private productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  public create = async (product: IProduct) => {
    const createdProduct = await this.productModel.create(product);
    return createdProduct;
  };
}