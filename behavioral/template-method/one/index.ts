import { Tea } from "./Tea";
import { Coffee } from "./Coffee";

function main() {
  const tea = new Tea();
  const coffee = new Coffee();

  console.log("\n=== Making tea ===\n");
  tea.prepareRecipe();

  console.log("\n=== Making coffee ===\n");
  coffee.prepareRecipe();
}

main();
