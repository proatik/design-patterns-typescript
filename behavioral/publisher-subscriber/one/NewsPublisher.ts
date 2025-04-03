import { Broker } from "./Broker";
import { Message } from "./Message";
import { Publisher } from "./Publisher";

export class NewsPublisher implements Publisher {
  private broker: Broker;

  constructor(broker: Broker) {
    this.broker = broker;
  }

  public publish(message: Message): void {
    console.log(
      `Publishing: ${message.getContent()} on topic: ${message.getTopic()}`
    );

    this.broker.publish(message);
  }
}
