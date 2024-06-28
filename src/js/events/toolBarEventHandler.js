/* Centralizes event listeners for user interactions, such as mouse clicks and movements for toolBar_List element */
import pencil from '../../assets/pencil.png'
import eraser from '../../assets/eraser.png'
import zoomIn from '../../assets/zoom-in.png';
import zoomOut from '../../assets/zoom-out.png';
import fill from '../../assets/fill-bucket.png'
import line from '../../assets/line.png';

export class ToolbarEventHandler {
    constructor() {
        // Set the source of the image
        this.pencilButton = document.getElementsByClassName('pencil')[0];
        this.eraserButton = document.getElementsByClassName('eraser')[0];
        this.zoomInButton = document.getElementsByClassName('zoomIn')[0];
        this.zoomOutButton = document.getElementsByClassName('zoomOut')[0];
        this.lineButton = document.getElementsByClassName('line')[0];
        this.fillButton = document.getElementsByClassName('fill')[0];
        this.lastButton = document.getElementsByClassName('lastButton')[0];

        this.pencilButton.src = pencil;
        this.eraserButton.src = eraser;
        this.zoomInButton.src = zoomIn;
        this.zoomOutButton.src = zoomOut;
        this.lineButton.src = line;
        this.fillButton.src = fill;

        // Set default tool
        this.currentTool = 'pencil';
        this.selectedButton = this.pencilButton;
        this.selectedButton.classList.add('selected');
        
        // Initialize toolbar event listeners
        this.init();
    }

    init() {
        this.pencilButton.addEventListener('click', () => this.selectTool('pencil', this.pencilButton));
        this.eraserButton.addEventListener('click', () => this.selectTool('eraser', this.eraserButton));
        this.zoomInButton.addEventListener('click', () => this.selectTool('zoomIn', this.zoomInButton));
        this.zoomOutButton.addEventListener('click', () => this.selectTool('zoomOut', this.zoomOutButton));
        this.lineButton.addEventListener('click', () => this.selectTool('line', this.lineButton));
        this.fillButton.addEventListener('click', () => this.selectTool('fill', this.fillButton));
    }

    selectTool(newTool, button) {
        // Deselect the previous tool
        if (this.selectedButton) {
            this.selectedButton.classList.remove('selected');
        }

        if (newTool === 'fill') {
            this.lastButton.style.height = "32px";
        } else {
            this.lastButton.style.height = "auto";
        }

        // Select the new tool
        this.currentTool = newTool;
        this.selectedButton = button;
        this.selectedButton.classList.add('selected');

        return this.currentTool; // For simplicity, returning toolName as a string
    }
}

