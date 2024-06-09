/* Initializes the app, sets up modules, and orchestrates interactions between them */

import './style.css';
import { BGCanvasManager } from './js/backgroundCanvas/bgCanvasManager.js';
import { BGCanvasRenderer } from './js/backgroundCanvas/bgCanvasRenderer.js';
import { CanvasManager } from './js/canvas/canvasManager.js';
import { CanvasRenderer } from './js/canvas/canvasRenderer.js';
import { ColorPicker } from './js/color/colorPicker.js';
import { CanvasEventHandler } from './js/events/canvasEventHandler.js';
import { ColorPickerEventHandler } from './js/events/colorPickerEventHandler.js';
import { ToolbarEventHandler } from './js/events/toolBarEventHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    const bgManager = new BGCanvasManager('backgroundCanvas', 16, 17, 30);
    const bgRenderer = new BGCanvasRenderer(bgManager);
    bgRenderer.renderBackground();
    const canvasManager = new CanvasManager('pixelCanvas', 16, 17, 30);
    const canvasRenderer = new CanvasRenderer(canvasManager);
    const colorPicker = new ColorPicker();
    const colorPickerEventHandler = new ColorPickerEventHandler(colorPicker);
    const toolbar = new ToolbarEventHandler();
    const canvasEventHandler = new CanvasEventHandler(canvasManager.canvas, canvasManager.scale, toolbar, canvasRenderer, colorPicker);

    // Call the init() method to initialize canvas event listeners
    canvasEventHandler.init();
});
