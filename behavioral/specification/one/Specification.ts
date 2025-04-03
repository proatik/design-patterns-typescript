export interface Specification {
  isSatisfiedBy(number: number): boolean;

  and(other: Specification): Specification;
}
