import { USB } from "./USB";
import { HDMI } from "./HDMI";
import { VGA } from "./VGA";
import { USBAdapter } from "./USBAdapter";
import { VGAAdapter } from "./VGAAdapter";
import { HDMIAdapter } from "./HDMIAdapter";
import { DisplayAdapter } from "./DisplayAdapter";

const main = () => {
  const usb = new USB();
  const vga = new VGA();
  const hdmi = new HDMI();

  const adapters: DisplayAdapter[] = [];
  adapters.push(new USBAdapter(usb, "Video Data"));
  adapters.push(new HDMIAdapter(hdmi, 1080));
  adapters.push(new VGAAdapter(vga, true));

  for (const adapter of adapters) {
    adapter.display();
  }
};

main();
