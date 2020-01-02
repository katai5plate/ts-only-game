"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseGame {
    constructor(id, width, height) {
        this.view = document.getElementById(id);
        this.view.width = width;
        this.view.height = height;
        this.ctx = this.view.getContext("2d");
        this.frameCount = 0;
        this.clear();
        this.setup();
        this.intervalId = setInterval((() => {
            this.clear();
            this.draw();
            this.frameCount++;
        }).bind(this), 1);
        this.draw();
    }
    clear() {
        this.ctx.clearRect(0, 0, this.view.width, this.view.height);
    }
    setup() { }
    draw() { }
}
exports.default = BaseGame;
