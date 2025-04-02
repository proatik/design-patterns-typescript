import { UIComponent } from "./UIComponent";

export class Window implements UIComponent {
  private title: string;
  private components: UIComponent[] = [];

  constructor(title: string) {
    this.title = title;
  }

  public render(): void {
    console.log(`Window: ${this.title}`);
    this.components.forEach((component) => component.render());
  }

  public add(component: UIComponent): void {
    this.components.push(component);
  }

  public remove(component: UIComponent): void {
    this.components = this.components.filter((c) => c !== component);
  }
}
