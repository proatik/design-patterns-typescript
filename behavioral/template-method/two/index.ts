import { CSVDataProcessor } from "./CSVDataProcessor";
import { JSONDataProcessor } from "./JSONDataProcessor";

function main() {
  console.log("\n=== Process CSV data ===\n");
  const csvProcessor = new CSVDataProcessor();
  csvProcessor.process("CSV data");

  console.log("\n=== Process JSON data ===\n");
  const jsonProcessor = new JSONDataProcessor();
  jsonProcessor.process("XML data");
}

main();
