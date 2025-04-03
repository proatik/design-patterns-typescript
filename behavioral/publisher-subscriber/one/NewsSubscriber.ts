import { Message } from "./Message";
import { Subscriber } from "./Subscriber";

export class NewsSubscriber implements Subscriber {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public update(message: Message): void {
    console.log(
      `${
        this.name
      } received: ${message.getContent()} on topic: ${message.getTopic()}`
    );
  }
}
