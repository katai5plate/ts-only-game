import { BaseGameType } from "./BaseGame";
import { Shapes } from "./shapes";

const importFrom = async <T>(url: string, alias = "default") =>
  eval(
    `(function(name){var exports={};${await (
      await fetch(url)
    ).text()}return exports[name];})("${alias}")`
  ) as T;

(async () => {
  const BaseGame = await importFrom<BaseGameType>("./BaseGame.js");
  const box = await importFrom<Shapes["box"]>("./shapes.js", "box");

  class Game extends BaseGame {
    constructor(id: string, width: number, height: number) {
      super(id, width, height);
    }
    setup() {
      console.log("hello!");
    }
    draw() {
      box(this.ctx, 20 + this.frameCount, 40, 50, 50, "yellow");
    }
  }

  new Game("view", 640, 480);
})();
