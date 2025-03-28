import { DocumentMemento } from "./DocumentMemento";

export class Document {
  private content: string;

  constructor() {
    this.content = "";
  }

  write(text: string): void {
    this.content += text;
  }

  getContent(): string {
    return this.content;
  }

  save(): DocumentMemento {
    return new DocumentMemento(this.content);
  }

  restore(memento: DocumentMemento): void {
    this.content = memento.getContent();
  }
}
