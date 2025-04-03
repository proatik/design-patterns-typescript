import { OrSpec } from "./OrSpec";
import { Product } from "./Product";
import { AndSpec } from "./AndSpec";
import { NotSpec } from "./NotSpec";
import { PriceSpec } from "./PriceSpec";
import { InStockSpec } from "./InStockSpec";
import { CategorySpec } from "./CategorySpec";
import { ProductFilter } from "./ProductFilter";

function main() {
  const products: Product[] = [
    new Product("Laptop", "Electronics", 1200, 5),
    new Product("Smartphone", "Electronics", 800, 0),
    new Product("Headphones", "Electronics", 200, 10),
    new Product("Book", "Literature", 20, 50),
  ];

  const electronicsSpec = new CategorySpec("Electronics");
  const inStockSpec = new InStockSpec();
  const expensiveSpec = new PriceSpec(500);

  const electronicInStock = new AndSpec(electronicsSpec, inStockSpec);
  const electronicOrInStock = new OrSpec(electronicsSpec, inStockSpec);
  const notExpensive = new NotSpec(expensiveSpec);

  console.log("\n=== Electronics in stock ===\n");
  ProductFilter.printProducts(
    ProductFilter.filter(products, electronicInStock)
  );

  console.log("\n=== Electronics or items in stock ===\n");
  ProductFilter.printProducts(
    ProductFilter.filter(products, electronicOrInStock)
  );

  console.log("\n=== Not expensive items ===\n");
  ProductFilter.printProducts(ProductFilter.filter(products, notExpensive));
}

main();
