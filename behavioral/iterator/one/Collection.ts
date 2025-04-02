import { MyIterator } from "./MyIterator";

export interface Collection {
  createIterator(): MyIterator;
}
