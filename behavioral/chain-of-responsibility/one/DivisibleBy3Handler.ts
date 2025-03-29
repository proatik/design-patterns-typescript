import { Handler } from "./Handler";

export class DivisibleBy3Handler extends Handler {
  protected process(number: number): void {
    if (number % 3 === 0) {
      console.log(`${number} is divisible by 3`);
    }
  }
}
