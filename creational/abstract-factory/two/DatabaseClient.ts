import { Command } from "./Command";
import { ResultSet } from "./ResultSet";
import { Connection } from "./Connection";
import { DatabaseFactory } from "./DatabaseFactory";

export class DatabaseClient {
  private connection: Connection;
  private command: Command;
  private resultSet: ResultSet;

  constructor(factory: DatabaseFactory) {
    this.connection = factory.createConnection();
    this.command = factory.createCommand();
    this.resultSet = factory.createResultSet();
  }

  public performDatabaseOperations(): void {
    this.connection.open();
    this.command.execute("SELECT * FROM users");
    this.resultSet.getResults();
    this.connection.close();
  }
}
