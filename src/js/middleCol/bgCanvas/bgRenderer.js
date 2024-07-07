/**
 * This file contains the BackgroundCanvasRenderer class, which is responsible for rendering
 * the background canvas in the PixelCanvas application. It handles the drawing operations
 * and ensures that the background canvas is rendered correctly based on the current state.
 */

export class BGRenderer{
    constructor(canvasManager){
        this.canvasManager = canvasManager;
        this.canvas = this.canvasManager.canvas;
        this.width = this.canvasManager.getWidth();
        this.height = this.canvasManager.getHeight();
        this.scale = this.canvasManager.getScale();
        this.ctx = this.canvasManager.getContext();
        this.blockSize = this.canvasManager.getBlockSize();

        // Disable anti-aliasing
        this.ctx.imageSmoothingEnabled = false;
    }

    render() {
        const blocksX = this.canvas.width / this.blockSize;
        const blocksY = this.canvas.height / this.blockSize;
    
        for (let i = 0; i < Math.ceil(blocksY); i++) {
            for (let j = 0; j < Math.ceil(blocksX); j++) {
                const color = (i + j) % 2 === 0 ? '#FFFFFF' : '#CCCCCC';
                this.ctx.fillStyle = color;
    
                // Calculate the width and height of the current block
                const width = (j + 1) * this.blockSize > this.ctx.canvas.width ? this.ctx.canvas.width - j * this.blockSize : this.blockSize;
                const height = (i + 1) * this.blockSize > this.ctx.canvas.height ? this.ctx.canvas.height - i * this.blockSize : this.blockSize;
    
                this.ctx.fillRect(j * this.blockSize, i * this.blockSize, width, height);
            }
        }
    }

    clear() {
        //Function to clear canvas element of all drawings
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}