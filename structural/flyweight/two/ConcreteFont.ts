import { Font } from "./Font";

export class ConcreteFont implements Font {
  private font: string;
  private size: number;
  private color: string;

  constructor(font: string, size: number, color: string) {
    this.font = font;
    this.size = size;
    this.color = color;
  }

  apply(text: string): void {
    console.log(
      `Text: '${text}' with Font: ${this.font}, Size: ${this.size}, Color: ${this.color}`
    );
  }
}
