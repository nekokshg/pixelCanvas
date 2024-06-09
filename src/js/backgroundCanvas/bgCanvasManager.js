export class BGCanvasManager {
    constructor(canvasId, blocksX, blocksY, cellSize) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.cellSize = cellSize;
        this.canvas.width = blocksX * cellSize;
        this.canvas.height = blocksY * cellSize;
    }

    getContext() {
        return this.ctx;
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}