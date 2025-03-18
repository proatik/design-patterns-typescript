import { MessageAdapter } from "./MessageAdapter";
import { OldMessageSystem } from "./OldMessageSystem";
import { ModernMessageSender } from "./ModernMessageSender";

const main = () => {
  const oldSystem = new OldMessageSystem();
  const adapter: ModernMessageSender = new MessageAdapter(oldSystem);

  adapter.sendMessage("Hello, World!", "john@example.com");
};

main();
