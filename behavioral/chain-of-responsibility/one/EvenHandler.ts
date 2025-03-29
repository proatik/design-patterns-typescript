import { Handler } from "./Handler";

export class EvenHandler extends Handler {
  protected process(number: number): void {
    if (number % 2 === 0) {
      console.log(`${number} is an even number`);
    }
  }
}
