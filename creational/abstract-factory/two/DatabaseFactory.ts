import { Command } from "./Command";
import { ResultSet } from "./ResultSet";
import { Connection } from "./Connection";

export interface DatabaseFactory {
  createConnection(): Connection;
  createCommand(): Command;
  createResultSet(): ResultSet;
}
