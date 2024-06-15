/* Centralizes event listeners for user interactions, such as mouse clicks and movements for toolBar_List element */
import pencil from '../../assets/pencil.png'
import eraser from '../../assets/eraser.png'
import zoomIn from '../../assets/zoom-in.png';
import zoomOut from '../../assets/zoom-out.png';
import fillBucket from '../../assets/fill-bucket.png'

export class ToolbarEventHandler {
    constructor() {
        //Set the source of the image
        this.pencilButton = document.getElementsByClassName('pencil')[0];
        this.eraserButton = document.getElementsByClassName('eraser')[0];
        this.zoomInButton = document.getElementsByClassName('zoomIn')[0];
        this.zoomOutButton = document.getElementsByClassName('zoomOut')[0];


        this.pencilButton.src = pencil;
        this.eraserButton.src = eraser;
        this.zoomInButton.src = zoomIn;
        this.zoomOutButton.src = zoomOut;

        //Set default tool
        this.currentTool = 'pencil';

        // Initialize toolbar event listeners
        this.init();
    }

    init() {
        this.pencilButton.addEventListener('click', () => this.selectTool('pencil'));
        this.eraserButton.addEventListener('click', () => this.selectTool('eraser'));
        this.zoomInButton.addEventListener('click', () => this.selectTool('zoomIn'));
        this.zoomOutButton.addEventListener('click', ()=> this.selectTool('zoomOut'));
    }

    selectTool(newTool) {
        this.currentTool = newTool;
        return this.currentTool; // For simplicity, returning toolName as a string
    }
}