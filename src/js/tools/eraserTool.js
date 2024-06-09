/* Contains logic for eraser tool */

export class EraserTool {
    constructor(canvasRenderer){
        this.canvasRenderer = canvasRenderer;
    }

    erase(x, y){
        this.canvasRenderer.erasePixel(x, y);
    }
}