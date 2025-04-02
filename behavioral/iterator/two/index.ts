import { File } from "./File";
import { Directory } from "./Directory";
import { FileSystem } from "./FileSystem";

function main() {
  const root = new Directory("root");
  const home = new Directory("home");
  const user = new Directory("user");
  const file1 = new File("file1.txt");
  const file2 = new File("file2.txt");
  const file3 = new File("file3.txt");

  root.add(home);
  home.add(user);
  user.add(file1);
  user.add(file2);
  home.add(file3);

  const fileSystem = new FileSystem(root);

  console.log("\n=== Depth-First Traversal ===\n");
  const depthIterator = fileSystem.depthFirstIterator();

  while (depthIterator.hasNext()) {
    console.log(depthIterator.next()?.getName());
  }

  console.log("\n=== Breadth-First Traversal ===\n");
  const breadthIterator = fileSystem.breadthFirstIterator();

  while (breadthIterator.hasNext()) {
    console.log(breadthIterator.next()?.getName());
  }
}

main();
