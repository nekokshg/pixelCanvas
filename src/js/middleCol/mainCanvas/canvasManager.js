/**
 * This file contains the CanvasManager class, which is responsible for managing
 * the state and interactions of the main canvas in the PixelCanvas application.
 * It handles the setup, updates, and events related to the main canvas.
 /*
 * Note: The logical pixel dimensions of the canvas, calculated from the number of blocks and block size,
 * may not always match the actual pixel dimensions of the canvas element as rendered in the browser.
 * 
 * For example, if we want a canvas that is logically 256px by 256px:
 * - blocksX = 16 (number of blocks horizontally)
 * - blocksY = 16 (number of blocks vertically)
 * - blockSize = 16 (size of each block in pixels)
 * 
 * Therefore:
 * - pixelWidth = blocksX * blockSize = 16 * 16 = 256 pixels
 * - pixelHeight = blocksY * blockSize = 16 * 16 = 256 pixels
 * 
 * However, the actual canvas dimensions (canvas.width and canvas.height) as displayed in the browser
 * may differ from these calculated values due to factors such as:
 * - Window size and screen resolution
 * - CSS styles affecting the canvas element (e.g., width, height, scaling)
 * - Layout properties in the HTML/CSS affecting the canvas element
 * 
 */

export class CanvasManager {
    constructor(canvas, pixelWidth, pixelHeight, scale, layerIndex) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.scale = scale;
        this.pixelWidth = pixelWidth;
        this.pixelHeight = pixelHeight;

        this.width = null;
        this.height = null;

        this.origScale = scale;
        this.origPixelWidth = pixelWidth;
        this.origPixelHeight = pixelHeight;

        this.layerIndex = layerIndex

        this.updateCanvasSize();
    }

    getOrigPixelWidth(){
        const width = this.origPixelWidth;

        return width;
    }

    getOrigPixelHeight(){
        const height = this.origPixelHeight;

        return height;
    }

    getOrigScale(){
        const scale = this.origScale;

        return scale;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    getScale() {
        return this.scale;
    }

    getContext() {
        return this.ctx;
    }

    setWidth(newWidth) {
        this.width = newWidth;
    }

    setHeight(newHeight) {
        this.height = newHeight;
    }

    setPixelWidth(newPixelWidth){
        this.pixelWidth = newPixelWidth;
    }

    setPixelHeight(newPixelHeight){
        this.pixelHeight = newPixelHeight;
    }

    setScale(newScale) {
        this.scale = newScale;
    }

    setLayerIndex(newIndex){
        this.layerIndex = newIndex;
    }

    scaleCanvas(scale){
        //Function to set new scale and resize the canvas based on that
        this.setScale(scale);
        this.updateCanvasSize();
    }

    resizeCanvas(newPixelWidth, newPixelHeight){
        //Function to set new pixelWidth and pixelHeight and resize the canvas based on that
        this.setPixelWidth(newPixelWidth);
        this.setPixelHeight(newPixelHeight);
        this.updateCanvasSize();
    }
    
    updateCanvasSize() {
        // Adjust the canvas size based on the scale
        this.canvas.width = this.pixelWidth * this.scale;
        this.canvas.height = this.pixelHeight * this.scale;

        this.setWidth(this.canvas.width);
        this.setHeight(this.canvas.height);

        //Update size of canvasWrapper
        const canvasContainer = document.getElementsByClassName("canvasWrapper")[0];
        canvasContainer.style.width = `${this.canvas.width}px`;
        canvasContainer.style.height = `${this.canvas.height}px`;

        // Clear the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Apply the scaling transformation directly to the main canvas context
        this.ctx.scale(this.scale, this.scale);
    }

}