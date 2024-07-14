export class PaletteEventHandler{
    constructor(colorManager){
        this.colorManager = colorManager;
        this.addColorSwatchButton = document.getElementById('addColorSwatch');
        this.paletteContainer = document.querySelector('.palette-container');

        this.addColorSwatch(); //add first color swatch with default color: #000000

        // Event listeners
        this.initEventListeners();
    }

    initEventListeners() {
        this.addColorSwatchButton.addEventListener('click', () => this.addColorSwatch());

    }

    selectColorSwatch(swatch) {
        swatch.style.border = 'solid yellow';
    }

    // Color Swatch Add Button
    addColorSwatch() {
        const newSwatch = document.createElement('div');
        newSwatch.className = 'color-swatch';
        newSwatch.style.backgroundColor = "black";
        newSwatch.addEventListener('click', () => this.selectColorSwatch(newSwatch));
        this.paletteContainer.insertBefore(newSwatch, this.addColorSwatchButton);
    }
}