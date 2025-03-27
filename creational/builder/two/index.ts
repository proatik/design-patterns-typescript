import { HttpRequestBuilder } from "./HttpRequestBuilder";

function main() {
  const getRequest = new HttpRequestBuilder("GET", "https://example.com/api")
    .addHeader("Authorization", "Bearer token")
    .addParameter("query", "builder-pattern")
    .build();

  const postRequest = new HttpRequestBuilder("POST", "https://example.com/api")
    .addHeader("Authorization", "Bearer token")
    .setBody('{ "name": "John", "age": 30 }')
    .build();

  console.log("\n=== GET Request ===\n");
  console.log(getRequest.toString());

  console.log("\n=== POST Request ===\n");
  console.log(postRequest.toString());
}

main();
