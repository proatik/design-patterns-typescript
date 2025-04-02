import { Button } from "./Button";

export class MacOSButton implements Button {
  paint(): void {
    console.log("Rendering a button in MacOS style");
  }
}
