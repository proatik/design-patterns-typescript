import { VGA } from "./VGA";
import { DisplayAdapter } from "./DisplayAdapter";

export class VGAAdapter implements DisplayAdapter {
  private vga: VGA;
  private highQuality: boolean;

  constructor(vga: VGA, highQuality: boolean) {
    this.vga = vga;
    this.highQuality = highQuality;
  }

  display(): void {
    this.vga.connectWithVgaCable(this.highQuality);
  }
}
