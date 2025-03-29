import { Logger } from "./Logger";
import { LogLevel } from "./LogLevel";
import { FileLogger } from "./FileLogger";
import { ConsoleLogger } from "./ConsoleLogger";
import { NetworkLogger } from "./NetworkLogger";

function getChainOfLoggers(): Logger {
  const fileLogger = new FileLogger(LogLevel.DEBUG);
  const consoleLogger = new ConsoleLogger(LogLevel.INFO);
  const networkLogger = new NetworkLogger(LogLevel.WARN);

  networkLogger.setNextLogger(fileLogger);
  fileLogger.setNextLogger(consoleLogger);

  return networkLogger;
}

function main() {
  const loggerChain = getChainOfLoggers();

  console.log("\n=== INFO ===\n");
  loggerChain.logMessage(LogLevel.INFO, "This is an information.");

  console.log("\n=== DEBUG ===\n");
  loggerChain.logMessage(LogLevel.DEBUG, "This is a debug level information.");

  console.log("\n=== WARN ===\n");
  loggerChain.logMessage(LogLevel.WARN, "This is a warning information.");
}

main();
