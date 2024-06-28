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
        const hex = this.rgbaToHex(r, g, b);
        this.colorPicker.setColor(rgba);
        this.displayColor(hex, rgba);
    }

    rgbaToHex(r, g, b) {
        const toHex = (n) => n.toString(16).padStart(2, '0').toUpperCase();
    
        const red = toHex(r);
        const green = toHex(g);
        const blue = toHex(b);
    
        return `#${red}${green}${blue}`;
    }

    displayColor(hex, rgba) {
        const hexcode = document.getElementsByClassName('hexCode')[0];
        
        // Set the hex code and background color
        hexcode.style.backgroundColor = rgba;
        hexcode.textContent = hex;
        
        // Check if the RGBA color is too light
        const rgbValues = rgba.match(/\d+/g); // Extract RGB values
        const brightness = (parseInt(rgbValues[0]) * 299 + parseInt(rgbValues[1]) * 587 + parseInt(rgbValues[2]) * 114) / 1000; // Calculate brightness using a weighted formula
        
        // Set text color based on brightness
        if (brightness > 125) { // Adjust the threshold value as needed
            hexcode.style.color = 'black'; // Change text color to black
        } else {
            hexcode.style.color = 'white'; // Keep text color white
        }
    }
}