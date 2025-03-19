import { TV } from "./TV";
import { Radio } from "./Radio";
import { BasicRemote } from "./BasicRemote";
import { AdvancedRemote } from "./AdvancedRemote";

const main = () => {
  console.log("\n=== Basic Remote : TV ===\n");
  const tv = new TV();
  const basicRemote = new BasicRemote(tv);
  basicRemote.power();
  basicRemote.volumeUp();
  basicRemote.volumeUp();
  basicRemote.volumeDown();
  basicRemote.power();

  console.log("\n=== Advanced Remote : Radio ===\n");
  const radio = new Radio();
  const advancedRemote = new AdvancedRemote(radio);
  advancedRemote.power();
  advancedRemote.volumeUp();
  advancedRemote.volumeUp();
  advancedRemote.volumeDown();
  advancedRemote.mute();
  advancedRemote.power();
};

main();
