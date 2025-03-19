import { Product } from "./Product";

export class Clothing implements Product {
  create(): void {
    console.log("Clothing product created.");
  }
}
