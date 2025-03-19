import { SMSSender } from "./SMSSender";
import { EmailSender } from "./EmailSender";
import { TextMessage } from "./TextMessage";
import { EncryptedMessage } from "./EncryptedMessage";

const main = () => {
  const smsSender = new SMSSender();
  const emailSender = new EmailSender();

  console.log("\n=== Text Message: Email Sender ===\n");
  const textMessage = new TextMessage(emailSender);
  textMessage.send("Hello World!");

  console.log("\n=== Encrypted Message : SMS Sender ===\n");
  const encryptedMessage = new EncryptedMessage(smsSender);
  encryptedMessage.send("Hello World!");
};

main();
