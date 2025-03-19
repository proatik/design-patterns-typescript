import { Product } from "./Product";

export abstract class ProductFactory {
  public abstract createProduct(type: string): Product;

  public orderProduct(type: string): Product {
    const product = this.createProduct(type);
    product.create();
    return product;
  }
}
