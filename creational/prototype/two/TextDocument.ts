import { Document } from "./Document";

export class TextDocument implements Document {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  clone(): Document {
    return new TextDocument(this.content);
  }

  setContent(content: string): void {
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }
}
