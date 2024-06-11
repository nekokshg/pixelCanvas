/* Renders the drawing canvas */
export class CanvasRenderer {
    constructor(canvasManager) {
        this.ctx = canvasManager.getContext();
        this.cellSize = canvasManager.cellSize; 
        // Disable anti-aliasing
        this.ctx.imageSmoothingEnabled = false;
    }

    drawPixel(x, y, color) {
        this.erasePixel(x, y);
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, 1, 1); // Draw a filled rectangle (pixel) at position (x, y) with width and height of 1
    }

    erasePixel(x, y) {
        this.ctx.clearRect(x, y, 1, 1);
    }
}