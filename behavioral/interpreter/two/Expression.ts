export interface Expression {
  interpret(context: any): number;
}
