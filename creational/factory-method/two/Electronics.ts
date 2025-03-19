import { Product } from "./Product";

export class Electronics implements Product {
  create(): void {
    console.log("Electronics product created.");
  }
}
