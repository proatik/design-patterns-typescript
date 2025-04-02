import { Command } from "./Command";
import { ResultSet } from "./ResultSet";
import { Connection } from "./Connection";
import { DatabaseFactory } from "./DatabaseFactory";
import { PostgreSQLCommand } from "./PostgreSQLCommand";
import { PostgreSQLResultSet } from "./PostgreSQLResultSet";
import { PostgreSQLConnection } from "./PostgreSQLConnection";

export class PostgreSQLFactory implements DatabaseFactory {
  createConnection(): Connection {
    return new PostgreSQLConnection();
  }
  createCommand(): Command {
    return new PostgreSQLCommand();
  }
  createResultSet(): ResultSet {
    return new PostgreSQLResultSet();
  }
}
