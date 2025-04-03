import { Product } from "./Product";
import { Specification } from "./Specification";

export class ProductFilter {
  public static filter(items: Product[], spec: Specification): Product[] {
    return items.filter((item) => spec.isSatisfiedBy(item));
  }

  public static printProducts(products: Product[]): void {
    products.forEach((product) => {
      console.log(
        `${product.getName()} - ${product.getCategory()} - $${product.getPrice()} - Stock: ${product.getStock()}`
      );
    });
  }
}
