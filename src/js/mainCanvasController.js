
import { BGCanvasManager } from './canvas/backgroundCanvas/bgCanvasManager.js';
import { BGCanvasRenderer } from './canvas/backgroundCanvas/bgCanvasRenderer.js';
import { CanvasManager } from './canvas/mainCanvas/canvasManager.js';
import { CanvasRenderer } from './canvas/mainCanvas/canvasRenderer.js';
import { ColorPicker } from './color/colorPicker.js';
import { CanvasEventHandler } from './events/canvasEventHandler.js';
import { ColorPickerEventHandler } from './events/colorPickerEventHandler.js';
import { ToolbarEventHandler } from './events/toolBarEventHandler.js';
import { CanvasUtils } from './canvas/canvasUtils.js';

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
        this.setupCanvasUtils();
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
        this.toolbar = new ToolbarEventHandler();
        this.canvasEventHandler = new CanvasEventHandler(this.canvasManager.canvas, this.canvasManager.scale, this.toolbar, this.canvasRenderer, this.colorPicker, this.canvasUtils);
        this.canvasEventHandler.init();
    }

    setupCanvasUtils() {
        this.canvasUtils = new CanvasUtils([this.canvasManager, this.bgManager], [this.canvasRenderer, this.bgRenderer], this.canvasEventHandler);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const mainCanvasController = new MainCanvasController();
});