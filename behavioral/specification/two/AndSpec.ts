import { Product } from "./Product";
import { Specification } from "./Specification";

export class AndSpec implements Specification {
  private spec1: Specification;
  private spec2: Specification;

  constructor(spec1: Specification, spec2: Specification) {
    this.spec1 = spec1;
    this.spec2 = spec2;
  }

  public isSatisfiedBy(item: Product): boolean {
    return this.spec1.isSatisfiedBy(item) && this.spec2.isSatisfiedBy(item);
  }
}
