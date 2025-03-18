import { USB } from "./USB";
import { DisplayAdapter } from "./DisplayAdapter";

export class USBAdapter implements DisplayAdapter {
  private usb: USB;
  private data: string;

  constructor(usb: USB, data: string) {
    this.usb = usb;
    this.data = data;
  }

  display(): void {
    this.usb.connectWithUsbCable(this.data);
  }
}
