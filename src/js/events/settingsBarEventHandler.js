import resizeButton from '../../assets/resize.png'
import { calculateBlocks } from "../canvas/calculateBlocks";

export class SettingsBarEventHandler {
    constructor(canvasManagers, canvasRenderers, eventHandler){
        this.canvasManagers = canvasManagers;
        this.canvasRenderers = canvasRenderers;

        this.canvasManager = this.canvasManagers[0];
        this.bgManager = this.canvasManagers[1];

        this.canvasRenderer = this.canvasRenderers[0];
        this.bgRenderer = this.canvasRenderers[1];

        this.eventHandler = eventHandler;

        this.resizeButton = document.getElementsByClassName('resizeImg')[0];
        this.resizeButton.src = resizeButton;

        this.init();
    }

    init(){
        this.resizeButton.addEventListener('click', () => this.resizeCanvas(this.eventHandler));
    }

    resizeCanvas(eventHandler){
        eventHandler.isPopup = true; //Prevent user interaction with canvas when there is a popup window
        this.canvasManager.canvas.style.display = 'none';

        // Show the resize modal
        document.getElementById('resizeModal').style.display = 'block';
    
        // Resize the canvas based on the user input into the resize modal
        document.getElementById('submitDimensions').addEventListener('click', () => {
            // Get the input values
            const widthInput = document.getElementById('widthInput').value;
            const heightInput = document.getElementById('heightInput').value;
        
            // Convert the input strings to numbers
            const width = parseFloat(widthInput);
            const height = parseFloat(heightInput);
        
            // Check if the inputs are valid numbers
            if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
                alert("Please enter valid positive numeric values for width and height.");
            } 
            else {
                const { blocksX, blocksY } = calculateBlocks(width, height);
                
                //Resize canvases
                this.canvasManager.resizeCanvas(blocksX * 16, blocksY * 16);
                this.bgManager.resizeCanvas(blocksX, blocksY);
                
                //Rerender canvases
                this.canvasRenderer.render();
                this.bgRenderer.render();
        
                // Hide the modal
                document.getElementById('resizeModal').style.display = 'none';

                this.eventHandler.isPopup = false;
                this.canvasManager.canvas.style.display = 'block';
    
            }
        });
        
        //Close the modal if the user clicks the close button
        document.querySelector('.close-button').addEventListener('click', () => {
            document.getElementById('resizeModal').style.display = 'none';
            this.eventHandler.isPopup = false;
            this.canvasManager.canvas.style.display = 'block';
        });

        // Close the modal if the user clicks outside of the modal content
        window.onclick = (event) => {
            if (event.target == document.getElementById('resizeModal')) {
                document.getElementById('resizeModal').style.display = 'none';
                this.eventHandler.isPopup = false;
                this.canvasManager.canvas.style.display = 'block';
            }
        };

    }

}