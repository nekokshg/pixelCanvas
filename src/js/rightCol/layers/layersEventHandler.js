import { Layer } from "./layer";
import eye from '../../../assets/eye.png';
import eyeOff from '../../../assets/eye-off.png';
import mergeDownImg from '../../../assets/merge-down.png';

export class LayersEventHandler{
    constructor(scaleManager, measurementsManager, bgManager, bgRenderer, colorManager, toolsManager){
        this.scaleManager = scaleManager;
        this.measurementsManager = measurementsManager;
        this.bgManager = bgManager;
        this.bgRenderer = bgRenderer;
        this.colorManager = colorManager;
        this.toolsManager = toolsManager;
        this.baseLayer = document.getElementById('backgroundCanvas');
        this.layers = [];
        this.zIndexCounter = 2;
        this.layerIndex = 0;
        this.currentLayerIndex = 0;

        // Reference to the container where all canvases are appended
        this.canvasContainer = this.baseLayer.parentElement;

        // Reference to the container where all the canvas info are appended
        this.layersInfoContainer = document.getElementsByClassName('layersContainer')[0];

        this.toggle = true;

        this.addLayerBtn = document.getElementById('add-layer');

        this.prevLayerInfoID = null;

        this.addLayer();

        this.init();
    }

    init(){
        this.addLayerBtn.addEventListener('click', () => this.addLayer());
    }

    toggleVisibility(imgElement, layer){
        if (this.toggle){
            imgElement.src = eyeOff;
            layer.style.display = 'none';
            this.toggle = false;
        } else {
            imgElement.src = eye;
            this.toggle = true;
            layer.style.display = 'block';
        }
    }

    addLayer() {
        const scale = this.scaleManager.getScale();
        const pixelWidth = this.measurementsManager.getPixelWidth();
        const pixelHeight = this.measurementsManager.getPixelHeight();
        const newLayer = new Layer(pixelWidth, pixelHeight, this.zIndexCounter, scale, this.layerIndex, this.bgManager, this.bgRenderer, this.colorManager, this.toolsManager, this.scaleManager, this.layers);
        this.canvasContainer.appendChild(newLayer.canvas);
        
        this.switchLayer(this.layerIndex) //Make the newly added layer the current layer

        const layerId = `pixelCanvas${this.layerIndex}`;
        const layerIndex = this.layerIndex;

        //Create layerInfo
        const layerInfo = document.createElement('div');
        layerInfo.className = 'layerInfo';
        layerInfo.id =`${layerId}layer`;

        layerInfo.addEventListener('click', () => this.selectLayer(layerIndex, layerInfo.id));

        // Create img element for visibility
        const imgElement = document.createElement('img');
        imgElement.src = eye;
        imgElement.className = 'visibilityBtn';

        imgElement.addEventListener('click', () => this.toggleVisibility(imgElement, newLayer.canvas));

        // Create p element
        const pElement = document.createElement('p');
        pElement.className = 'layerName';
        pElement.textContent = `Layer ${this.layerIndex}`; // Set the text content of the p element

        //Create img element for merge-down
        const imgElementMergeDown = document.createElement('img');
        imgElementMergeDown.src = mergeDownImg;
        imgElementMergeDown.className = 'mergeDownBtn';

        imgElementMergeDown.addEventListener('click', () => this.mergeDownLayers());

        // Append p and img elements to layerInfo
        layerInfo.appendChild(imgElement);
        layerInfo.appendChild(pElement);
        layerInfo.appendChild(imgElementMergeDown);

        this.layersInfoContainer.insertBefore(layerInfo, this.addLayerBtn);
        
        this.zIndexCounter += 1; // Increment zIndex for next layer
        this.layerIndex += 1; // Increment layerIndex for unique ID
    }

    switchLayer(layerIndex) {
        if (layerIndex >= 0 && layerIndex < this.layers.length) {
            // Deactivate event handlers for the current layer
            const currentLayer = this.layers[this.currentLayerIndex];
            currentLayer.middleColEventHandler.deinit(); // Implement a deinit() method to remove event listeners

            this.prevLayerInfoID = currentLayer.canvas.id;

            // Activate event handlers for the new layer
            const newLayer = this.layers[layerIndex];
            newLayer.middleColEventHandler.init();

            this.currentLayerIndex = layerIndex;
        }
    }

    selectLayer(layerIndex, layerInfoID){
        document.getElementById(`${this.prevLayerInfoID}layer`).style.backgroundColor = '#fae177'
        this.switchLayer(layerIndex);
        document.getElementById(layerInfoID).style.backgroundColor = '#f1d217';
    }

    deleteLayer(){

    }
    
    moveLayers(){

    }

    mergeDownLayers(){
        
    }

    mergeAllLayers(){

    }


}