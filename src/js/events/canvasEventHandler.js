/* Centralizes event listeners for user interactions, such as mouse clicks and movements for pixelCanvas canvas element */
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

        //Color Picker
        this.colorPicker = colorPicker;

        this.scale = this.canvasManager.scale;
        this.originX = 0;
        this.originY = 0;
        this.isDoing = false;
        this.isPopup = false;
    }

    init() {
        // Initialize canvas event listeners
        this.canvas.addEventListener('mousedown', (event) => this.onMouseDown(event));
        this.canvas.addEventListener('mousemove', (event) => this.onMouseMove(event));
        this.canvas.addEventListener('mouseup', () => this.onMouseUp());
        this.canvas.addEventListener('mouseleave', () => this.onMouseLeave());
    }

    onMouseDown(event) {
        if (!this.isPopup){
            // Get the selected tool from the toolbar
            this.selectedTool = this.toolbar.currentTool; // This will return the selected tool function
            this.isDoing = true;

            const { x, y } = this.getMousePosition(event);

            // Perform drawing operations using the selected tool
            if (this.selectedTool === 'pencil') {
                this.draw(x, y);
            } else if (this.selectedTool === 'eraser') {
                this.erase(x, y);
            } else if (this.selectedTool === 'zoomIn'){
                this.zoomIn(x, y);
            } else if (this.selectedTool === 'zoomOut'){
                this.zoomOut(x, y);
            }
        }
    }

    onMouseMove(event) {
        if (!this.isPopup && this.isDoing) {
            const { x, y } = this.getMousePosition(event);

            // Perform drawing operations using the selected tool
            if (this.selectedTool === 'pencil') {
                this.draw(x, y);
            } else if (this.selectedTool === 'eraser') {
                this.erase(x, y);
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

    draw(x, y) {
        const color = this.colorPicker.getColor();
        this.canvasRenderer.drawPixel(x, y, color);
    }

    erase(x, y) {
        this.canvasRenderer.erasePixel(x, y);
    }

    zoom(zf, x, y) {
        const MIN_SCALE = .1
        const MAX_SCALE = 100
        const mouseX = x;
        const mouseY = y;
        const currScale = this.scale;
        const zoomFactor = zf;
        let newScale = 0;
    
        // Calculate new scale and ensure it does not go below a minimum value
        if (zoomFactor < 1.2){
            newScale = Math.floor(currScale * zoomFactor);
        } else {
            newScale = Math.ceil(currScale * zoomFactor);
        }

        // If the new scale is out of bounds, return without making changes
        if (newScale < MIN_SCALE || newScale > MAX_SCALE) {
            alert('Cannot zoom any further');
            return;
        }

        // Calculate new origin positions
        const newOriginX = mouseX / newScale - mouseX / currScale + this.originX;
        const newOriginY = mouseY / newScale - mouseY / currScale + this.originY;
    
        // Apply transformations
        this.canvasRenderers.forEach(renderer => {
            renderer.ctx.translate(newOriginX - this.originX, newOriginY - this.originY);
            renderer.ctx.scale(zoomFactor, zoomFactor);
            renderer.ctx.translate(-newOriginX, -newOriginY);
        });
    
        // Update scale and resize canvas
        this.canvasManagers.forEach(manager => {
            manager.setScale(newScale);
        });
    
        // Re-render canvases
        this.canvasRenderers.forEach(renderer => {
            renderer.render();
        });
    
        // Update origin and scale
        this.originX = newOriginX;
        this.originY = newOriginY;
        this.scale = newScale;
    }    

    zoomIn(x, y){
        const zoomFactor = 1.2;
        this.zoom(zoomFactor, x, y);
    }

    zoomOut(x, y){
        const zoomFactor = 1.2;
        this.zoom(1 / zoomFactor, x, y);
    }
}
