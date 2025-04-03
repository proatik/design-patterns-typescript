import { Customer } from "./Customer";

export class EmailDeliveryService {
  private customerGroups: Map<string, Customer[]> = new Map();

  public subscribe(eventType: string, customer: Customer): void {
    if (!this.customerGroups.has(eventType)) {
      this.customerGroups.set(eventType, []);
    }

    this.customerGroups.get(eventType)?.push(customer);
  }

  public sendEmails(eventType: string, message: string): void {
    const customers = this.customerGroups.get(eventType);

    if (customers) {
      customers.forEach((customer) => {
        setTimeout(() => customer.receiveEmail(message), 0);
      });
    }
  }

  public shutdown(): void {
    console.log("Shutting down email service.");
  }
}
