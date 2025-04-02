import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { GUIFactory } from "./GUIFactory";

export class Application {
  private button: Button;
  private checkbox: Checkbox;

  constructor(factory: GUIFactory) {
    this.button = factory.createButton();
    this.checkbox = factory.createCheckbox();
  }

  public paint(): void {
    this.button.paint();
    this.checkbox.paint();
  }
}
