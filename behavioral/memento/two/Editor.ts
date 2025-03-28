import { Document } from "./Document";
import { DocumentHistory } from "./DocumentHistory";

export class Editor {
  private document: Document;
  private history: DocumentHistory;

  constructor() {
    this.document = new Document();
    this.history = new DocumentHistory();
  }

  write(text: string): void {
    this.history.push(this.document.save());
    this.document.write(text);
  }

  undo(): void {
    const memento = this.history.pop();
    if (memento !== null) {
      this.document.restore(memento);
    }
  }

  getContent(): string {
    return this.document.getContent();
  }
}
