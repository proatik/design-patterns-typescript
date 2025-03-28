import { PlainText } from "./PlainText";
import { TextContent } from "./TextContent";
import { BoldDecorator } from "./BoldDecorator";
import { ItalicDecorator } from "./ItalicDecorator";
import { UnderlineDecorator } from "./UnderlineDecorator";

function main() {
  let text: TextContent = new PlainText("Hello, Decorator Pattern!");
  console.log("Plain text: " + text.getContent());

  text = new BoldDecorator(text);
  console.log("Bold text: " + text.getContent());

  text = new ItalicDecorator(text);
  console.log("Bold and italic text: " + text.getContent());

  text = new UnderlineDecorator(text);
  console.log("Bold, italic, and underlined text: " + text.getContent());

  let anotherText: TextContent = new UnderlineDecorator(
    new ItalicDecorator(new PlainText("Another example"))
  );
  console.log("Underlined and italic text: " + anotherText.getContent());
}

main();
