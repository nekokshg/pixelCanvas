/**
 * Manages the tool for the program
 */

export class ToolManager {
    constructor (){
        this.currentTool = 'pencil'; // Default tool
    }

    setTool(tool){
        this.currentTool = tool;
    }

    getTool(){
        return this.currentTool;
    }
}