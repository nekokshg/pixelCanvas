/* Handles rendering operations on the canvas, such as drawing pixels, clearing the canvas, and managing layers */
export class CanvasRenderer {
    constructor(canvasManager){
        this.ctx = canvasManager.getContext();
    }

    drawPixel(x, y, color){
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, 1, 1); //Draw a filled rectangle (pixel) at position (x, y) whith width and height of 1
    }
}