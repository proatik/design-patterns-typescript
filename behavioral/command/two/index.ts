import { TextEditor } from "./TextEditor";
import { InsertTextCommand } from "./InsertTextCommand";
import { DeleteTextCommand } from "./DeleteTextCommand";
import { TextEditorInvoker } from "./TextEditorInvoker";

function main() {
  const editor = new TextEditor();
  const invoker = new TextEditorInvoker();

  const insertHello = new InsertTextCommand(editor, "Hello, ", 0);
  invoker.executeCommand(insertHello);

  const insertWorld = new InsertTextCommand(editor, "World!", 7);
  invoker.executeCommand(insertWorld);

  console.log("Current text: " + editor.getContent());

  invoker.undo();
  console.log("After undo: " + editor.getContent());

  invoker.redo();
  console.log("After redo: " + editor.getContent());

  const deleteCommand = new DeleteTextCommand(editor, 0, 7);
  invoker.executeCommand(deleteCommand);
  console.log("After delete: " + editor.getContent());

  invoker.undo();
  console.log("Final text: " + editor.getContent());
}

main();
