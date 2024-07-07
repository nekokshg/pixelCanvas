/**
 * This class handles the initialization of the colorPicker, palette, and layer event handlers
 */

import { ColorPickerEventHandler } from "./colorPicker/colorPickerEventHandler";
import { PaletteEventHandler } from "./palette/paletteEventHandler";

export class RightColInitializer{
    constructor(colorManager){
        this.colorManager = colorManager;
        this.init()
    }

    init(){
        this.setUpEventHandlers();
    }

    setUpEventHandlers(){
        this.colorPickerEventHandler = new ColorPickerEventHandler(this.colorManager);
        this.paletteEventHandler = new PaletteEventHandler(this.colorManager);
    }

}