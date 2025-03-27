import { HttpRequest } from "./HttpRequest";

class HttpRequestBuilder {
  method: string;
  url: string;
  headers: Map<string, string> = new Map();
  parameters: Map<string, string> = new Map();
  body: string = "";

  constructor(method: string, url: string) {
    this.method = method;
    this.url = url;
  }

  addHeader(key: string, value: string): this {
    this.headers.set(key, value);
    return this;
  }

  addParameter(key: string, value: string): this {
    this.parameters.set(key, value);
    return this;
  }

  setBody(body: string): this {
    this.body = body;
    return this;
  }

  build(): HttpRequest {
    return HttpRequest.buildRequest(this);
  }
}

export { HttpRequestBuilder };
