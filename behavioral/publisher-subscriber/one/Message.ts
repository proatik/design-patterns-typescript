export class Message {
  private content: string;
  private topic: string;

  constructor(content: string, topic: string) {
    this.content = content;
    this.topic = topic;
  }

  public getContent(): string {
    return this.content;
  }

  public getTopic(): string {
    return this.topic;
  }
}
