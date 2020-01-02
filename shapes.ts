const drawPath = (
  ctx: CanvasRenderingContext2D,
  fn: (context: CanvasRenderingContext2D) => void
) => {
  ctx.beginPath();
  fn(ctx);
  ctx.closePath();
};
export const box = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  color: string
) => {
  drawPath(ctx, $ => {
    $.rect(x, y, w, h);
    $.fillStyle = color;
    $.fill();
  });
};

const shapes = { box };
export type Shapes = typeof shapes;
