export class BGCanvasRenderer {
    constructor(canvasManager) {
        this.canvasManager = canvasManager;
        this.canvas = this.canvasManager.canvas;
        this.width = this.canvasManager.canvas.width;
        this.height = this.canvasManager.canvas.height;
        this.ctx = canvasManager.getContext();
        this.cellSize = canvasManager.cellSize;
        // Disable anti-aliasing
        this.ctx.imageSmoothingEnabled = false;
    }

    render() {
        const blocksX = this.canvas.width / this.cellSize;
        const blocksY = this.canvas.height / this.cellSize;
    
        for (let i = 0; i < Math.ceil(blocksY); i++) {
            for (let j = 0; j < Math.ceil(blocksX); j++) {
                const color = (i + j) % 2 === 0 ? '#FFFFFF' : '#CCCCCC';
                this.ctx.fillStyle = color;
    
                // Calculate the width and height of the current block
                const width = (j + 1) * this.cellSize > this.ctx.canvas.width ? this.ctx.canvas.width - j * this.cellSize : this.cellSize;
                const height = (i + 1) * this.cellSize > this.ctx.canvas.height ? this.ctx.canvas.height - i * this.cellSize : this.cellSize;
    
                this.ctx.fillRect(j * this.cellSize, i * this.cellSize, width, height);
            }
        }
    }
}