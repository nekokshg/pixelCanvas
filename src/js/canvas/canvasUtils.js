import zoomIn from '../../assets/zoom-in.png';
import zoomOut from '../../assets/zoom-out.png';
import { BGCanvasManager } from './backgroundCanvas/bgCanvasManager.js';
import { BGCanvasRenderer } from './backgroundCanvas/bgCanvasRenderer.js';

export class CanvasUtils {
    constructor(canvasManagers, canvasEventHandler) {
        // Set the source of the image
        this.ziImg = document.getElementsByClassName('zoomIn')[0];
        this.ziImg.src = zoomIn;
        this.zoImg = document.getElementsByClassName('zoomOut')[0];
        this.zoImg.src = zoomOut;

        this.canvasManagers = canvasManagers;
        this.canvasEventHandler = canvasEventHandler;

        // Event listeners
        this.ziImg.addEventListener('click', () => this.zoomIn());
        this.zoImg.addEventListener('click', () => this.zoomOut());
    }

    zoomIn() {
        const newScale = Math.ceil(this.canvasManagers[0].scale * 1.2);
        this.setScale(newScale);
    }

    zoomOut() {
        const newScale = Math.floor(this.canvasManagers[0].scale / 1.2);
        this.setScale(newScale);
    }

    setScale(scale) {
        this.canvasManagers.forEach(manager => {
            manager.setScale(scale);
            if (manager instanceof BGCanvasManager) {
                const bgRenderer = new BGCanvasRenderer(manager);
                bgRenderer.renderBackground();
            }
        });
        this.canvasEventHandler.handleScaleChange(this.canvasManagers[0].scale);
    }

}