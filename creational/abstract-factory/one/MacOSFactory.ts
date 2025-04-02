import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { GUIFactory } from "./GUIFactory";
import { MacOSButton } from "./MacOSButton";
import { MacOSCheckbox } from "./MacOSCheckbox";

export class MacOSFactory implements GUIFactory {
  createButton(): Button {
    return new MacOSButton();
  }

  createCheckbox(): Checkbox {
    return new MacOSCheckbox();
  }
}
