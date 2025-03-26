import { User } from "./User";

export interface ChatMediator {
  sendMessage(message: string, user: User): void;
  addUser(user: User): void;
}
