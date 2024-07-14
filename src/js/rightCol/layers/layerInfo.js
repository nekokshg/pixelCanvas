export class LayerInfo{
    constructor(layerInfoId, layerIdNum, layerIndex){
        this.layerIndex = layerIndex;

        // Reference to the container where all the canvas info are appended
        const layersInfoContainer = document.getElementsByClassName('layersContainer')[0];

        //Create layerInfo for newly created layer
        this.layerInfo = document.createElement('div');
        this.layerInfo.className = 'layerInfo';
        this.layerInfo.id = layerInfoId;

        //Create p element for layer name
        this.layerName = document.createElement('p');
        this.layerName.className = 'layerName';
        this.layerName.textContent = `Layer ${layerIdNum}`; 

        this.layerInfo.appendChild(this.layerName);

        //Insert the layer info
        layersInfoContainer.append(this.layerInfo)
    }

    getLayerInfoId(){
        return this.layerInfo.id;
    }

    getLayerIndex(){
        return this.layerIndex;
    }

    setLayerIndex(newIndex){
        this.layerIndex = newIndex;
    }

    
}