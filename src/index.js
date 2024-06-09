/* Initializes the app, sets up modules, and orchestrates interactions between them */

import './style.css';
import { CanvasManager } from './js/canvas/canvasManager.js';
import { CanvasRenderer } from './js/canvas/canvasRenderer.js';
import { PencilTool } from './js/tools/pencilTool.js';
import { ColorPicker } from './js/color/colorPicker.js';
import { CanvasEventHandler } from './js/events/canvasEventHandler.js';
import { ColorPickerEventHandler } from './js/events/colorPickerEventHandler.js';



document.addEventListener('DOMContentLoaded', () => {
    const canvasManager = new CanvasManager('pixelCanvas', 32, 32, 30);
    const canvasRenderer = new CanvasRenderer(canvasManager);
    const colorPicker = new ColorPicker();
    const colorPickerEventHandler = new ColorPickerEventHandler(colorPicker);
    const pencilTool = new PencilTool(canvasRenderer, colorPicker);
    const canvasEventHandler = new CanvasEventHandler(canvasManager.canvas, canvasManager.scale);

    canvasEventHandler.init(pencilTool);

});
