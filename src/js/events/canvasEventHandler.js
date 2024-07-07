/* Centralizes event listeners for user interactions, such as mouse clicks and movements for pixelCanvas canvas element */
export class CanvasEventHandler {
    constructor(canvasManagers, canvasRenderers, toolbar, colorPicker){
        this.canvasManagers = canvasManagers;
        this.canvasRenderers = canvasRenderers;

        //Canvas
        this.canvasManager = this.canvasManagers[0];
        this.canvasRenderer = this.canvasRenderers[0];
        this.canvas = this.canvasManager.canvas;

        //Canvas Info
        this.xCoordInfo = document.getElementsByClassName('xCoord')[0];
        this.yCoordInfo = document.getElementsByClassName('yCoord')[0];
        this.zoomAmountInfo = document.getElementsByClassName('zoomAmount')[0];

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

        this.prevX = 0;
        this.notZooming = true;
        this.zoomOut_ = false;
        this.zoomPoints = [];
        this.zoomFactor = 1;
        this.rounded = true;
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

            const { x, y } = this.getMousePosition(event, this.rounded);

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
            const { x, y } = this.getMousePosition(event, this.rounded);

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
            const { x, y } = this.getMousePosition(event, this.rounded);
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
        if (this.selectedTool === 'fill') {
            this.rounded = false;
            const { x, y } = this.getMousePosition(event, this.rounded);
            this.fillArea(x, y);
            this.rounded = true;
        } else if (this.selectedTool === 'zoomIn'){
            this.zoomIn(event);
        } else if (this.selectedTool === 'zoomOut'){
            this.zoomOut(event);
        }
    }

    getMousePosition(event, rounded) {
        const rect = this.canvas.getBoundingClientRect();
        
        // Mouse coordinates relative to the canvas
        const x_canvas = event.clientX - rect.left;
        const y_canvas = event.clientY - rect.top;

        // Transform the coordinates considering the current offset and scale
        let x = x_canvas / this.scale;
        let y = y_canvas / this.scale;

        if (rounded == true){
            x = Math.floor(x)
            y = Math.floor(y)
        }

        this.xCoordInfo.textContent = `X: ${ Math.floor(x)}`;
        this.yCoordInfo.textContent = `Y: ${Math.floor(y)}`;

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

        // Resize canvases based on newScale
        this.canvasManagers.forEach(manager => {
            manager.resize(newScale);
        });
    
        // Render all canvas renderers
        this.canvasRenderer.render();
        this.bgRenderer.render();

        // Scroll to mouse click on canvas
        this.scrollToClickedArea(event)
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

    //DEBUG LATER
    scrollToClickedArea(event) {
        const canvasContainer = document.getElementsByClassName('canvasWrapper')[0]; // Replace with your canvas container ID or reference
        const containerRect = canvasContainer.getBoundingClientRect();
    
        // Get mouse position relative to the canvas
        const { x, y } = this.getMousePosition(event);

        // Calculate how much to scroll to make the clicked area visible
        const scrollX = x * this.scale - containerRect.width / 2;
        const scrollY = y * this.scale - containerRect.height / 2;

        console.log(`Clicked Canvas X: ${x}, Y: ${y}`);
        console.log(`Scroll X: ${scrollX}, Scroll Y: ${scrollY}`);

        // Scroll the container to the calculated position
        canvasContainer.scrollTo({
            left: scrollX * this.scale,
            top: scrollY * this.scale,
            behavior: 'smooth' // Optional: Use smooth scrolling
        });
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

    fillArea(mouseX, mouseY) {
        const x = mouseX * this.originalScale;
        const y = mouseY * this.originalScale;

        const targetColor = this.canvasRenderer.getColorAtPixel(x, y);
        const colorString = this.colorPicker.getColor();
        const rgbaValues = colorString.match(/\d+(\.\d+)?/g);
    
        const r = parseInt(rgbaValues[0]);
        const g = parseInt(rgbaValues[1]);
        const b = parseInt(rgbaValues[2]);
        const a = parseInt(rgbaValues[3]);
    
        const fillColor = { r, g, b, a };
    
        // Fill only if the target is not already the fill color
        if (!this.canvasRenderer.colorsAreEqual(targetColor, fillColor, true)) {
            this.canvasRenderer.floodFill(mouseX, mouseY, targetColor, fillColor);
        } 
    }

    undo() {
        
    }

    redo() {

    }

}    
