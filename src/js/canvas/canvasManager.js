/* Responsible for initializing and managing the canvas element, including setting up size and scale */

export class CanvasManager{
    constructor(canvasId, width, height, scale){
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.scale = scale;
        this.canvas.width = width * scale;
        this.canvas.height = height * scale;
        this.ctx.scale(scale, scale); 
    }

    getContext(){
        return this.ctx;
    }

    clearCanvas(){
        this.ctx.clearRect(0, 0, this.canvas.width / this.scale, this.canvas.height / this.scale);
    }
}