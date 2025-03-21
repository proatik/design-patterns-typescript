import { Font } from "./Font";
import { ConcreteFont } from "./ConcreteFont";

export class FontFactory {
  private static fontMap: Map<string, Font> = new Map();

  public static getFont(font: string, size: number, color: string): Font {
    const key = `${font}${size}${color}`;
    let fontObject = this.fontMap.get(key);

    if (!fontObject) {
      fontObject = new ConcreteFont(font, size, color);
      this.fontMap.set(key, fontObject);
      console.log(`Creating font: ${key}`);
    } else {
      console.log(`Reusing font: ${key}`);
    }

    return fontObject;
  }
}
