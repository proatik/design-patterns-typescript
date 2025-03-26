import { File } from "./File";
import { Directory } from "./Directory";
import { FileSearchVisitor } from "./FileSearchVisitor";
import { SizeCalculatorVisitor } from "./SizeCalculatorVisitor";

function main(): void {
  const file1: File = new File("file1.txt", 100);
  const file2: File = new File("file2.txt", 200);
  const file3: File = new File("file3.txt", 300);

  const dir1: Directory = new Directory("Folder1");
  dir1.addElement(file1);
  dir1.addElement(file2);

  const dir2: Directory = new Directory("Folder2");
  dir2.addElement(file3);

  const rootDir: Directory = new Directory("Root");
  rootDir.addElement(dir1);
  rootDir.addElement(dir2);

  const sizeVisitor: SizeCalculatorVisitor = new SizeCalculatorVisitor();
  rootDir.accept(sizeVisitor);
  console.log(`Total size of file system: ${sizeVisitor.getTotalSize()} bytes`);

  const searchVisitor: FileSearchVisitor = new FileSearchVisitor("file3.txt");
  rootDir.accept(searchVisitor);

  const foundFile: File | null = searchVisitor.getFoundFile();
  if (foundFile !== null) {
    console.log(
      `File found: ${foundFile.getName()}, Size: ${foundFile.getSize()} bytes`
    );
  } else {
    console.log("File not found.");
  }
}

main();
