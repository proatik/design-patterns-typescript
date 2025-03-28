import { Command } from "./Command";
import { TextEditor } from "./TextEditor";

export class DeleteTextCommand implements Command {
  private editor: TextEditor;
  private deletedText: string;
  private position: number;

  constructor(editor: TextEditor, position: number, length: number) {
    this.editor = editor;
    this.position = position;
    this.deletedText = editor.getTextSubstring(position, position + length);
  }

  execute(): void {
    this.editor.deleteText(this.position, this.deletedText.length);
  }

  undo(): void {
    this.editor.insertText(this.deletedText, this.position);
  }
}
