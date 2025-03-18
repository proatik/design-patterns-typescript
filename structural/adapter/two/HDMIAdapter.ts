import { HDMI } from "./HDMI";
import { DisplayAdapter } from "./DisplayAdapter";

export class HDMIAdapter implements DisplayAdapter {
  private hdmi: HDMI;
  private resolution: number;

  constructor(hdmi: HDMI, resolution: number) {
    this.hdmi = hdmi;
    this.resolution = resolution;
  }

  display(): void {
    this.hdmi.connectWithHdmiCable(this.resolution);
  }
}
