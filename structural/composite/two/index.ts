import { Panel } from "./Panel";
import { Window } from "./Window";
import { Button } from "./Button";
import { TextBox } from "./TextBox";

function main() {
  const submitButton = new Button("Submit");
  const cancelButton = new Button("Cancel");
  const usernameField = new TextBox("Username");

  const formPanel = new Panel("Form");
  formPanel.add(submitButton);
  formPanel.add(cancelButton);
  formPanel.add(usernameField);

  const mainWindow = new Window("Main");
  mainWindow.add(formPanel);
  console.log("\n=== Initial Render ===\n");
  mainWindow.render();

  formPanel.remove(cancelButton);
  console.log("\n=== Next Render ===\n");
  mainWindow.render();
}

main();
