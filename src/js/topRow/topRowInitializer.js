import file from '../../assets/file.png'
import layer from '../../assets/layer.png'
import setting from '../../assets/setting.png'
import select from '../../assets/select.png'
import { FileSettingsEventHandler } from "./fileSettings/fileSettingsEventHandler";

export class TopRowInitializer{
    constructor(canvasManager, canvasRenderer, bgManager, bgRenderer){
        this.canvasManager = canvasManager;
        this.canvasRenderer = canvasRenderer;
        this.bgManager = bgManager;
        this.bgRenderer = bgRenderer;

        this.init();
    }

    init(){
        this.setUpEventHandlers(this.canvasManager, this.canvasRenderer, this.bgManager, this.bgRenderer)
    }

    setUpEventHandlers(){
        this.fileSettingsEventHandler = new FileSettingsEventHandler(this.canvasManager, this.canvasRenderer, this.bgManager, this.bgRenderer)
    }

}