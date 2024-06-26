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
        this.originalScale = this.canvasManager.scale;
        this.isDoing = false;
        this.isPopup = false;
        this.drawPixel = false;
        this.erasePixel = false;
        this.lastX = null;
        this.lastY = null;
        this.startX = null;
        this.startY = null;
        // Initialize translation offsets
        this.offsetX = 0;
        this.offsetY = 0;
        this.prevX = 0;
        this.notZooming = true;
        this.zoomOut_ = false;
        this.zoomPoints = [];
        this.zoomFactor = 1;
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

    onMouseLeave(){
        if (this.selectedTool != 'line'){
            this.isDoing = false;
        }
    }

    onMouseClick(event) {
        const { x, y } = this.getMousePosition(event);
        if (this.selectedTool === 'fill') {
            this.fillArea(x, y);
        } else if (this.selectedTool === 'zoomIn'){
            this.zoomIn(event);
        } else if (this.selectedTool === 'zoomOut'){
            this.zoomOut(event);
        }
        this.lastX = x;
        this.lastY = y;
    }

    getMousePosition(event) {
        const rect = this.canvas.getBoundingClientRect();
        
        // Mouse coordinates relative to the canvas
        const x_canvas = event.clientX - rect.left;
        const y_canvas = event.clientY - rect.top;

        // Transform the coordinates considering the current offset and scale
        let x = (x_canvas - this.offsetX) / this.scale;
        let y = (y_canvas - this.offsetY) / this.scale;
        
        x = Math.floor(x);
        y = Math.floor(y);

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

    zoom(zf, event) {
        this.notZooming = false;
        const canvas = this.canvas;
        const MIN_SCALE = this.originalScale;
        const MAX_SCALE = 100;
        const prevScale = this.scale;
        const zoomFactor = zf;

        // Ensure the scale stays within the specified bounds
        let newScale = prevScale * zoomFactor;
        newScale = Math.min(Math.max(newScale, MIN_SCALE), MAX_SCALE);

        //Check if scale ratio is a whole number and if not zooming out
        const scaleRatio = newScale / prevScale
        if (scaleRatio * 10 % 10 != 0 && this.zoomOut_ == false) {
            return;
        }

        // Update the scale property
        this.scale = newScale;

        let x, y;

        if (this.zoomOut_ == false){
            this.zoomFactor = zoomFactor;
            // Get the cursor position relative to the canvas
            let rect = canvas.getBoundingClientRect();
            x = Math.floor(event.clientX - rect.left);
            y = Math.floor(event.clientY - rect.top);

            // Push the zoom point to the stack on zoom in
            if (zoomFactor > 1) {
                this.zoomPoints.push({ x, y });
            }
        } else {
            if (this.zoomFactor > 1){
                this.zoomFactor -= 1;
            }
            let { x: zoomedX, y: zoomedY } = this.zoomPoints.pop();
            x = zoomedX;
            y = zoomedY;
        }

        // Calculate the new transformation
        let dx = x - x * scaleRatio;
        let dy = y - y * scaleRatio;
        
        // Calculate the position of the cursor in the coordinate system
        // before the zoom
        let prevCoordX = (x - this.offsetX) / prevScale;
        let prevCoordY = (y - this.offsetY) / prevScale;

        // Calculate the position of the cursor in the coordinate system
        // after the zoom
        let newCoordX = prevCoordX * newScale;
        let newCoordY = prevCoordY * newScale;

        let DX = x - newCoordX;
        let DY = y - newCoordY;
        
        // Calculate the new offsets
        this.offsetX = DX;
        this.offsetY = DY;

        // Transform the cursor position from screen space into the transformed canvas context
        this.canvasManagers.forEach(manager => {
            manager.ctx.clearRect(0,0, canvas.width, canvas.height);
            let t = manager.ctx.getTransform();
            manager.ctx.setTransform(1, 0, 0, 1, 0, 0);
            manager.ctx.translate(dx, dy);
            manager.ctx.scale(scaleRatio, scaleRatio);
            manager.ctx.transform(t.a, t.b, t.c, t.d, t.e, t.f);
            manager.scale = Math.round(newScale); //this affects the fill but when its unrounded the fill doesnt work after
        });
    
        // Render all canvas renderers
        this.canvasRenderer.render();
        this.bgRenderer.render();
    }
    
    zoomIn(event){
        const zoomFactor = this.zoomFactor;
        this.zoom(zoomFactor + 1, event);
    }

    zoomOut(event){
        const zoomFactor = 1 / this.zoomFactor;
        if (this.zoomPoints.length > 0) {
            this.zoomOut_ = true;
            this.zoom(zoomFactor, event);
        } 
        this.zoomOut_ = false;
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
