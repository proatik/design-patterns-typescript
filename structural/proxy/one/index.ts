import { ProxyImage } from "./ProxyImage";

function main() {
  const image = new ProxyImage("test_image.jpg");

  console.log("File name: " + image.getFileName());
  console.log("File extension: " + image.getFileExtension());

  console.log("\n=== First Time ===\n");

  image.display();

  console.log("\n=== Second Time ===\n");
  image.display();
}

main();
