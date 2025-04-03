import { EmailDeliveryService } from "./EmailDeliveryService";

export class MarketingDepartment {
  private emailService: EmailDeliveryService;
  private eventType: string;

  constructor(emailService: EmailDeliveryService, eventType: string) {
    this.emailService = emailService;
    this.eventType = eventType;
  }

  public launchCampaign(message: string): void {
    console.log(`Launching campaign: ${message}`);
    this.emailService.sendEmails(this.eventType, message);
  }
}
