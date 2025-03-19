import { MessageSender } from "./MessageSender";

export abstract class Message {
  protected messageSender: MessageSender;

  constructor(messageSender: MessageSender) {
    this.messageSender = messageSender;
  }

  public abstract send(message: string): void;
}
