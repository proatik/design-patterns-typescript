import { FileSystemFacade } from "./FileSystemFacade";

async function main() {
  const fs = new FileSystemFacade();

  console.log("=== Write Operation ===");
  const writeSuccess = await fs.writeFile("test.txt", "Hello, Facade Pattern!");
  console.log("File write success:", writeSuccess);
  console.log("=== Write Operation Complete ===\n");

  console.log("=== Read Operation ===");
  const content = await fs.readFile("test.txt");
  console.log("File content:", content);
  console.log("=== Read Operation Complete ===\n");

  console.log("=== Delete Operation ===");
  const deleteSuccess = await fs.deleteFile("test.txt");
  console.log("File delete success:", deleteSuccess);
  console.log("=== Delete Operation Complete ===\n");
}

main();
