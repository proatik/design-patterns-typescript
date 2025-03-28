import { GameMemento } from "./GameMemento";

export class Game {
  private level: string;
  private score: number;

  set(level: string, score: number): void {
    this.level = level;
    this.score = score;
    console.log(`Game state set to - Level: ${level}, Score: ${score}`);
  }

  save(): GameMemento {
    return new GameMemento(this.level, this.score);
  }

  restore(memento: GameMemento): void {
    this.level = memento.getLevel();
    this.score = memento.getScore();
    console.log(
      `Game state restored to - Level: ${this.level}, Score: ${this.score}`
    );
  }
}
