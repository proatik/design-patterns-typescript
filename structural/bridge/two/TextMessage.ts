import { Message } from "./Message";
import { MessageSender } from "./MessageSender";

export class TextMessage extends Message {
  constructor(messageSender: MessageSender) {
    super(messageSender);
  }

  send(message: string): void {
    this.messageSender.sendMessage(`Text Message: ${message}`);
  }
}
