import { Collection } from "./Collection";
import { MyIterator } from "./MyIterator";
import { MyListIterator } from "./MyListIterator";

export class MyList implements Collection {
  private items: any[];
  private last: number;

  constructor(size: number) {
    this.items = new Array(size);
    this.last = 0;
  }

  add(item: any): void {
    if (this.last < this.items.length) {
      this.items[this.last] = item;
      this.last++;
    }
  }

  get(index: number): any {
    return this.items[index];
  }

  size(): number {
    return this.last;
  }

  createIterator(): MyIterator {
    return new MyListIterator(this);
  }
}
