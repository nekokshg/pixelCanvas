export class ScaleManager {
    constructor(scale){
        this.currScale = scale;
        this.origScale = scale;
    }

    setScale(newScale){
        this.currScale = newScale;
    }

    getScale(){
        const scale = this.currScale;

        return scale;
    }
}