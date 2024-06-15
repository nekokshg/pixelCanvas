/* Renders the drawing canvas */
export class CanvasRenderer {
    constructor(canvasManager) {
        this.canvasManager = canvasManager;
        this.width = this.canvasManager.canvas.width;
        this.height = this.canvasManager.canvas.height;
        this.ctx = canvasManager.getContext();
        this.cellSize = canvasManager.cellSize; 
        // Disable anti-aliasing
        this.ctx.imageSmoothingEnabled = false;

        // Store the drawn pixels or shapes
        this.pixels = [];
    }

    drawPixel(x, y, color) {
        this._drawPixelInternal(x, y, color, true);
    }

    _drawPixelInternal(x, y, color, pushToPixels) {
        const roundedX = Math.round(x); // Round the coordinates to ensure they align with pixel boundaries
        const roundedY = Math.round(y);

        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.fillRect(roundedX, roundedY, 1, 1); // Draw a filled rectangle (pixel) at rounded coordinates
        this.ctx.closePath();
        if (pushToPixels) {
            this.pixels.push({ x: roundedX, y: roundedY, color });
        }
    }

    drawLine(prevX, prevY, x, y, color) {
        const dx = x - prevX;
        const dy = y - prevY;
        const steps = Math.max(Math.abs(dx), Math.abs(dy));
        const xIncrement = dx / steps;
        const yIncrement = dy / steps;

        for (let i = 0; i <= steps; i++) {
            const currentX = prevX + xIncrement * i;
            const currentY = prevY + yIncrement * i;
            this._drawPixelInternal(currentX, currentY, color, true);
        }
    }

    // Enhanced drawLinePreview to clear and redraw the line dynamically
    drawLinePreview(startX, startY, endX, endY, color) {
        const dx = endX - startX;
        const dy = endY - startY;
        const steps = Math.max(Math.abs(dx), Math.abs(dy));
        const xIncrement = dx / steps;
        const yIncrement = dy / steps;

        for (let i = 0; i <= steps; i++) {
            const currentX = startX + xIncrement * i;
            const currentY = startY + yIncrement * i;
            this._drawPixelInternal(currentX, currentY, color, false);
        }
    }

    erasePixel(x, y) {
        const roundedX = Math.round(x);
        const roundedY = Math.round(y);

        this.ctx.clearRect(roundedX, roundedY, 1, 1);

        this.pixels = this.pixels.filter(pixel => pixel.x !== roundedX || pixel.y !== roundedY);
    }

    eraseLine(prevX, prevY, x, y) {
        const dx = x - prevX;
        const dy = y - prevY;
        const steps = Math.max(Math.abs(dx), Math.abs(dy));
        const xIncrement = dx / steps;
        const yIncrement = dy / steps;

        for (let i = 0; i <= steps; i++) {
            const currentX = prevX + xIncrement * i;
            const currentY = prevY + yIncrement * i;
            this.erasePixel(currentX, currentY);
        }
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvasManager.canvas.width, this.canvasManager.canvas.height);
        this.pixels = [];
    }

    render() {
        // Re-draw all stored pixels
        this.pixels.forEach(pixel => {
            this.ctx.fillStyle = pixel.color;
            this.ctx.fillRect(pixel.x, pixel.y, 1, 1);
        });
    }
}