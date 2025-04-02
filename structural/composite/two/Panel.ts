import { UIComponent } from "./UIComponent";

export class Panel implements UIComponent {
  private name: string;
  private components: UIComponent[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public render(): void {
    console.log(`Panel: ${this.name}`);
    this.components.forEach((component) => component.render());
  }

  public add(component: UIComponent): void {
    this.components.push(component);
  }

  public remove(component: UIComponent): void {
    this.components = this.components.filter((c) => c !== component);
  }
}
