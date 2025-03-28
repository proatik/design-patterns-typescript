export class GameMemento {
  private level: string;
  private score: number;

  constructor(level: string, score: number) {
    this.level = level;
    this.score = score;
  }

  getLevel(): string {
    return this.level;
  }

  getScore(): number {
    return this.score;
  }
}
