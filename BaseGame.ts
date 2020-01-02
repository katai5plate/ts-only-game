export default class BaseGame {
  view: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  intervalId: number;
  frameCount: number;
  constructor(id: string, width: number, height: number) {
    this.view = document.getElementById(id) as HTMLCanvasElement;
    this.view.width = width;
    this.view.height = height;
    this.ctx = this.view.getContext("2d") as CanvasRenderingContext2D;
    this.frameCount = 0;
    this.clear();
    this.setup();
    this.intervalId = setInterval(
      (() => {
        this.clear();
        this.draw();
        this.frameCount++;
      }).bind(this),
      1
    );
    this.draw();
  }
  clear() {
    this.ctx.clearRect(0, 0, this.view.width, this.view.height);
  }
  setup() {}
  draw() {}
}
export type BaseGameType = typeof BaseGame;
