import { ResultSet } from "./ResultSet";

export class MySQLResultSet implements ResultSet {
  getResults(): void {
    console.log("Getting results from MySQL database");
  }
}
