import { PizzaBuilder } from "./PizzaBuilder";

function main() {
  const myPizza = new PizzaBuilder()
    .setDough("Thin Crust")
    .setSauce("Tomato")
    .setTopping("Cheese")
    .build();

  console.log(myPizza.toString());

  const orderType = "Veggie";

  const pizzaBuilder = new PizzaBuilder().setDough("Regular");

  pizzaBuilder.setSauce("Pesto");

  if (orderType === "Veggie") {
    pizzaBuilder.setTopping("Vegetables");
  } else {
    pizzaBuilder.setTopping("Pepperoni");
  }

  const customPizza = pizzaBuilder.build();
  console.log(customPizza.toString());
}

main();
