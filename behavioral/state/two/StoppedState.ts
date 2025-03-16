import { State } from "./State";
import { VideoPlayer } from "./VideoPlayer";
import { PlayingState } from "./PlayingState";

export class StoppedState implements State {
  play(player: VideoPlayer): void {
    console.log("Starting the video.");
    player.setState(new PlayingState());
  }

  stop(player: VideoPlayer): void {
    console.log("Video is already stopped.");
  }
}
