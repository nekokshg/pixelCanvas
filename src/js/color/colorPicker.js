/* Manages the color */
export class ColorPicker {
    constructor (){
        this.currentColor = '#000000'; // Default color
    }

    setColor(color){
        this.currentColor = color;
    }

    getColor(){
        return this.currentColor;
    }
}