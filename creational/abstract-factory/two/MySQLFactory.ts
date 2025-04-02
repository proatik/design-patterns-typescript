import { Command } from "./Command";
import { ResultSet } from "./ResultSet";
import { Connection } from "./Connection";
import { MySQLCommand } from "./MySQLCommand";
import { MySQLResultSet } from "./MySQLResultSet";
import { DatabaseFactory } from "./DatabaseFactory";
import { MySQLConnection } from "./MySQLConnection";

export class MySQLFactory implements DatabaseFactory {
  createConnection(): Connection {
    return new MySQLConnection();
  }
  createCommand(): Command {
    return new MySQLCommand();
  }
  createResultSet(): ResultSet {
    return new MySQLResultSet();
  }
}
