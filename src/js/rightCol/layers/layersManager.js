/**
 * LayersManager manages the layers through the layersInfo UI in the right column
 * 
 */

import eye from '../../../assets/eye.png';
import eyeOff from '../../../assets/eye-off.png';
import {Layer} from './layer'
import { LayerInfo } from './layerInfo';

export class LayersManager{
    constructor(scaleManager, measurementsManager, bgManager, bgRenderer, colorManager, toolsManager) {
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
        this.toggle = true;
        this.activeLayer = null;

        // Reference to the container where all canvases(layers) are appended
        this.canvasContainer = this.baseLayer.parentElement;

        // Reference to the container where all layerInfos are appended
        this.layersInfoContainer = document.getElementsByClassName('layersContainer')[0];

        // Layer Tools
        this.visibilityImg = document.getElementsByClassName('visible')[0];
        this.visibilityImg.src = eye;
        this.visibilityBtn = document.getElementById('visibility');
        this.addLayerBtn = document.getElementById('add-layer');
        this.deleteLayerBtn = document.getElementById('delete-layer');
        //this.mergeUpLayerBtn = document.getElementById('mergeUp-layer');
        //this.mergeDownLayerBtn = document.getElementById('mergeDown-layer');

        //Initialize event listeners
        this.init();

        // Init default layer0 on program start
        this.addLayer();
    }

    init() {
        this.canvasContainer.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.canvasContainer.addEventListener('mousemove', this.onMouseMove.bind(this));
        this.canvasContainer.addEventListener('mouseup', this.onMouseUp.bind(this));
        this.canvasContainer.addEventListener('mouseleave', this.onMouseLeave.bind(this));
        this.canvasContainer.addEventListener('click', this.onMouseClick.bind(this));

        this.visibilityBtn.addEventListener('click', () => this.toggleVisibility());
        this.addLayerBtn.addEventListener('click', () => this.addLayer());
        this.deleteLayerBtn.addEventListener('click', () => this.deleteLayer(this.currentLayerIndex));
        //this.mergeUpLayerBtn.addEventListener('click', () => this.mergeUp());
        //this.mergeDownLayerBtn.addEventListener('click', () => this.mergeDown());
    }

    addLayer(){
        const scale = this.scaleManager.getScale();
        const pixelWidth = this.measurementsManager.getPixelWidth();
        const pixelHeight = this.measurementsManager.getPixelHeight();
        const layerId = `pixelCanvas${this.layerIndex}`;
        const layerInfoId = `${layerId}layer`;
        const layerIdNum = this.layerIndex;
        const layerIndex = this.layerIndex;

        //Create new layer with its respective event listeners
        const newLayer = new Layer(pixelWidth, pixelHeight, this.zIndexCounter, scale, this.layerIndex, 
            this.bgManager, this.bgRenderer, this.colorManager, this.toolsManager, this.scaleManager
        );

        //Push the newly created layer to the layers array
        this.layers.push(newLayer)

        //Append to canvas container in middle column
        this.canvasContainer.appendChild(newLayer.canvas);

        //Create a new layerInfo for the newly created layer in the right column & attach an event listener to it
        const newLayerInfo = new LayerInfo(layerInfoId, layerIdNum, layerIndex);
        document.getElementById(newLayerInfo.getLayerInfoId()).addEventListener('click', () => this.setActiveLayer(newLayer));

        // Set the first added layer as active by default
        if (!this.activeLayer) {
            this.activeLayer = newLayer;
        }

        this.zIndexCounter += 1;
        this.layerIndex += 1;
    }

    setActiveLayer(layer) {
        this.activeLayer = layer;
    }

    toggleVisibility(){
        if(this.toggle){
            this.activeLayer.canvas.style.display = 'none';
            this.toggle = false;
        } else {
            this.activeLayer.canvas.style.display = 'block';
            this.toggle = true;
        }
    }

    onMouseDown(event) {
        if (this.activeLayer) {
            this.activeLayer.onMouseDown(event);
        }
    }

    onMouseMove(event) {
        if (this.activeLayer) {
            this.activeLayer.onMouseMove(event);
        }
    }

    onMouseUp(event) {
        if (this.activeLayer) {
            this.activeLayer.onMouseUp(event);
        }
    }

    onMouseLeave(event) {
        if (this.activeLayer) {
            this.activeLayer.onMouseLeave(event);
        }
    }

    onMouseClick(event) {
        if (this.activeLayer) {
            this.activeLayer.onMouseClick(event);
        }
    }

}