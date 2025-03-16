import { State } from "./State";
import { VideoPlayer } from "./VideoPlayer";
import { PlayingState } from "./PlayingState";
import { StoppedState } from "./StoppedState";

export class PausedState implements State {
  play(player: VideoPlayer): void {
    console.log("Resuming the video.");
    player.setState(new PlayingState());
  }

  stop(player: VideoPlayer): void {
    console.log("Stopping the video.");
    player.setState(new StoppedState());
  }
}
