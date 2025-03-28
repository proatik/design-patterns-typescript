import { GameMemento } from "./GameMemento";

export class GameCaretaker {
  private mementoList: GameMemento[] = [];

  add(state: GameMemento): void {
    this.mementoList.push(state);
  }

  get(index: number): GameMemento {
    return this.mementoList[index];
  }
}
