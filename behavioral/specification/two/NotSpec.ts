import { Product } from "./Product";
import { Specification } from "./Specification";

export class NotSpec implements Specification {
  private spec: Specification;

  constructor(spec: Specification) {
    this.spec = spec;
  }

  public isSatisfiedBy(item: Product): boolean {
    return !this.spec.isSatisfiedBy(item);
  }
}
