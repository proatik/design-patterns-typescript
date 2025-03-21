export class Book {
  private readonly title: string;

  constructor(title: string) {
    this.title = title;
  }

  read(): void {
    console.log(`Reading the book titled: ${this.title}`);
  }
}
