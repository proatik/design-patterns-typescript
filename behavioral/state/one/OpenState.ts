import { Door } from "./Door";
import { State } from "./State";
import { ClosedState } from "./ClosedState";

export class OpenState implements State {
  open(door: Door): void {
    console.log("Door is already Open.");
  }

  close(door: Door): void {
    console.log("Door is now Closed.");
    door.setState(new ClosedState());
  }
}
