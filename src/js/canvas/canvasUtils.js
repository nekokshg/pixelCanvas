import zoomIn from '../../assets/zoom-in.png';
import zoomOut from '../../assets/zoom-out.png';
import { BGCanvasManager } from './backgroundCanvas/bgCanvasManager.js';
import { BGCanvasRenderer } from './backgroundCanvas/bgCanvasRenderer.js';

export class CanvasUtils {
    constructor(canvasManagers, canvasRenderers, canvasEventHandler) {
        // Set the source of the image
        this.ziImg = document.getElementsByClassName('zoomIn')[0];
        this.ziImg.src = zoomIn;
        this.zoImg = document.getElementsByClassName('zoomOut')[0];
        this.zoImg.src = zoomOut;

        this.canvasManagers = canvasManagers;
        this.canvasRenderers = canvasRenderers;
        this.canvasEventHandler = canvasEventHandler;

        this.originX = 0;
        this.originY = 0;
        this.scale = 1;

        // Event listeners
        this.ziImg.addEventListener('click', (event) => this.zoomIn(event));
        this.zoImg.addEventListener('click', (event) => this.zoomOut(event));

        // To handle mouse position tracking
        this.canvas = canvasManagers[0].canvas;
        this.canvas.addEventListener('mousemove', (e) => this.updateMousePosition(e));
    }

    updateMousePosition(event) {
        const rect = this.canvas.getBoundingClientRect();
        this.mouseX = Math.floor((event.clientX - rect.left) / this.scale);
        this.mouseY = Math.floor((event.clientY - rect.top) / this.scale);
        console.log(this.mouseX, this.mouseY);
    }

    zoomIn(event) {
        event.preventDefault();
        this.performZoom(event, 1.2);
    }

    zoomOut(event) {
        event.preventDefault();
        this.performZoom(event, 1 / 1.2);
    }

    performZoom(event, zoomFactor) {
        const mouseX = this.mouseX;
        const mouseY = this.mouseY;

        // Calculate new scale and visible origin
        const newScale = Math.ceil(this.scale * zoomFactor);
        const newOriginX = mouseX / newScale - mouseX / this.scale + this.originX;
        const newOriginY = mouseY / newScale - mouseY / this.scale + this.originY;

        // Apply transformations
        this.canvasRenderers.forEach(renderer => {
            renderer.ctx.translate(newOriginX - this.originX, newOriginY - this.originY);
            renderer.ctx.scale(zoomFactor, zoomFactor);
            renderer.ctx.translate(-newOriginX, -newOriginY);
        });

        // Update scale and origin
        this.scale = newScale;
        this.originX = newOriginX;
        this.originY = newOriginY;

        // Update the canvas manager with the new scale
        this.setScale(this.scale);

        // Re-render the canvas
        this.canvasRenderers.forEach(renderer => {
            renderer.render();
        });
    }

    setScale(scale) {
        this.canvasManagers.forEach(manager => {
            manager.setScale(scale);
        });
        this.canvasEventHandler.handleScaleChange(this.canvasManagers[0].scale);
    }
}