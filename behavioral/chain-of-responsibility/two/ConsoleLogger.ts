import { Logger } from "./Logger";
import { LogLevel } from "./LogLevel";

export class ConsoleLogger extends Logger {
  constructor(level: LogLevel) {
    super();
    this.level = level;
  }

  protected write(message: string): void {
    console.log("Console::Logger: " + message);
  }
}
