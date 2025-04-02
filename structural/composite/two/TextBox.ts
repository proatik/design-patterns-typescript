import { UIComponent } from "./UIComponent";

export class TextBox implements UIComponent {
  private text: string;

  constructor(text: string) {
    this.text = text;
  }

  public render(): void {
    console.log(`TextBox: ${this.text}`);
  }

  public add(component: UIComponent): void {
    throw new Error("Unsupported operation");
  }

  public remove(component: UIComponent): void {
    throw new Error("Unsupported operation");
  }
}
