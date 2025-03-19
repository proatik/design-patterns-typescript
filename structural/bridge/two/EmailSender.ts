import { MessageSender } from "./MessageSender";

export class EmailSender implements MessageSender {
  sendMessage(message: string): void {
    console.log(`Sending email with message: ${message}`);
  }
}
