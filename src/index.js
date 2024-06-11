import './style.css';
import { BGCanvasManager } from './js/canvas/backgroundCanvas/bgCanvasManager.js';
import { BGCanvasRenderer } from './js/canvas/backgroundCanvas/bgCanvasRenderer.js';
import { CanvasManager } from './js/canvas/mainCanvas/canvasManager.js';
import { CanvasRenderer } from './js/canvas/mainCanvas/canvasRenderer.js';
import { ColorPicker } from './js/color/colorPicker.js';
import { CanvasEventHandler } from './js/events/canvasEventHandler.js';
import { ColorPickerEventHandler } from './js/events/colorPickerEventHandler.js';
import { ToolbarEventHandler } from './js/events/toolBarEventHandler.js';

export class MainCanvasController {
    constructor() {
        this.blocksX = 2;
        this.blocksY = 2;
        this.blockSize = 16;

        this.init();
    }

    init() {
        this.setupBackgroundCanvas();
        this.setupMainCanvas();
        this.setupEventHandlers();
    }

    setupBackgroundCanvas() {
        this.bgManager = new BGCanvasManager('backgroundCanvas', this.blocksX, this.blocksY, this.blockSize, 1);
        this.bgRenderer = new BGCanvasRenderer(this.bgManager);
        this.bgRenderer.render();
    }

    setupMainCanvas() {
        const pixelWidth = this.blocksX * this.blockSize;
        const pixelHeight = this.blocksY * this.blockSize;

        this.canvasManager = new CanvasManager('pixelCanvas', pixelWidth, pixelHeight, 1);
        this.canvasRenderer = new CanvasRenderer(this.canvasManager);
    }

    setupEventHandlers() {
        this.colorPicker = new ColorPicker();
        this.colorPickerEventHandler = new ColorPickerEventHandler(this.colorPicker);
        this.toolbarEventHandler = new ToolbarEventHandler();
        this.canvasEventHandler = new CanvasEventHandler([this.canvasManager, this.bgManager], [this.canvasRenderer, this.bgRenderer], this.toolbarEventHandler, this.colorPicker);
        this.canvasEventHandler.init();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const mainCanvasController = new MainCanvasController();
});