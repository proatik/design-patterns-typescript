import { Connection } from "./Connection";

export class MySQLConnection implements Connection {
  open(): void {
    console.log("Opening MySQL connection");
  }
  close(): void {
    console.log("Closing MySQL connection");
  }
}
