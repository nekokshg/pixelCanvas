import zoomIn from '../../assets/zoom-in.png';
import zoomOut from '../../assets/zoom-out.png';
import { BGCanvasManager } from './backgroundCanvas/bgCanvasManager.js';
import { BGCanvasRenderer } from './backgroundCanvas/bgCanvasRenderer.js';

export class CanvasUtils {
    constructor(canvasManagers) {
        // Set the source of the image
        this.ziImg = document.getElementsByClassName('zoomIn')[0];
        this.ziImg.src = zoomIn;
        this.zoImg = document.getElementsByClassName('zoomOut')[0];
        this.zoImg.src = zoomOut;

        this.canvasManagers = canvasManagers;

        // Event listeners
        this.ziImg.addEventListener('click', () => this.zoomIn());
        this.zoImg.addEventListener('click', () => this.zoomOut());
    }

    zoomIn() {
        this.setScale(this.canvasManagers[0].scale * 1.2);
    }

    zoomOut() {
        this.setScale(this.canvasManagers[0].scale / 1.2);
    }

    setScale(scale) {
        this.canvasManagers.forEach(manager => {
            manager.setScale(scale);
            manager.updateCanvasSize();
            if (manager instanceof BGCanvasManager) {
                // Re-render the background if it's a background manager
                const bgRenderer = new BGCanvasRenderer(manager);
                bgRenderer.renderBackground();
            } 
        });
    }

}