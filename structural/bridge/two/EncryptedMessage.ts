import { Message } from "./Message";
import { MessageSender } from "./MessageSender";

export class EncryptedMessage extends Message {
  constructor(messageSender: MessageSender) {
    super(messageSender);
  }

  send(message: string): void {
    const encryptedMessage = this.encrypt(message);
    this.messageSender.sendMessage(`Encrypted Message: ${encryptedMessage}`);
  }

  private encrypt(message: string): string {
    return message.split("").reverse().join("");
  }
}
