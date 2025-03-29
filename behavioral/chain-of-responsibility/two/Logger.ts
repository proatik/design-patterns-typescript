import { LogLevel } from "./LogLevel";

export abstract class Logger {
  protected level: LogLevel;
  protected nextLogger: Logger | null = null;

  public setNextLogger(nextLogger: Logger): void {
    this.nextLogger = nextLogger;
  }

  public logMessage(level: LogLevel, message: string): void {
    if (this.shouldLog(level)) {
      this.write(message);
    }

    if (this.nextLogger !== null) {
      this.nextLogger.logMessage(level, message);
    }
  }

  protected shouldLog(level: LogLevel): boolean {
    const levelOrder = this.getLevelOrder(this.level);
    const messageLevelOrder = this.getLevelOrder(level);
    return levelOrder <= messageLevelOrder;
  }

  private getLevelOrder(level: LogLevel): number {
    switch (level) {
      case LogLevel.WARN:
        return 3;
      case LogLevel.DEBUG:
        return 2;
      case LogLevel.INFO:
        return 1;
      default:
        return 0;
    }
  }

  protected abstract write(message: string): void;
}
