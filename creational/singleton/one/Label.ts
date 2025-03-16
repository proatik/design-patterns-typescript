import { Theme } from "./Theme";

export class Label {
  private text: string;

  constructor(text: string) {
    this.text = text;
  }

  public display(): void {
    const themeColor = Theme.getInstance().getThemeColor();
    console.log(`Label [${this.text}] displayed in ${themeColor} theme.`);
  }
}
