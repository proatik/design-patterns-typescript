export class TextEditor {
  private content: string;

  constructor() {
    this.content = "";
  }

  insertText(text: string, position: number): void {
    this.content =
      this.content.slice(0, position) + text + this.content.slice(position);
  }

  deleteText(position: number, length: number): void {
    this.content =
      this.content.slice(0, position) + this.content.slice(position + length);
  }

  getTextSubstring(start: number, end: number): string {
    return this.content.slice(start, end);
  }

  getContent(): string {
    return this.content;
  }
}
