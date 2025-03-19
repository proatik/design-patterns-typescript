import { MessageSender } from "./MessageSender";

export class SMSSender implements MessageSender {
  sendMessage(message: string): void {
    console.log(`Sending SMS with message: ${message}`);
  }
}
