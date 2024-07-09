import { CanvasManager } from "../../middleCol/mainCanvas/canvasManager";
import { CanvasRenderer } from "../../middleCol/mainCanvas/canvasRenderer";
import { MiddleColEventHandler } from "../../middleCol/middleColEventHandler";

export class Layer {
    constructor(pixelWidth, pixelHeight, zIndex, scale, layerIndex, bgManager, bgRenderer, colorManager, toolsManager, scaleManager, layersArr) {
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'absolute';
        this.canvas.style.zIndex = zIndex;
        this.canvas.id = `pixelCanvas${layerIndex}`; // Unique ID for each canvas
        this.canvas.className = 'pixelCanvas'; // Class name for styling

        const canvasManager = new CanvasManager(this.canvas, pixelWidth, pixelHeight, scale);
        const canvasRenderer = new CanvasRenderer(canvasManager);
        const middleColEventHandler = new MiddleColEventHandler([canvasManager, bgManager], [canvasRenderer, bgRenderer], colorManager, toolsManager, scaleManager);
        
        const canvas = this.canvas

        layersArr.push({
            canvas,
            canvasManager,
            canvasRenderer,
            middleColEventHandler
        });
    }

    getCanvas() {
        return this.canvas;
    }

    getCanvasManager() {
        return this.canvasManager;
    }

    getCanvasRenderer() {
        return this.canvasRenderer;
    }

    getMiddleColEventHandler(){
        return this.middleColEventHandler;
    }
}