import { Message } from "./Message";

export interface Subscriber {
  update(message: Message): void;
}
