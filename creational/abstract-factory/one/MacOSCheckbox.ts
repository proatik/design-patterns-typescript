import { Checkbox } from "./Checkbox";

export class MacOSCheckbox implements Checkbox {
  paint(): void {
    console.log("Rendering a checkbox in MacOS style");
  }
}
