import { CompressionStrategy } from "./CompressionStrategy";

export class RunLengthEncoding implements CompressionStrategy {
  compress(data: string): string {
    let compressed = "";
    let count = 1;

    for (let i = 1; i <= data.length; i++) {
      if (i < data.length && data[i] === data[i - 1]) {
        count++;
      } else {
        compressed += data[i - 1] + count;
        count = 1;
      }
    }
    return compressed;
  }
}
