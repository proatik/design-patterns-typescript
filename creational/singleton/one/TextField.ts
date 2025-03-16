import { Theme } from "./Theme";

export class TextField {
  private text: string;

  constructor(text: string) {
    this.text = text;
  }

  public display(): void {
    const themeColor = Theme.getInstance().getThemeColor();
    console.log(`TextField [${this.text}] displayed in ${themeColor} theme.`);
  }
}
