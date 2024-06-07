/* Centralizes event listeners for user interactions, such as mouse clicks and movements for pixelCanvas canvas element */
export class CanvasEventHandler {
    constructor(canvasElement, canvasScale){
        this.canvas = canvasElement;
        this.scale = canvasScale;
        this.isDrawing = false;
    }

    init(pencilTool) {
        this.canvas.addEventListener('mousedown', (event) => this.onMouseDown(event, pencilTool));
        this.canvas.addEventListener('mousemove', (event) => this.onMouseMove(event, pencilTool));
        this.canvas.addEventListener('mouseup', () => this.onMouseUp());
    }

    onMouseDown(event, pencilTool){
        this.isDrawing = true;
        this.draw(event, pencilTool);
    }

    onMouseMove(event, pencilTool){
        if (this.isDrawing){
            this.draw(event, pencilTool);
        }
    }

    onMouseUp(){
        this.isDrawing = false;
    }

    draw(event, pencilTool){
        const rect = this.canvas.getBoundingClientRect();
        const x = Math.floor((event.clientX - rect.left) / this.scale);
        const y = Math.floor((event.clientY - rect.top) / this.scale);
        pencilTool.draw(x, y);
    }
}