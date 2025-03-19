import { BankAccount } from "./BankAccount";
import { RealBankAccount } from "./RealBankAccount";

export class BankAccountProxy implements BankAccount {
  private realBankAccount: RealBankAccount;
  private userRole: string;

  constructor(userRole: string, initialBalance: number) {
    this.userRole = userRole;
    this.realBankAccount = new RealBankAccount(initialBalance);
  }

  private hasAccess(): boolean {
    return this.userRole.toLowerCase() === "admin";
  }

  withdraw(amount: number): void {
    if (this.hasAccess()) {
      this.realBankAccount.withdraw(amount);
    } else {
      console.log("Access denied. Only Admin can withdraw.");
    }
  }

  deposit(amount: number): void {
    this.realBankAccount.deposit(amount);
  }
}
