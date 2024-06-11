/* Centralizes event listeners for user interactions, such as mouse clicks and movements for pixelCanvas canvas element */
import { PencilTool } from "../tools/pencilTool";
import { EraserTool } from "../tools/eraserTool";
import { ZoomTool } from "../tools/zoomTool";

export class CanvasEventHandler {
    constructor(canvasManagers, canvasRenderers, toolbar, colorPicker){
        this.canvasManagers = canvasManagers;
        this.canvasRenderers = canvasRenderers;

        //Canvas
        this.canvasManager = this.canvasManagers[0];
        this.canvasRenderer = this.canvasRenderers[0];
        this.canvas = this.canvasManager.canvas;

        //BG Canvas
        this.bgManager = this.canvasManagers[1];
        this.bgRenderer = this.canvasRenderers[1];

        //Tool Bar
        this.toolbar = toolbar;
        this.selectedTool = null;
        this.zoomFactor = 1.2;

        //Color Picker
        this.colorPicker = colorPicker;

        this.scale = this.canvasManager.scale;
        this.isDoing = false;
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
        } else if (this.selectedTool === 'zoomIn'){
            this.zoomIn(x, y);
        } else if (this.selectedTool === 'zoomOut'){
            this.zoomOut(x, y);
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
            } else if (this.selectedTool === 'zoomIn'){
                this.zoomIn(x, y);
            } else if (this.selectedTool === 'zoomOut'){
                this.zoomOut(x, y);
            }
        }
    }

    onMouseUp() {
        this.isDoing = false;
    }

    onMouseLeave(){ //fix logic if mouse is down and leave still want to be able to paint if mouse is down and enters
        this.isDoing = false;
    }

    getMousePosition(event) {
        const rect = this.canvas.getBoundingClientRect();
        const x = Math.floor((event.clientX - rect.left) / this.scale);
        const y = Math.floor((event.clientY - rect.top) / this.scale);
        console.log(`Mouse: ${x},${y}`)
        return { x, y };
    }

    drawWithPencil(x, y) {
        const pencilTool = new PencilTool(this.canvasRenderer, this.colorPicker);
        pencilTool.draw(x, y);
    }

    eraseWithEraser(x, y) {
        const eraserTool = new EraserTool(this.canvasRenderer);
        eraserTool.erase(x, y);
    }

    zoomIn(x, y){
        const zoomTool = new ZoomTool(this.zoomFactor, this.scale, this.canvasManagers, this.canvasRenderers);
        this.scale = zoomTool.zoom(x, y);
    }

    zoomOut(x, y){
        const zoomTool = new ZoomTool(1 / this.zoomFactor, this.scale, this.canvasManagers, this.canvasRenderers);
        this.scale = zoomTool.zoom(x ,y);
    }
}
