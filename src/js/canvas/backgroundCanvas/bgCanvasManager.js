export class BGCanvasManager {
    constructor(canvasId, width, height, cellSize, scale) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.cellSize = cellSize;
        this.width = width;
        this.height = height;
        this.scale = scale;

        this.updateCanvasSize();
    }

    getContext() {
        return this.ctx;
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    setScale(scale) {
        this.scale = scale;
        this.updateCanvasSize();
    }

    updateCanvasSize() {
        this.canvas.width = this.width * this.cellSize * this.scale;
        this.canvas.height = this.height * this.cellSize * this.scale;
        this.ctx.setTransform(this.scale, 0, 0, this.scale, 0, 0);
    }
}