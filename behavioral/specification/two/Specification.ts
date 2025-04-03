import { Product } from "./Product";

export interface Specification {
  isSatisfiedBy(item: Product): boolean;
}
