export class MeasurementsManager {
    constructor(){
        this.pixelWidth = null;
        this.pixelHeight = null;
    }

    getPixelWidth(){
        const pixelWidth = this.pixelWidth;

        return pixelWidth;
    }

    getPixelHeight(){
        const pixelHeight = this.pixelHeight;

        return pixelHeight;
    }

    setPixelWidth(pixelWidth){
        this.pixelWidth = pixelWidth;
    }

    setPixelHeight(pixelHeight){
        this.pixelHeight = pixelHeight;
    }
}