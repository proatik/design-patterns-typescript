import { ResultSet } from "./ResultSet";

export class PostgreSQLResultSet implements ResultSet {
  getResults(): void {
    console.log("Getting results from PostgreSQL database");
  }
}
