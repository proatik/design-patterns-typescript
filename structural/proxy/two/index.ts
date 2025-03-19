import { BankAccountProxy } from "./BankAccountProxy";

function main() {
  console.log("\n=== With Admin Access ===\n");

  const adminAccount = new BankAccountProxy("Admin", 1000);
  adminAccount.deposit(500);
  adminAccount.withdraw(300);

  console.log("\n=== Without Admin Access ===\n");
  const userAccount = new BankAccountProxy("User", 1000);
  userAccount.deposit(500);
  userAccount.withdraw(300);
}

main();
