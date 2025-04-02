import { MyList } from "./MyList";
import { MyIterator } from "./MyIterator";

function main() {
  const list = new MyList(3);
  list.add("A");
  list.add("B");
  list.add("C");

  const iterator: MyIterator = list.createIterator();

  while (iterator.hasNext()) {
    console.log(iterator.next());
  }
}

main();
