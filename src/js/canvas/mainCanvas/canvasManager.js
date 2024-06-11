/* Manages the drawing canvas */
export class CanvasManager {
    constructor(canvasId, width, height, scale) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.width = width;
        this.height = height;
        this.scale = scale;
        this.imageData = null;
        this.updateCanvasSize();
    }

    getContext() {
        return this.ctx;
    }

    clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    setScale(scale) {
        this.scale = scale;
        console.log(this)
        console.log(this.scale)
        this.updateCanvasSize();
    }
    
    updateCanvasSize() {
        const { width, height } = this.canvas;

        // Store the current canvas content
        const imageData = this.ctx.getImageData(0, 0, width, height);

        // Adjust the canvas size based on the scale
        this.canvas.width = this.width * this.scale;
        this.canvas.height = this.height * this.scale;

        // Clear the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Apply the scaling transformation directly to the main canvas context
        this.ctx.scale(this.scale, this.scale);

        // Draw the scaled image data back to the main canvas
        this.ctx.putImageData(imageData, 0, 0);
    }
}