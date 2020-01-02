"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const drawPath = (ctx, fn) => {
    ctx.beginPath();
    fn(ctx);
    ctx.closePath();
};
exports.box = (ctx, x, y, w, h, color) => {
    drawPath(ctx, $ => {
        $.rect(x, y, w, h);
        $.fillStyle = color;
        $.fill();
    });
};
const shapes = { box: exports.box };
