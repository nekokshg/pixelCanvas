export class BGCanvasRenderer {
    constructor(canvasManager) {
        this.ctx = canvasManager.getContext();
        this.cellSize = canvasManager.cellSize;
    }

    renderBackground() {
        const rows = this.ctx.canvas.height / this.cellSize;
        const cols = this.ctx.canvas.width / this.cellSize;

        // Iterate over rows and columns
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                // Alternate between grey and white cells
                const color = (i + j) % 2 === 0 ? '#FFFFFF' : '#CCCCCC';

                // Draw the cell
                this.ctx.fillStyle = color;
                this.ctx.fillRect(j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize);
            }
        }
    }
}
