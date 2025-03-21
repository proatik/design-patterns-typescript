import { NewsAgency } from "./NewsAgency";
import { NewsChannel } from "./NewsChannel";

function main() {
  const agency = new NewsAgency();

  const channel1 = new NewsChannel("Channel 1");
  const channel2 = new NewsChannel("Channel 2");

  agency.registerObserver(channel1);
  agency.registerObserver(channel2);

  agency.setNews("Breaking news: Observer Pattern in action!");

  agency.removeObserver(channel2);

  agency.setNews("Another update: Channel 2 unsubscribed.");
}

main();
