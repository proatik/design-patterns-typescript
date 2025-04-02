import { MySQLFactory } from "./MySQLFactory";
import { DatabaseClient } from "./DatabaseClient";
import { PostgreSQLFactory } from "./PostgreSQLFactory";

function main() {
  console.log("\n=== MySQL ===\n");
  const mysqlClient = new DatabaseClient(new MySQLFactory());
  mysqlClient.performDatabaseOperations();

  console.log("\n=== PostgreSQL ===\n");
  const postgresClient = new DatabaseClient(new PostgreSQLFactory());
  postgresClient.performDatabaseOperations();
}

main();
