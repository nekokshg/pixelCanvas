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

    resize(scale){
        //Function to resize the canvas based on a new scale
        this.scale = scale;
        this.canvas.width = this.width * this.cellSize * this.scale;
        this.canvas.height = this.height * this.cellSize * this.scale;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.scale(this.scale, this.scale);
    }

    resizeCanvas(width, height){
        //Function to resize the canvas based on new width and height
        this.width = width;
        this.height = height;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.width = this.width * this.cellSize * this.scale;
        this.canvas.height = this.height * this.cellSize * this.scale;
        this.ctx.setTransform(this.scale, 0, 0, this.scale, 0, 0);
    }

    updateCanvasSize() {
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.width = this.width * this.cellSize * this.scale;
        this.canvas.height = this.height * this.cellSize * this.scale;
        this.ctx.scale(this.scale, this.scale)
    }
}