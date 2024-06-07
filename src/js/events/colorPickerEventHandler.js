/* Centralizes event listeners for user interactions, such as mouse clicks and movements for colorPicker canvas element */

export class CanvasEventHandler {
    constructor(canvasElement){
        this.canvas = canvasElement;
        this.isDrawing = false;
    }

    init(pencilTool){
        this.canvas.addEventListener('mousedown', (event) => this.onMouseDown(event.pencilTool));
        this.canvas.addEventListener('mousemove', (event) => this.onMouseMove(event.pencilTool));
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
        const x = Math.floor((event.clientX - rect.left) / scale);
        const y = Math.floor((event.clientY - rect.top) / scale);
        pencilTool.draw(x, y);
    }
}