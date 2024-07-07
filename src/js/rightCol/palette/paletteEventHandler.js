export class PaletteEventHandler{
    constructor(colorManager){
        this.colorManager = colorManager;
        this.addColorSwatchButton = document.getElementById('addColorSwatch');
        this.paletteContainer = document.querySelector('.palette-container');

        // Event listeners
        this.initEventListeners();
    }

    initEventListeners() {
        this.addColorSwatchButton.addEventListener('click', () => this.onMouseClick());
    }

    //Color Swatch Add Button
    onMouseClick(){
        const newSwatch = document.createElement('div');
        newSwatch.className = 'color-swatch';
        newSwatch.style.backgroundColor = "black"

        const firstSwatch = this.paletteContainer.querySelector('.color-swatch');
        if (firstSwatch) {
            this.paletteContainer.insertBefore(newSwatch, firstSwatch);
        } else {
            this.paletteContainer.appendChild(newSwatch);
        }
    }
}