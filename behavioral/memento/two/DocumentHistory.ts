import { DocumentMemento } from "./DocumentMemento";

export class DocumentHistory {
  private history: DocumentMemento[] = [];

  push(memento: DocumentMemento): void {
    this.history.push(memento);
  }

  pop(): DocumentMemento | null {
    if (this.history.length > 0) {
      return this.history.pop()!;
    }
    return null;
  }
}
