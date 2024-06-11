export class BGCanvasRenderer {
    constructor(canvasManager) {
        this.ctx = canvasManager.getContext();
        this.cellSize = canvasManager.cellSize;
        // Disable anti-aliasing
        this.ctx.imageSmoothingEnabled = false;
    }

    render() {
        const rows = this.ctx.canvas.height / this.cellSize;
        const cols = this.ctx.canvas.width / this.cellSize;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const color = (i + j) % 2 === 0 ? '#FFFFFF' : '#CCCCCC';
                this.ctx.fillStyle = color;
                this.ctx.fillRect(j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize);
            }
        }
    }
}