import { Command } from "./Command";
import { TextEditor } from "./TextEditor";

export class InsertTextCommand implements Command {
  private editor: TextEditor;
  private text: string;
  private position: number;

  constructor(editor: TextEditor, text: string, position: number) {
    this.editor = editor;
    this.text = text;
    this.position = position;
  }

  execute(): void {
    this.editor.insertText(this.text, this.position);
  }

  undo(): void {
    this.editor.deleteText(this.position, this.text.length);
  }
}
