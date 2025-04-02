import { UIComponent } from "./UIComponent";

export class Button implements UIComponent {
  private label: string;

  constructor(label: string) {
    this.label = label;
  }

  public render(): void {
    console.log(`Button: ${this.label}`);
  }

  public add(component: UIComponent): void {
    throw new Error("Unsupported operation");
  }

  public remove(component: UIComponent): void {
    throw new Error("Unsupported operation");
  }
}
