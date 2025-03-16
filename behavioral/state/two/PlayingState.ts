import { State } from "./State";
import { VideoPlayer } from "./VideoPlayer";
import { PausedState } from "./PausedState";

export class PlayingState implements State {
  play(player: VideoPlayer): void {
    console.log("Video is already playing.");
  }

  stop(player: VideoPlayer): void {
    console.log("Pausing the video.");
    player.setState(new PausedState());
  }
}
