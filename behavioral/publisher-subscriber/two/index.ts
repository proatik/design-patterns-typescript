import { IndividualCustomer } from "./IndividualCustomer";
import { MarketingDepartment } from "./MarketingDepartment";
import { EmailDeliveryService } from "./EmailDeliveryService";

function main() {
  const emailService = new EmailDeliveryService();
  const marketing = new MarketingDepartment(emailService, "ProductLaunch");

  const customer1 = new IndividualCustomer("Customer 1");
  const customer2 = new IndividualCustomer("Customer 2");

  emailService.subscribe("ProductLaunch", customer1);
  emailService.subscribe("ProductLaunch", customer2);

  marketing.launchCampaign("New Product");

  const customer3 = new IndividualCustomer("Customer 3");
  emailService.subscribe("ProductLaunch", customer3);

  marketing.launchCampaign("Update");

  setTimeout(() => {
    emailService.shutdown();
  }, 10000);
}

main();
