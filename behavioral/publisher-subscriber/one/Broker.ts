import { Message } from "./Message";
import { Subscriber } from "./Subscriber";

export class Broker {
  private subscribers: Map<string, Subscriber[]> = new Map();

  public subscribe(topic: string, subscriber: Subscriber): void {
    if (!this.subscribers.has(topic)) {
      this.subscribers.set(topic, []);
    }

    this.subscribers.get(topic)?.push(subscriber);
  }

  public publish(message: Message): void {
    const topicSubscribers = this.subscribers.get(message.getTopic());

    if (topicSubscribers) {
      topicSubscribers.forEach((subscriber) => {
        subscriber.update(message);
      });
    }
  }
}
