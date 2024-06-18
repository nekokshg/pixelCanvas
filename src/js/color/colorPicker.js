/* Manages the color */
export class ColorPicker {
    constructor (){
        this.currentColor = 'rgba(0,0,0,255)'; // Default color
    }

    setColor(color){
        this.currentColor = color;
    }

    getColor(){
        return this.currentColor;
    }
}