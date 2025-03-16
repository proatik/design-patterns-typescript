import { State } from "./State";
import { ClosedState } from "./ClosedState";

export class Door {
  private state: State;

  constructor() {
    this.state = new ClosedState();
  }

  public setState(state: State): void {
    this.state = state;
  }

  public open(): void {
    this.state.open(this);
  }

  public close(): void {
    this.state.close(this);
  }
}
