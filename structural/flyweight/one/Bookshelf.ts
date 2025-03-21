import { Book } from "./Book";

export class Bookshelf {
  private static bookshelf: Map<string, Book> = new Map();

  public static getBook(title: string): Book {
    let book = this.bookshelf.get(title);

    if (!book) {
      book = new Book(title);
      this.bookshelf.set(title, book);
      console.log(`Adding a new book to the bookshelf: ${title}`);
    } else {
      console.log(`Reusing existing book from the bookshelf: ${title}`);
    }

    return book;
  }
}
