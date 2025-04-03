import { Product } from "./Product";
import { Specification } from "./Specification";

export class CategorySpec implements Specification {
  private category: string;

  constructor(category: string) {
    this.category = category;
  }

  public isSatisfiedBy(item: Product): boolean {
    return item.getCategory() === this.category;
  }
}
