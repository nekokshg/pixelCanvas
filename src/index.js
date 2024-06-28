import './style.css';
import { calculateBlocks } from './js/canvas/calculateBlocks.js';
import { BGCanvasManager } from './js/canvas/backgroundCanvas/bgCanvasManager.js';
import { BGCanvasRenderer } from './js/canvas/backgroundCanvas/bgCanvasRenderer.js';
import { CanvasManager } from './js/canvas/mainCanvas/canvasManager.js';
import { CanvasRenderer } from './js/canvas/mainCanvas/canvasRenderer.js';
import { ColorPicker } from './js/color/colorPicker.js';
import { CanvasEventHandler } from './js/events/canvasEventHandler.js';
import { ColorPickerEventHandler } from './js/events/colorPickerEventHandler.js';
import { ToolbarEventHandler } from './js/events/toolBarEventHandler.js';
import { SettingsBarEventHandler } from './js/events/settingsBarEventHandler.js';

export class MainCanvasController {
    constructor() {
        const { blocksX, blocksY} = calculateBlocks(256, 256); //Default size 32px by 32px
        this.blocksX = blocksX;
        this.blocksY = blocksY;
        this.blockSize = 16;
        this.scale = this.getScale();

        this.init();
    }

    init() {
        this.setupBackgroundCanvas();
        this.setupMainCanvas();
        this.setupEventHandlers();
    }
    setupBackgroundCanvas() {
        this.bgManager = new BGCanvasManager('backgroundCanvas', this.blocksX, this.blocksY, this.blockSize, this.scale);
        this.bgRenderer = new BGCanvasRenderer(this.bgManager);
        this.bgRenderer.render();
    }

    setupMainCanvas() {
        const pixelWidth = this.blocksX * this.blockSize;
        const pixelHeight = this.blocksY * this.blockSize;

        this.canvasManager = new CanvasManager('pixelCanvas', pixelWidth, pixelHeight, this.scale);
        this.canvasRenderer = new CanvasRenderer(this.canvasManager);
    }

    setupEventHandlers() {
        this.colorPicker = new ColorPicker();
        this.colorPickerEventHandler = new ColorPickerEventHandler(this.colorPicker);
        this.toolbarEventHandler = new ToolbarEventHandler();
        this.canvasEventHandler = new CanvasEventHandler([this.canvasManager, this.bgManager], [this.canvasRenderer, this.bgRenderer], this.toolbarEventHandler, this.colorPicker);
        this.canvasEventHandler.init();
        this.settingsBarEventHandler = new SettingsBarEventHandler([this.canvasManager, this.bgManager], [this.canvasRenderer, this.bgRenderer], this.canvasEventHandler);
    }

    getScale() {
        const container = document.querySelector('.canvasWrapper');

        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        const canvasWidth = this.blocksX * this.blockSize;
        const canvasHeight = this.blocksY * this.blockSize;

        const scaleX = containerWidth / canvasWidth;
        const scaleY = containerHeight / canvasHeight;
        const scale = Math.min(scaleX, scaleY); // Choose the smaller scale to fit within the container

        return Math.floor(scale);
    }
    
}

document.addEventListener('DOMContentLoaded', () => {
    const mainCanvasController = new MainCanvasController();
});