import { TextContent } from "./TextContent";
import { TextDecorator } from "./TextDecorator";

export class BoldDecorator extends TextDecorator {
  constructor(text: TextContent) {
    super(text);
  }

  getContent(): string {
    return `<b>${super.getContent()}</b>`;
  }
}
