/* Contains logic for the zoom tool, contains the zoom logic for both zoomIn and zoomOut */
export class ZoomTool {
    constructor(zoomFactor, currScale, canvasManagers, canvasRenderers){
        this.zoomFactor = zoomFactor;
        this.currScale = currScale;

        this.canvasManagers = canvasManagers;
        this.canvasRenderers = canvasRenderers;

        this.originX = 0;
        this.originY = 0;
    }

    zoom(x, y){
        const mouseX = x;
        const mouseY = y;

        //Calculate new scale and visible origin
        const newScale = Math.ceil(this.currScale * this.zoomFactor);
        const newOriginX = mouseX / newScale - mouseX / this.currScale + this.originX;
        const newOriginY = mouseY / newScale - mouseY / this.currScale + this.originY;

        //Apply transformations
        this.canvasRenderers.forEach(renderer =>{
            renderer.ctx.translate(newOriginX - this.originX, newOriginY - this.originY);
            renderer.ctx.scale(this.zoomFactor, this.zoomFactor);
            renderer.ctx.translate(-newOriginX, -newOriginY);
        });

        //Update scale and resize canvas
        this.canvasManagers.forEach(manager =>{
            manager.setScale(newScale);
        })

        //Re-render canvases
        this.canvasRenderers.forEach(renderer => {
            renderer.render();
        })

        //Update origin and return scale
        this.originX = newOriginX;
        this.originY = newOriginY;
        return newScale;
    }
    
}