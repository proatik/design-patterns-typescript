import { SimpleCoffee } from "./SimpleCoffee";
import { MilkDecorator } from "./MilkDecorator";
import { SugarDecorator } from "./SugarDecorator";

function main() {
  let simpleCoffee = new SimpleCoffee();
  console.log(`${simpleCoffee.getDescription()} $${simpleCoffee.getCost()}`);

  let milkCoffee = new MilkDecorator(new SimpleCoffee());
  console.log(`${milkCoffee.getDescription()} $${milkCoffee.getCost()}`);

  let milkAndSugarCoffee = new SugarDecorator(
    new MilkDecorator(new SimpleCoffee())
  );
  console.log(
    `${milkAndSugarCoffee.getDescription()} $${milkAndSugarCoffee.getCost()}`
  );
}

main();
