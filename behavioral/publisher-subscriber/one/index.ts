import { Broker } from "./Broker";
import { Message } from "./Message";
import { NewsPublisher } from "./NewsPublisher";
import { NewsSubscriber } from "./NewsSubscriber";

function main() {
  const broker = new Broker();

  const publisher = new NewsPublisher(broker);

  const subscriber1 = new NewsSubscriber("Subscriber 1");
  const subscriber2 = new NewsSubscriber("Subscriber 2");

  broker.subscribe("sports", subscriber1);
  broker.subscribe("weather", subscriber2);
  broker.subscribe("sports", subscriber2);

  publisher.publish(new Message("Liverpool won the match", "sports"));
  publisher.publish(new Message("It's sunny today", "weather"));
}

main();
