import { Product } from "./Product";

export class Book implements Product {
  create(): void {
    console.log("Book product created.");
  }
}
