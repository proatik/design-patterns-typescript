import { Command } from "./Command";

export class MySQLCommand implements Command {
  execute(query: string): void {
    console.log(`Executing MySQL query: ${query}`);
  }
}
