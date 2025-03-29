import { Handler } from "./Handler";

export class PositiveHandler extends Handler {
  protected process(number: number): void {
    if (number > 0) {
      console.log(`${number} is a positive number`);
    }
  }
}
