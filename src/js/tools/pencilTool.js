/* Contains logic for the pencil tool, allowing the user to draw on the canvas */
export class PencilTool {
    constructor(canvasRenderer, colorPicker){
        this.canvasRenderer = canvasRenderer;
        this.colorPicker = colorPicker;
    }

    draw(x, y){
        const color = this.colorPicker.getColor();
        this.canvasRenderer.drawPixel(x, y, color);
    }
}