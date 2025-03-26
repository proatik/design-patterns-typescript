import { User } from "./User";
import { ChatMediator } from "./ChatMediator";

export class ChatMediatorImpl implements ChatMediator {
  private users: User[] = [];

  public addUser(user: User): void {
    this.users.push(user);
  }

  public sendMessage(message: string, user: User): void {
    for (let u of this.users) {
      if (u !== user) {
        u.receive(message);
      }
    }
  }
}
