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
        cpImg.style.maxWidth = "100%";
        cpImg.style.height = "auto";

        // Set canvas size to match the image
        this.canvas.width = cpImg.width;
        this.canvas.height = cpImg.height;

        this.canvas.style.maxWidth = "100%";
        this.canvas.style.height = "auto";

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

    pickColor(event) {
        const rect = this.canvas.getBoundingClientRect();
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;
        const x = (event.clientX - rect.left) * scaleX;
        const y = (event.clientY - rect.top) * scaleY;
        const imageData = this.ctx.getImageData(x, y, 1, 1).data;
        const r = imageData[0];
        const g = imageData[1];
        const b = imageData[2];
        const a = imageData[3];
        const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;
        const hex = this.rgbaToHex(r, g, b, a);
        this.colorPicker.setColor(rgba);
        this.displayColor(hex, rgba);
    }

    rgbaToHex(r, g, b, a) {
        const toHex = (n) => n.toString(16).padStart(2, '0').toUpperCase();
    
        const red = toHex(r);
        const green = toHex(g);
        const blue = toHex(b);
        const alpha = toHex(Math.round(a * 255 / 100)); // Ensure alpha is in the range [0, 255]
    
        return `#${red}${green}${blue}${alpha}`;
    }

    displayColor(hex, rgba){
        const hexcode = document.getElementsByClassName('hexCode')[0];
        const rgbaVal = document.getElementsByClassName('rgbValue')[0];
        const colorBox = document.getElementsByClassName('colorBox')[0];
        hexcode.textContent = `hexcode: ${hex}`;
        rgbaVal.textContent = rgba;
        colorBox.style.backgroundColor = rgba;
    }
}