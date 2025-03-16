import { Theme } from "./Theme";

export class Button {
  private label: string;

  constructor(label: string) {
    this.label = label;
  }

  public display(): void {
    const themeColor = Theme.getInstance().getThemeColor();
    console.log(`Button [${this.label}] displayed in ${themeColor} theme.`);
  }
}
