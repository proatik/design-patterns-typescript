import { TextContent } from "./TextContent";

export abstract class TextDecorator implements TextContent {
  protected decoratedText: TextContent;

  constructor(text: TextContent) {
    this.decoratedText = text;
  }

  getContent(): string {
    return this.decoratedText.getContent();
  }
}
