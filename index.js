"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const importFrom = (url, alias = "default") => __awaiter(void 0, void 0, void 0, function* () {
    return eval(`(function(name){var exports={};${yield (yield fetch(url)).text()}return exports[name];})("${alias}")`);
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    const BaseGame = yield importFrom("./BaseGame.js");
    const box = yield importFrom("./shapes.js", "box");
    class Game extends BaseGame {
        constructor(id, width, height) {
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
}))();
