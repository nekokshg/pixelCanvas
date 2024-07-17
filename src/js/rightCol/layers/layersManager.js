/**
 * LayersManager manages the layers through the layersInfo UI in the right column
 * 
 */

import {Layer} from './layer'
import { LayerInfo } from './layerInfo';
import editLayer from '../../../assets/text.png'

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
        this.activeLayer = null;
        this.activeLayerInfo = null;

        // Reference to the container where all canvases(layers) are appended
        this.canvasContainer = this.baseLayer.parentElement;

        // Reference to the container where all layerInfos are appended
        this.layersInfoContainer = document.getElementsByClassName('layersContainer')[0];

        // Layer Tools
        this.addLayerBtn = document.getElementById('add-layer');
        this.deleteLayerBtn = document.getElementById('delete-layer');
        this.mergeDownLayerBtn = document.getElementById('mergeDown-layer');
        const editLayerNameImg = document.getElementsByClassName('editLayerNameImg')[0]
        editLayerNameImg.src = editLayer;
        this.duplicateLayerBtn = document.getElementById('duplicate-layer');

        // Init default layer0 on program start
        this.addLayer();

        //Initialize event listeners
        this.init();

    }

    init() {
        this.canvasContainer.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.canvasContainer.addEventListener('mousemove', this.onMouseMove.bind(this));
        this.canvasContainer.addEventListener('mouseup', this.onMouseUp.bind(this));
        this.canvasContainer.addEventListener('mouseleave', this.onMouseLeave.bind(this));
        this.canvasContainer.addEventListener('click', this.onMouseClick.bind(this));

        this.addLayerBtn.addEventListener('click', () => this.addLayer());
        this.deleteLayerBtn.addEventListener('click', () => this.deleteLayer());
        this.mergeDownLayerBtn.addEventListener('click', () => this.mergeDown());
        this.duplicateLayerBtn.addEventListener('click', () => this.duplicateLayer());

        // Listen for the custom drop event
        this.layersInfoContainer.addEventListener('layer-drop', this.onLayerDrop.bind(this));
    }

    setActiveLayer(layer, layerInfo) {
        document.getElementById(this.activeLayerInfo.getLayerInfoId()).style.border = 'none'
        this.activeLayer = layer;
        this.activeLayerInfo = layerInfo;
        this.currentLayerIndex = layer.canvasManager.layerIndex;
        document.getElementById(this.activeLayerInfo.getLayerInfoId()).style.border = 'solid black'
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

        //Append to canvas container in middle column
        this.canvasContainer.appendChild(newLayer.canvas);

        //Create a new layerInfo for the newly created layer in the right column & attach an event listener to it
        const newLayerInfo = new LayerInfo(layerInfoId, layerIdNum, layerIndex, newLayer);

        //Push the newly created layer and layer info to the layers array
        this.layers.push({
            layer: newLayer,
            layerInfo: newLayerInfo,
        })

        document.getElementById(newLayerInfo.getLayerInfoId()).addEventListener('click', () => this.setActiveLayer(newLayer, newLayerInfo));

        // Set the first added layer as active by default
        if (!this.activeLayer) {
            this.activeLayer = newLayer;
            this.activeLayerInfo = newLayerInfo;
        }

        this.setActiveLayer(newLayer, newLayerInfo)

        this.zIndexCounter += 1;
        this.layerIndex += 1;
    }

    deleteLayer(){
        if (this.currentLayerIndex != 0){

            const currentLayerIndex = this.currentLayerIndex;
            const layerToDelete = this.layers[currentLayerIndex].layer;
    
            // Remove the layer from the DOM
            this.canvasContainer.removeChild(layerToDelete.canvas);
    
            // Remove the corresponding layer info from the DOM
            const layerInfoId = `${layerToDelete.canvas.id}layer`;
            const layerInfoElement = document.getElementById(layerInfoId);
            this.layersInfoContainer.removeChild(layerInfoElement);
    
            // Remove the layer from the layers array
            this.layers.splice(currentLayerIndex, 1);
    
            // Update indices for remaining layers
            this.layers.forEach((layer, index) => {
                layer.canvasManager.layerIndex = index;
                layer.setZIndex(index + 2)
            });

            // Set the new active layer
            this.currentLayerIndex = Math.max(currentLayerIndex - 1, 0);
            this.setActiveLayer(this.layers[this.currentLayerIndex].layer, this.layers[this.currentLayerIndex].layerInfo);

            // Adjust the zIndexCounter
            this.zIndexCounter -= 1;
        }
    }

    mergeDown() {
        const currentLayerIndex = this.currentLayerIndex;
        const targetLayerIndex = currentLayerIndex - 1;

        if (targetLayerIndex < 0) {
            console.warn('No layer below to merge with.');
            return;
        }

        const currentLayer = this.layers[currentLayerIndex].layer;
        const currentLayerInfo = this.layers[currentLayerIndex].layerInfo;
        const targetLayer = this.layers[targetLayerIndex].layer;

        this.setActiveLayer(currentLayer, currentLayerInfo);

        //Draw current layer over target layer
        targetLayer.canvasRenderer.drawOver(currentLayer.canvas)

        //Transfer merged canvas to current layer
        currentLayer.canvas.getContext('2d').clearRect(0, 0, currentLayer.canvas.width, currentLayer.canvas.height);
        currentLayer.canvasRenderer.drawOver(targetLayer.canvas)

        // Delete the target layer
        this.layers.splice(targetLayerIndex, 1);
        this.layersInfoContainer.removeChild(document.getElementById(targetLayer.canvas.id + 'layer'));
        this.canvasContainer.removeChild(targetLayer.canvas);

        // Update indices for remaining layers
        this.layers.forEach((layer, index) => {
            layer.layerIndex = index;
            layer.layer.setZIndex(index + 2);
        });

        this.zIndexCounter -= 1;
        this.layerIndex -= 1;
        this.currentLayerIndex -= 1; 
    }

    duplicateLayer(){
        this.addLayer();
        const currentLayer = this.layers[this.currentLayerIndex].layer;
        const targetLayer = this.layers[this.currentLayerIndex - 1].layer;

        //Copy over target layer to current layer
        currentLayer.canvasRenderer.drawOver(targetLayer.canvas)
    }

    onLayerDrop(event) {
        const { draggedId, targetId } = event.detail;
    
        // Find the dragged layer and target layer by ID
        const draggedLayerIndex = this.layers.findIndex(layer => layer.layerInfo.getLayerInfoId() === draggedId);
        const targetLayerIndex = this.layers.findIndex(layer => layer.layerInfo.getLayerInfoId() === targetId);
    
        // Ensure both layers exist in the layers array
        if (draggedLayerIndex === -1 || targetLayerIndex === -1) {
            console.error('Dragged or target layer not found in layers array');
            return;
        }
    
        // Swap the layers in the layers array
        const draggedLayer = this.layers[draggedLayerIndex];
        this.layers[draggedLayerIndex] = this.layers[targetLayerIndex];
        this.layers[targetLayerIndex] = draggedLayer;
    
        // Update indices and zIndex for all layers
        this.layers.forEach((layer, index) => {
            layer.layerInfo.setLayerIndex(index);
            layer.layer.canvasManager.setLayerIndex(index);
            layer.layer.setZIndex(index + 2);
        });
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