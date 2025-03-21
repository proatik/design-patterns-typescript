import { Subject } from "./Subject";
import { Observer } from "./Observer";

export class NewsAgency implements Subject {
  private observers: Observer[] = [];
  private news: string = "";

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);

    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.news);
    }
  }

  setNews(news: string): void {
    this.news = news;
    this.notifyObservers();
  }
}
