import { Game } from "./Game";
import { GameCaretaker } from "./GameCaretaker";

function main() {
  const game = new Game();
  const caretaker = new GameCaretaker();

  game.set("Level 1", 100);
  caretaker.add(game.save());

  game.set("Level 2", 200);
  caretaker.add(game.save());

  game.set("Level 3", 300);

  game.restore(caretaker.get(1));
  game.restore(caretaker.get(0));
}

main();
