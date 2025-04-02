import { Command } from "./Command";

export class PostgreSQLCommand implements Command {
  execute(query: string): void {
    console.log(`Executing PostgreSQL query: ${query}`);
  }
}
