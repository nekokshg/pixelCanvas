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
        this.drawPixel = false;
        this.erasePixel = false;
        this.lastX = null;
        this.lastY = null;
        this.startX = null;
        this.startY = null;
    }

    init() {
        // Initialize canvas event listeners
        this.canvas.addEventListener('mousedown', (event) => this.onMouseDown(event));
        this.canvas.addEventListener('mousemove', (event) => this.onMouseMove(event));
        this.canvas.addEventListener('mouseup', (event) => this.onMouseUp(event));
        this.canvas.addEventListener('mouseleave', () => this.onMouseLeave());
        this.canvas.addEventListener('click', (event) => this.onMouseClick(event));
    }

    onMouseDown(event) {
        if (!this.isPopup){
            // Get the selected tool from the toolbar
            this.selectedTool = this.toolbar.currentTool; // This will return the selected tool function
            this.isDoing = true;

            const { x, y } = this.getMousePosition(event);

            this.lastX = x;
            this.lastY = y;

            // Perform drawing operations using the selected tool
            if (this.selectedTool === 'pencil') {
                this.drawPixel = true;
                this.draw(this.lastX, this.lastY, x, y);
            } else if (this.selectedTool === 'eraser') {
                this.erasePixel = true;
                this.erase(this.lastX, this.lastY, x, y);
            } else if (this.selectedTool === 'zoomIn'){
                this.zoomIn(x, y);
            } else if (this.selectedTool === 'zoomOut'){
                this.zoomOut(x, y);
            } else if (this.selectedTool === 'line') {
                this.startLinePreview(x, y);
            }
        }
    }

    onMouseMove(event) {
        if (!this.isPopup && this.isDoing) {
            const { x, y } = this.getMousePosition(event);

            // Perform drawing operations using the selected tool
            if (this.selectedTool === 'pencil') {
                //this.drawPixel = false;
                this.draw(this.lastX, this.lastY, x, y);
            } else if (this.selectedTool === 'eraser') {
                this.erase(this.lastX, this.lastY, x, y);
            } else if (this.selectedTool === 'zoomIn'){
                this.zoomIn(x, y);
            } else if (this.selectedTool === 'zoomOut'){
                this.zoomOut(x, y);
            } else if (this.selectedTool === 'line') {
                this.updateLinePreview(this.startX, this.startY, x, y);
            }

            this.lastX = x;
            this.lastY = y;
        }
    }

    onMouseUp(event) {
        if (this.selectedTool === 'line') {
            const { x, y } = this.getMousePosition(event);
            this.commitLine(this.startX, this.startY, x, y);
        } 
        this.isDoing = false;
    }

    onMouseLeave(){ //fix logic if mouse is down and leave still want to be able to paint if mouse is down and enters
        this.isDoing = false;
    }

    onMouseClick(event) {
        const { x, y } = this.getMousePosition(event);
        if (this.selectedTool === 'fill') {
            this.fillArea(x, y);
        }
    }

    getMousePosition(event) {
        const rect = this.canvas.getBoundingClientRect();
        const x = Math.floor((event.clientX - rect.left) / this.scale);
        const y = Math.floor((event.clientY - rect.top) / this.scale);
        return { x, y };
    }

    draw(prevX, prevY, x, y) {
        const color = this.colorPicker.getColor();
        if (this.drawPixel == true){
            this.canvasRenderer.drawPixel(x, y, color);
            this.drawPixel = false;
        } else{
            this.canvasRenderer.drawLine(prevX, prevY, x, y, color);
        }
    }

    erase(prevX, prevY, x, y) {
        if (this.erasePixel == true){
            this.canvasRenderer.erasePixel(x, y);
            this.erasePixel = false;
        } else {
            this.canvasRenderer.eraseLine(prevX, prevY, x, y);
        }
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

    // Save the starting point and preview image for the line
    startLinePreview(startX, startY) {
        this.previewImage = this.canvasRenderer.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        this.startX = startX;
        this.startY = startY;
    }

    // Update the line preview dynamically
    updateLinePreview(startX, startY, endX, endY) {
        // Clear the canvas and redraw the previous image
        if (this.previewImage) {
            this.canvasRenderer.ctx.putImageData(this.previewImage, 0, 0);
        }
        this.canvasRenderer.drawLinePreview(startX, startY, endX, endY, this.colorPicker.getColor());
    }

    // Commit the final line to the canvas
    commitLine(startX, startY, endX, endY) {
        this.canvasRenderer.drawLine(startX, startY, endX, endY, this.colorPicker.getColor());
        startX = null;
        startY = null;
        this.previewImage = null;
    }

    fillArea(x, y) {
        const targetColor = this.getColorAtPixel(x, y);
        const colorString = this.colorPicker.getColor();
        const rgbaValues = colorString.match(/\d+(\.\d+)?/g);
    
        const r = parseInt(rgbaValues[0]);
        const g = parseInt(rgbaValues[1]);
        const b = parseInt(rgbaValues[2]);
        const a = parseInt(rgbaValues[3]);
    
        const fillColor = { r, g, b, a };
    
        // Fill only if the target is not already the fill color
        if (!this.colorsAreEqual(targetColor, fillColor, true)) {
            this.canvasRenderer.floodFill(x, y, targetColor, fillColor);
        }
    }
      
    getColorAtPixel(x, y) {
        const pixel = this.canvasRenderer.ctx.getImageData(x, y, 1, 1).data;
        return {
            r: pixel[0],
            g: pixel[1],
            b: pixel[2],
            a: pixel[3]
        };
    }
    
    colorsAreEqual(color1, color2, includeAlpha = false) {
        if (includeAlpha) {
            return color1.r === color2.r && color1.g === color2.g && color1.b === color2.b && color1.a === color2.a;
        }
        return color1.r === color2.r && color1.g === color2.g && color1.b === color2.b;
    }
}
