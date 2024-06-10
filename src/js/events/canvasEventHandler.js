/* Centralizes event listeners for user interactions, such as mouse clicks and movements for pixelCanvas canvas element */
import { PencilTool } from "../tools/pencilTool";
import { EraserTool } from "../tools/eraserTool";

export class CanvasEventHandler {
    constructor(canvasElement, canvasScale, toolbarEventHandler, canvasRenderer, colorPicker, canvasUtils) {
        this.canvas = canvasElement;
        this.scale = canvasScale;
        this.isDoing = false;
        this.toolbar = toolbarEventHandler;
        this.selectedTool = null;
        this.canvasRenderer = canvasRenderer;
        this.colorPicker = colorPicker;
        this.canvasUtils = canvasUtils;
    }

    init() {
        // Initialize canvas event listeners
        this.canvas.addEventListener('mousedown', (event) => this.onMouseDown(event));
        this.canvas.addEventListener('mousemove', (event) => this.onMouseMove(event));
        this.canvas.addEventListener('mouseup', () => this.onMouseUp());
        this.canvas.addEventListener('mouseleave', () => this.onMouseLeave());
    }

    onMouseDown(event) {
        // Get the selected tool from the toolbar
        this.selectedTool = this.toolbar.currentTool; // This will return the selected tool function
        this.isDoing = true;

        const { x, y } = this.getMousePosition(event);

        // Perform drawing operations using the selected tool
        if (this.selectedTool === 'pencil') {
            this.drawWithPencil(x, y);
        } else if (this.selectedTool === 'eraser') {
            this.eraseWithEraser(x, y);
        }
    }

    onMouseMove(event) {
        if (this.isDoing) {
            const { x, y } = this.getMousePosition(event);

            // Perform drawing operations using the selected tool
            if (this.selectedTool === 'pencil') {
                this.drawWithPencil(x, y);
            } else if (this.selectedTool === 'eraser') {
                this.eraseWithEraser(x, y);
            }
        }
    }

    onMouseUp() {
        this.isDoing = false;
    }

    onMouseLeave(){ //fix logic if mouse is down and leave still want to be able to paint if mouse is down and enters
        this.isDoing = false;
    }

    drawWithPencil(x, y) {
        const pencilTool = new PencilTool(this.canvasRenderer, this.colorPicker);
        pencilTool.draw(x, y);
    }

    eraseWithEraser(x, y) {
        const eraserTool = new EraserTool(this.canvasRenderer);
        eraserTool.erase(x, y);
    }

    getMousePosition(event) {
        this.scale = this.canvasUtils.canvasManagers[0].scale
        const rect = this.canvas.getBoundingClientRect();
        const x = Math.floor((event.clientX - rect.left) / this.scale);
        const y = Math.floor((event.clientY - rect.top) / this.scale);
        return { x, y };
    }
}
