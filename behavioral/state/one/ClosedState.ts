import { Door } from "./Door";
import { State } from "./State";
import { OpenState } from "./OpenState";

export class ClosedState implements State {
  open(door: Door): void {
    console.log("Door is now Open.");
    door.setState(new OpenState());
  }

  close(door: Door): void {
    console.log("Door is already Closed.");
  }
}
