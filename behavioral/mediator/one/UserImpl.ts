import { User } from "./User";
import { ChatMediator } from "./ChatMediator";

export class UserImpl extends User {
  constructor(mediator: ChatMediator, name: string) {
    super(mediator, name);
  }

  public send(message: string): void {
    console.log(`${this.name}: Sending Message = ${message}`);
    this.mediator.sendMessage(message, this);
  }

  public receive(message: string): void {
    console.log(`${this.name}: Received Message = ${message}`);
  }
}
