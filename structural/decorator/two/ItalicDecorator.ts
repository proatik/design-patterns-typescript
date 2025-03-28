import { TextContent } from "./TextContent";
import { TextDecorator } from "./TextDecorator";

export class ItalicDecorator extends TextDecorator {
  constructor(text: TextContent) {
    super(text);
  }

  getContent(): string {
    return `<i>${super.getContent()}</i>`;
  }
}
