import './style.css';
import { calculateBlocks } from './js/utils/calculateBlocks.js';
import { BGManager } from './js/middleCol/bgCanvas/bgManager.js';
import { BGRenderer } from './js/middleCol/bgCanvas/bgRenderer.js';
import { CanvasManager } from './js/middleCol/mainCanvas/canvasManager.js';
import { CanvasRenderer } from './js/middleCol/mainCanvas/canvasRenderer.js';
import { ColorManager } from './js/utils/colorManager.js';
import { ToolManager } from './js/utils/toolManager.js';
import { LeftColInitializer } from './js/leftCol/leftColInitializer.js';
import { RightColInitializer } from './js/rightCol/rightColInitializer.js';
import { TopRowInitializer } from './js/topRow/topRowInitializer.js';
import { MiddleColEventHandler } from './js/middleCol/middleColEventHandler.js';

export class IndexJS {
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
        this.setupUtils();
        this.setupInitializers();
        this.setupEventHandlers();
    }

    setupBackgroundCanvas() {
        this.bgManager = new BGManager('backgroundCanvas', this.blocksX, this.blocksY, this.blockSize, this.scale);
        this.bgRenderer = new BGRenderer(this.bgManager);
        this.bgRenderer.render();
    }

    setupMainCanvas() {
        const pixelWidth = this.blocksX * this.blockSize;
        const pixelHeight = this.blocksY * this.blockSize;

        this.canvasManager = new CanvasManager('pixelCanvas', pixelWidth, pixelHeight, this.scale);
        this.canvasRenderer = new CanvasRenderer(this.canvasManager);
    }

    setupUtils(){
        this.colorManager = new ColorManager();
        this.toolManager = new ToolManager();
    }

    setupInitializers(){
        this.rightColInitializer = new RightColInitializer(this.colorManager);
        this.leftColInitializer = new LeftColInitializer(this.toolManager);
        this.topRowInitializer = new TopRowInitializer(this.canvasManager, this.canvasRenderer, this.bgManager, this.bgRenderer);
    }

    setupEventHandlers() {
        this.middleColEventHandler = new MiddleColEventHandler([this.canvasManager, this.bgManager], [this.canvasRenderer, this.bgRenderer], this.colorManager, this.toolManager);
        this.middleColEventHandler.init();
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
    const indexJS = new IndexJS();
});