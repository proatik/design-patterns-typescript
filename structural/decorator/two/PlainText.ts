import { TextContent } from "./TextContent";

export class PlainText implements TextContent {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }
}
