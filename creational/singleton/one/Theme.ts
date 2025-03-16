export class Theme {
  private static instance: Theme;
  private themeColor: string;

  private constructor() {
    this.themeColor = "light";
  }

  public static getInstance(): Theme {
    if (!Theme.instance) {
      Theme.instance = new Theme();
    }
    return Theme.instance;
  }

  public getThemeColor(): string {
    return this.themeColor;
  }

  public setThemeColor(themeColor: string): void {
    this.themeColor = themeColor;
  }
}
