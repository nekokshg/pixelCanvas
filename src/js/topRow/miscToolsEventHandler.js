import flipHorizontal from '../../assets/flipHorizontal.png'
import flipVertical from '../../assets/flipVertical.png'
import undo from '../../assets/undo.png'
import redo from '../../assets/redo.png'
import download from '../../assets/download.png'

export class MiscToolsEventHandler {
    constructor(){
        this.flipHorizontalBtn = document.getElementById('flipHorizontalBtn')
        this.flipVerticalBtn = document.getElementById('flipVerticalBtn')
        this.undoBtn = document.getElementById('undoBtn')
        this.redoBtn = document.getElementById('redoBtn')
        this.downloadBtn = document.getElementById('downloadBtn')

        const flipHorizontalImg = document.getElementsByClassName('flipHorizontal')[0]
        flipHorizontalImg.src = flipHorizontal;
        const flipVerticalImg = document.getElementsByClassName('flipVertical')[0]
        flipVerticalImg.src = flipVertical;
        const undoImg = document.getElementsByClassName('undo')[0];
        undoImg.src = undo;
        const redoImg = document.getElementsByClassName('redo')[0]
        redoImg.src = redo;
        const downloadImg = document.getElementsByClassName('download')[0]
        downloadImg.src = download;
    }
}