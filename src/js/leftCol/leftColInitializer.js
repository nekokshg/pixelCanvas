import { ToolBarEventHandler } from "./toolbar/toolbarEventHandler";

export class LeftColInitializer{
    constructor(toolManager){
        this.toolManager = toolManager;
        this.init();
    }

    init(){
        this.setUpToolBar();
    }

    setUpToolBar(){
        this.toolBarEventHandler = new ToolBarEventHandler(this.toolManager);
    }
}