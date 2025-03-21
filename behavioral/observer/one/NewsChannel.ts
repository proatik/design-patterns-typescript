import { Observer } from "./Observer";

export class NewsChannel implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(news: string): void {
    console.log(`${this.name} received news: ${news}`);
  }
}
