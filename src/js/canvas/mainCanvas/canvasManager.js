/* Manages the drawing canvas */
export class CanvasManager {
    constructor(canvasId, width, height, scale) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.origWidth = width;
        this.origHeight = height;

        this.width = width;
        this.height = height;
        this.scale = scale;
        this.imageData = null;
        this.updateCanvasSize();
        const canvasContainer = document.getElementsByClassName("canvasWrapper")[0];
        canvasContainer.style.width = `${this.canvas.width}px`;
        canvasContainer.style.height = `${this.canvas.height}px`;

    }

    getOrigWidth(){
        const width = this.origWidth;

        return width;
    }

    getOrigHeight(){
        const height = this.origHeight;

        return height;
    }

    getContext() {
        return this.ctx;
    }

    setScale(scale) {
        this.scale = scale;
        this.updateCanvasSize();
    }

    resize(scale){
        this.scale = scale;
        this.canvas.width = this.width * this.scale;
        this.canvas.height = this.height * this.scale;

        const canvasContainer = document.getElementsByClassName("canvasWrapper")[0];
        canvasContainer.style.width = `${this.canvas.width}px`;
        canvasContainer.style.height = `${this.canvas.height}px`;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.scale(this.scale, this.scale);
    }

    resizeCanvas(width, height){
        this.width = width;
        this.height = height;
        
        this.updateCanvasSize();
    }
    
    updateCanvasSize() {
        // Adjust the canvas size based on the scale
        this.canvas.width = this.width * this.scale;
        this.canvas.height = this.height * this.scale;

        // Clear the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Apply the scaling transformation directly to the main canvas context
        this.ctx.scale(this.scale, this.scale);
    }

}