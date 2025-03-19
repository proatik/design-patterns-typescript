import { Book } from "./Book";
import { Product } from "./Product";
import { Clothing } from "./Clothing";
import { Electronics } from "./Electronics";
import { ProductFactory } from "./ProductFactory";

export class ConcreteProductFactory extends ProductFactory {
  public createProduct(type: string): Product {
    if (type.toLowerCase() === "electronics") {
      return new Electronics();
    } else if (type.toLowerCase() === "clothing") {
      return new Clothing();
    } else if (type.toLowerCase() === "book") {
      return new Book();
    } else {
      throw new Error("Unknown product type.");
    }
  }
}
