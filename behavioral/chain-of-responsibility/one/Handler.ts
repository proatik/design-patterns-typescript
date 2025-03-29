export abstract class Handler {
  protected next: Handler | null = null;

  public setNext(next: Handler): void {
    this.next = next;
  }

  public handle(number: number): void {
    this.process(number);

    if (this.next !== null) {
      this.next.handle(number);
    }
  }

  protected abstract process(number: number): void;
}
