import { Product } from "./Product";
import { Specification } from "./Specification";

export class InStockSpec implements Specification {
  public isSatisfiedBy(item: Product): boolean {
    return item.getStock() > 0;
  }
}
