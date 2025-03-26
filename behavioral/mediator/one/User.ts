import { ChatMediator } from "./ChatMediator";

export abstract class User {
  protected mediator: ChatMediator;
  protected name: string;

  constructor(mediator: ChatMediator, name: string) {
    this.mediator = mediator;
    this.name = name;
  }

  public abstract send(message: string): void;
  public abstract receive(message: string): void;
}
