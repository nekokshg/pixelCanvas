/* Centralizes event listeners for user interactions, such as mouse clicks and movements for colorPicker canvas element */
import cp from '../../assets/colorPicker.jpeg'

export class ColorPickerEventHandler {
    constructor(colorPicker){
        //Set the source of the image
        const cpImg = document.getElementById('colorPickerImg');
        cpImg.src = cp;

        //Initialize canvas and content
        this.canvas = document.getElementById('colorPickerCanvas');
        this.ctx = this.canvas.getContext('2d');

        this.colorPicker = colorPicker;
        this.isPicking = false;

        // Event listeners
        this.initEventListeners();
    }

    initEventListeners() {
        // Listen for image load to draw on canvas
        const cpImg = document.getElementById('colorPickerImg');
        cpImg.addEventListener('load', this.onImageLoad.bind(this));

        // Listen for mouse events on the canvas
        this.canvas.addEventListener('mousedown', (event) => this.onMouseDown(event));
        this.canvas.addEventListener('mousemove', (event) => this.onMouseMove(event));
        this.canvas.addEventListener('mouseup', () => this.onMouseUp());
    }

    onImageLoad() {
        const cpImg = document.getElementById('colorPickerImg');
        // Set canvas size to match the image
        this.canvas.width = cpImg.width;
        this.canvas.height = cpImg.height;

        // Draw the image onto the canvas
        this.ctx.drawImage(cpImg, 0, 0, cpImg.width, cpImg.height);
        cpImg.style.display = 'none'; // Hide the original image
    }

    onMouseDown(event){
        this.canvas.style.cursor = "crosshair";
        this.isPicking = true;
        this.pickColor(event);
    }

    onMouseMove(event){
        if(this.isPicking){
            this.pickColor(event);
        }
    }

    onMouseUp(){
        this.canvas.style.cursor = "pointer";
        this.isPicking = false;
    }

    pickColor(event){
        const rect = this.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const imageData = this.ctx.getImageData(x, y, 1, 1).data;
        const r = imageData[0];
        const g = imageData[1];
        const b = imageData[2];
        const rgb = `rgb(${r}, ${g}, ${b})`;
        const hex =  this.rgbToHex(r,g,b);
        this.colorPicker.setColor(rgb);
        this.displayColor(hex, rgb);
    }

    rgbToHex(r, g, b){
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    }

    displayColor(hex, rgb){
        const hexcode = document.getElementsByClassName('hexCode')[0];
        const rgbVal = document.getElementsByClassName('rgbValue')[0];
        const colorBox = document.getElementsByClassName('colorBox')[0];
        hexcode.textContent = `hexcode: ${hex}`;
        rgbVal.textContent = rgb;
        colorBox.style.backgroundColor = hex;
    }
}