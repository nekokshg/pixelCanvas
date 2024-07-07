/**
 * This file contains the BackgroundCanvasManager class, which is responsible for managing
 * the state and interactions of the background canvas in the PixelCanvas application.
 * It handles the setup, updates, and events related to the background canvas.
 */

export class BGManager {
    constructor(canvasId, blocksX, blocksY, blockSize, scale) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.scale = scale;
        this.blocksX = blocksX;
        this.blocksY = blocksY;
        this.blockSize = blockSize;
        this.width = null;
        this.height = null;
        this.origScale = scale;

        this.updateCanvasSize();
        this.origWidth = this.canvas.width;
        this.origHeight = this.canvas.height;
    }

    getContext() {
        return this.ctx;
    }

    getWidth() {
        const width = this.canvas.width;
        return width;
    }

    getHeight() {
        const height = this.canvas.height;
        return height;
    }

    getScale() {
        const scale = this.scale;
        return scale;
    }

    getBlockSize() {
        const blockSize = this.blockSize;
        return blockSize;
    }

    getBlocksX(){
        const blocksX = this.blocksX;
        return blocksX;
    }

    setWidth(newWidth){
        this.width = newWidth;
    }

    setHeight(newHeight){
        this.height = newHeight;
    }

    getBlocksY(){
        const blocksY = this.blocksY;
        return blocksY;
    }

    setBlocksX(newBlocksX){
        this.blocksX = newBlocksX;
    }

    setBlocksY(newBlocksY){
        this.blocksX = newBlocksY;
    }

    setScale(newScale) {
        this.scale = newScale;
    }

    scaleCanvas(scale){
        //Function to set new scale and resize the canvas based on that
        this.setScale(scale);
        this.updateCanvasSize();
    }

    resizeCanvas(newBlocksX, newBlocksY){
        //Function to set new blocksX and blocksY amounts and resize the canvas based on that
        this.setBlocksX(newBlocksX);
        this.setBlocksY(newBlocksY);
        this.updateCanvasSize();
    }

    updateCanvasSize() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.width = this.blocksX * this.blockSize * this.scale;
        this.canvas.height = this.blocksY * this.blockSize * this.scale;
        this.setWidth(this.canvas.width);
        this.setHeight(this.canvas.height);
        this.ctx.scale(this.scale, this.scale)
    }
}