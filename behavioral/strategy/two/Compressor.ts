import { CompressionStrategy } from "./CompressionStrategy";

export class Compressor {
  private strategy: CompressionStrategy;

  setCompressionStrategy(strategy: CompressionStrategy): void {
    this.strategy = strategy;
  }

  compress(data: string): string {
    return this.strategy.compress(data);
  }
}
