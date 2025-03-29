import { Logger } from "./Logger";
import { LogLevel } from "./LogLevel";

export class FileLogger extends Logger {
  constructor(level: LogLevel) {
    super();
    this.level = level;
  }

  protected write(message: string): void {
    console.log("File::Logger: " + message);
  }
}
