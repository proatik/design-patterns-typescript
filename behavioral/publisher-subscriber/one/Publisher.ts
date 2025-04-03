import { Message } from "./Message";

export interface Publisher {
  publish(message: Message): void;
}
