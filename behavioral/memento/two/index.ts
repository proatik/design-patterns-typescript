import { Editor } from "./Editor";

function main() {
  const editor = new Editor();

  editor.write("Hello, ");
  editor.write("this is Memento pattern. ");
  console.log(editor.getContent());

  editor.undo();
  console.log(editor.getContent());

  editor.write("This is an example implemented in TypeScript.");
  console.log(editor.getContent());
}

main();
