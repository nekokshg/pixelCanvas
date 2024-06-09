/* Centralizes event listeners for user interactions, such as mouse clicks and movements for toolBar_List element */
import pencil from '../../assets/pencil.png'
import eraser from '../../assets/eraser.png'

export class ToolbarEventHandler {
    constructor() {
        //Set the source of the image
        this.pencilButton = document.getElementsByClassName('pencil')[0];
        this.eraserButton = document.getElementsByClassName('eraser')[0];
        this.pencilButton.src = pencil;
        this.eraserButton.src = eraser;

        //Set default tool
        this.currentTool = 'pencil';

        // Initialize toolbar event listeners
        this.init();
    }

    init() {
        this.pencilButton.addEventListener('click', () => this.selectTool('pencil'));
        this.eraserButton.addEventListener('click', () => this.selectTool('eraser'));
    }

    selectTool(newTool) {
        this.currentTool = newTool;
        alert(this.currentTool);
        return this.currentTool; // For simplicity, returning toolName as a string
    }
}