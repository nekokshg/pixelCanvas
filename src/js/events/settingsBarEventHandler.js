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
        eventHandler.isPopup = true;

        this.canvasManager.canvas.style.display = 'none';

        // Show the modal
        document.getElementById('dimensionModal').style.display = 'block';
        
        document.querySelector('.close-button').addEventListener('click', () => {
            // Hide the modal
            document.getElementById('dimensionModal').style.display = 'none';
            this.eventHandler.isPopup = false;
            this.canvasManager.canvas.style.display = 'block';
        });
        
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
            } else {
                // Store the width and height in variables
                console.log(`Width: ${width}, Height: ${height}`);
                
                // You can now use the width and height variables as needed
                const { blocksX, blocksY } = calculateBlocks(width, height);
                console.log(`BlocksX: ${blocksX}, BlocksY: ${blocksY}`);

                this.eventHandler.isPopup = false;
                this.canvasManager.canvas.style.display = 'block';
        //Resize canvas
                this.canvasManager.resizeCanvas(blocksX * 16, blocksY * 16);
                        //Resize bg canvas
            this.bgManager.resizeCanvas(blocksX, blocksY);
        //Rerender bg canvas
        this.bgRenderer.render();

                //Rerender canvas
                this.canvasRenderer.render();

        
                // Hide the modal
                document.getElementById('dimensionModal').style.display = 'none';

                console.log(this.eventHandler.isPopup)

                
                
                
            }
        });
        
        // Close the modal if the user clicks outside of the modal content
        window.onclick = (event) => {
            if (event.target == document.getElementById('dimensionModal')) {
                document.getElementById('dimensionModal').style.display = 'none';
                this.eventHandler.isPopup = false;
                this.canvasManager.canvas.style.display = 'block';
            }
        };

    }

}