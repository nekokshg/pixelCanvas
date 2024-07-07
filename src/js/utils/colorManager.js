/**
 * Manages the color for the program
 */

export class ColorManager {
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
