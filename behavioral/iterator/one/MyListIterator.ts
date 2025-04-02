import { MyIterator } from "./MyIterator";
import { MyList } from "./MyList";

export class MyListIterator implements MyIterator {
  private list: MyList;
  private index: number;

  constructor(list: MyList) {
    this.list = list;
    this.index = 0;
  }

  hasNext(): boolean {
    return this.index < this.list.size();
  }

  next(): any {
    if (this.hasNext()) {
      return this.list.get(this.index++);
    }

    return null;
  }
}
