import { Connection } from "./Connection";

export class PostgreSQLConnection implements Connection {
  open(): void {
    console.log("Opening PostgreSQL connection");
  }
  close(): void {
    console.log("Closing PostgreSQL connection");
  }
}
