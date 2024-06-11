/* Renders the drawing canvas */
export class CanvasRenderer {
    constructor(canvasManager) {
        this.canvasManager = canvasManager;
        this.ctx = canvasManager.getContext();
        this.cellSize = canvasManager.cellSize; 
        // Disable anti-aliasing
        this.ctx.imageSmoothingEnabled = false;

        // Store the drawn pixels or shapes
        this.pixels = [];
    }

    drawPixel(x, y, color) {
        const roundedX = Math.round(x); // Round the coordinates to ensure they align with pixel boundaries
        const roundedY = Math.round(y);

        this.erasePixel(roundedX, roundedY);

        this.ctx.fillStyle = color;
        this.ctx.fillRect(roundedX, roundedY, 1, 1); // Draw a filled rectangle (pixel) at rounded coordinates

        this.pixels.push({ x: roundedX, y: roundedY, color });
    }

    erasePixel(x, y) {
        const roundedX = Math.round(x);
        const roundedY = Math.round(y);

        this.ctx.clearRect(roundedX, roundedY, 1, 1);

        this.pixels = this.pixels.filter(pixel => pixel.x !== roundedX || pixel.y !== roundedY);
    }

    render() {
        this.ctx.imageSmoothingEnabled = false;
        // Clear the entire canvas
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        // Re-draw all stored pixels
        this.pixels.forEach(pixel => {
            this.ctx.fillStyle = pixel.color;
            this.ctx.fillRect(pixel.x, pixel.y, 1, 1);
        });
    }
}