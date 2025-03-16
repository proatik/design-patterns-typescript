import { Theme } from "./Theme";
import { Label } from "./Label";
import { Button } from "./Button";
import { TextField } from "./TextField";

function main() {
  const button = new Button("Submit");
  const label = new Label("Username");
  const textField = new TextField("Enter your name");

  console.log("\n=== Theme : light (default) ===\n");
  button.display();
  textField.display();
  label.display();

  Theme.getInstance().setThemeColor("dark");

  console.log("\n=== Theme : dark ===\n");
  button.display();
  textField.display();
  label.display();
}

main();
