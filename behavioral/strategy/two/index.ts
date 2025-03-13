import { Compressor } from "./Compressor";
import { RunLengthEncoding } from "./RunLengthEncoding";
import { SimpleReplacementCompression } from "./SimpleReplacementCompression";

function main() {
  const data = "aabcccccaaa";
  const compressor = new Compressor();

  compressor.setCompressionStrategy(new RunLengthEncoding());
  console.log(`\nInput String: ${data}`);
  console.log(`Compression Method: Run Length Encoding`);
  console.log(`Compressed Result: ${compressor.compress(data)}\n`);

  compressor.setCompressionStrategy(new SimpleReplacementCompression());
  console.log(`\nInput String: ${data}`);
  console.log(`Compression Method: Simple Replacement`);
  console.log(`Compressed Result: ${compressor.compress(data)}\n`);
}

main();
