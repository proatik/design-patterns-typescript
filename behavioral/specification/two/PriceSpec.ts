import { Product } from "./Product";
import { Specification } from "./Specification";

export class PriceSpec implements Specification {
  private maxPrice: number;

  constructor(maxPrice: number) {
    this.maxPrice = maxPrice;
  }

  public isSatisfiedBy(item: Product): boolean {
    return item.getPrice() <= this.maxPrice;
  }
}
