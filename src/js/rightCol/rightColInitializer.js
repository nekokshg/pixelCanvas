/**
 * This class handles the initialization of the colorPicker, palette, and layer event handlers
 */

import { ColorPickerEventHandler } from "./colorPicker/colorPickerEventHandler";
import { PaletteEventHandler } from "./palette/paletteEventHandler";
import { LayersManager } from "./layers/layersManager"

export class RightColInitializer{
    constructor(colorManager, scaleManager, measurementsManager, bgManager, bgRenderer, toolsManager){
        this.colorManager = colorManager;
        this.scaleManager = scaleManager;
        this.measurementsManager = measurementsManager;
        this.bgManager = bgManager;
        this.bgRenderer = bgRenderer;
        this.toolsManager = toolsManager;
        this.init()
    }

    init(){
        this.setUpEventHandlers();
    }

    setUpEventHandlers(){
        this.colorPickerEventHandler = new ColorPickerEventHandler(this.colorManager);
        this.paletteEventHandler = new PaletteEventHandler(this.colorManager);
        this.layersManager = new LayersManager(this.scaleManager, this.measurementsManager, this.bgManager, this.bgRenderer, this.colorManager, this.toolsManager);
        
    }

}