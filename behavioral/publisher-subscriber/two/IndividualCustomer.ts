import { Customer } from "./Customer";

export class IndividualCustomer implements Customer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public receiveEmail(message: string): void {
    console.log(`${this.name} is receiving email async: ${message}`);

    setTimeout(() => {
      console.log(`${this.name} finished reading email: ${message}`);
    }, 5000);
  }
}
