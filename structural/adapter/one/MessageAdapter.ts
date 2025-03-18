import { OldMessageSender } from "./OldMessageSender";
import { ModernMessageSender } from "./ModernMessageSender";

export class MessageAdapter implements ModernMessageSender {
  private oldSystem: OldMessageSender;

  constructor(oldSystem: OldMessageSender) {
    this.oldSystem = oldSystem;
  }

  sendMessage(message: string, recipient: string): void {
    const messageData = [message, recipient];
    const result = this.oldSystem.send(messageData);
    if (result !== 1) {
      console.log("Failed to send message");
    }
  }
}
