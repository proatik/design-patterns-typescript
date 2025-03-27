import { HttpRequestBuilder } from "./HttpRequestBuilder";

class HttpRequest {
  private method: string;
  private url: string;
  private headers: Map<string, string>;
  private parameters: Map<string, string>;
  private body: string;

  private constructor(builder: HttpRequestBuilder) {
    this.method = builder.method;
    this.url = builder.url;
    this.headers = builder.headers;
    this.parameters = builder.parameters;
    this.body = builder.body;
  }

  toString(): string {
    return JSON.stringify(
      {
        method: this.method,
        url: this.url,
        headers: Object.fromEntries(this.headers),
        parameters: Object.fromEntries(this.parameters),
        body: this.body,
      },
      null,
      2
    );
  }

  static buildRequest(builder: HttpRequestBuilder): HttpRequest {
    return new HttpRequest(builder);
  }
}

export { HttpRequest };
