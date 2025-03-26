import { User } from "./User";
import { UserImpl } from "./UserImpl";
import { ChatMediator } from "./ChatMediator";
import { ChatMediatorImpl } from "./ChatMediatorImpl";

function main(): void {
  const mediator: ChatMediator = new ChatMediatorImpl();

  const user1: User = new UserImpl(mediator, "John");
  const user2: User = new UserImpl(mediator, "Jane");
  const user3: User = new UserImpl(mediator, "Bob");
  const user4: User = new UserImpl(mediator, "Alice");

  mediator.addUser(user1);
  mediator.addUser(user2);
  mediator.addUser(user3);
  mediator.addUser(user4);

  user1.send("Hi All");
}

main();
