import clear from '../../../assets/clear.png';
import resize from '../../../assets/resize.png';
import export_ from '../../../assets/export.png';

export class FileSettingsEventHandler{
    constructor(canvasManager, canvasRenderer, bgManager, bgRenderer){
        this.canvasManager = canvasManager;
        this.canvasRenderer = canvasRenderer;
        this.bgManager = bgManager;
        this.bgRenderer = bgRenderer;

        this.fileButton = document.getElementById('fileBtn');
        this.fileSettingContent = document.getElementById('fileContent');
        this.resizeButton = document.getElementsByClassName('resize')[0];
        this.clearButton = document.getElementsByClassName('clear')[0];
        this.exportButton = document.getElementsByClassName('export')[0];

        this.clearImg = document.getElementsByClassName('clearImg')[0];
        this.clearImg.src = clear;
        this.resizeImg = document.getElementsByClassName('resizeImg')[0];
        this.resizeImg.src = resize;
        this.exportImg = document.getElementsByClassName('exportImg')[0];
        this.exportImg.src = export_;

        this.toggle = true;

        this.init();
    }

    init(){
        this.fileButton.addEventListener('click', () => this.showFileSettings());
        this.resizeButton.addEventListener('click', () => this.resizeCanvas());
        this.clearButton.addEventListener('click', () => this.clearCanvas(this.canvasRenderer));
        this.exportButton.addEventListener('click', () => this.export());
    }

    showFileSettings(){
        if(this.toggle){
            this.fileSettingContent.style.display = "block";
            this.toggle = false;
        }
        else{
            this.fileSettingContent.style.display = "none";
            this.toggle = true;
        }
    }

    resizeCanvas(){
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
                this.canvasManager.canvas.style.display = 'block';
    
            }
        });
        
        //Close the modal if the user clicks the close button
        document.querySelector('.close-button').addEventListener('click', () => {
            document.getElementById('resizeModal').style.display = 'none';
            this.canvasManager.canvas.style.display = 'block';
        });

        // Close the modal if the user clicks outside of the modal content
        window.onclick = (event) => {
            if (event.target == document.getElementById('resizeModal')) {
                document.getElementById('resizeModal').style.display = 'none';
            }
        };

    }

    clearCanvas(canvasRenderer){
        canvasRenderer.clear();
    }

    export(){
        const oldScale = this.canvasManager.scale;

        //Scale canvas down
        this.canvasManager.setScale(1);
        this.canvasRenderer.render();

        const canvas = this.canvasManager.canvas;
        const image = canvas.toDataURL('image/png');

        //Create a temporary link element
        const link = document.createElement('a');
        link.href = image;
        link.download = 'canvas-image.png'; //Alter here later to take file name that the user sets

        //Trigger the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        //Revert canvas back to old scale and rerender
        this.canvasManager.setScale(oldScale);
        this.canvasRenderer.render();
    }

}