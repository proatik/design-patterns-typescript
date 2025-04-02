import { File } from "./File";
import { Directory } from "./Directory";

function main() {
  const file1 = new File("Document.txt", 100);
  const file2 = new File("Image.jpg", 200);

  const subDir = new Directory("SubFolder");
  subDir.add(new File("SubFile.txt", 50));

  const rootDir = new Directory("RootFolder");
  rootDir.add(file1);
  rootDir.add(file2);
  rootDir.add(subDir);

  console.log("\n=== Initial structure: ===\n");
  rootDir.printName();
  console.log(`Total size: ${rootDir.getSize()} KB`);

  console.log("\n=== Removing Image.jpg: ===\n");
  rootDir.removeByName("Image.jpg");
  rootDir.printName();
  console.log(`Total size: ${rootDir.getSize()} KB`);

  console.log("\n=== Removing SubFolder: ===\n");
  rootDir.remove(subDir);
  rootDir.printName();
  console.log(`Total size: ${rootDir.getSize()} KB`);
}

main();
