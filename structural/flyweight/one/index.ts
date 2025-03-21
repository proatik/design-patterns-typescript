import { Bookshelf } from "./Bookshelf";

function main() {
  const book1 = Bookshelf.getBook("Effective Java");
  book1.read();

  const book2 = Bookshelf.getBook("Effective Java");
  book2.read();

  const book3 = Bookshelf.getBook("Clean Code");
  book3.read();

  console.log(
    book1 === book2
      ? "Same book for 'Effective Java'."
      : "Different books for 'Effective Java'."
  );
}

main();
