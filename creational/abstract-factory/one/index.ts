import { Application } from "./Application";
import { MacOSFactory } from "./MacOSFactory";
import { WindowsFactory } from "./WindowsFactory";

function main() {
  console.log("\n=== Windows Factory ===\n");
  const windowsFactory = new WindowsFactory();
  const windowsApp = new Application(windowsFactory);
  windowsApp.paint();

  console.log("\n=== Mac Factory ===\n");
  const macFactory = new MacOSFactory();
  const macApp = new Application(macFactory);
  macApp.paint();
}

main();
