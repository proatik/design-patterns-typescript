export abstract class Beverage {
  public prepareRecipe(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  private boilWater(): void {
    console.log("Boiling water");
  }

  private pourInCup(): void {
    console.log("Pouring into cup");
  }

  protected abstract brew(): void;
  protected abstract addCondiments(): void;
}
