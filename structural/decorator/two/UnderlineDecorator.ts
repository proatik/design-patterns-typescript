import { TextContent } from "./TextContent";
import { TextDecorator } from "./TextDecorator";

export class UnderlineDecorator extends TextDecorator {
  constructor(text: TextContent) {
    super(text);
  }

  getContent(): string {
    return `<u>${super.getContent()}</u>`;
  }
}
