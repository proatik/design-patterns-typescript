import { Prototype } from "./Prototype";

export interface Document extends Prototype {
  setContent(content: string): void;
  getContent(): string;
  clone(): Document;
}
