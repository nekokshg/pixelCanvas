import eye from '../../../assets/eye.png';
import eyeOff from '../../../assets/eye-off.png';

export class LayerInfo {
    constructor(layerInfoId, layerIdNum, layerIndex, layer) {
        this.layerIndex = layerIndex;

        const layersInfoContainer = document.getElementsByClassName('layersContainer')[0];

        this.layerInfo = document.createElement('div');
        this.layerInfo.className = 'layerInfo';
        this.layerInfo.id = layerInfoId;
        this.layerInfo.draggable = true;

        this.layerName = document.createElement('p');
        this.layerName.className = 'layerName';
        this.layerName.textContent = `Layer ${layerIdNum}`;

        this.imgElementContainer = document.createElement('div');
        this.imgElementContainer.className = 'imgElementContainer';

        this.visibilityBtn = document.createElement('img');
        this.visibilityBtn.className = 'visibilityBtn';
        this.visibilityBtn.src = eye;

        this.imgElementContainer.appendChild(this.visibilityBtn);
        this.layerInfo.appendChild(this.imgElementContainer);
        this.layerInfo.appendChild(this.layerName);

        // Insert the new layer info before the first child of the container
        if (layersInfoContainer.firstChild) {
            layersInfoContainer.insertBefore(this.layerInfo, layersInfoContainer.firstChild);
        } else {
            layersInfoContainer.appendChild(this.layerInfo);
        }

        this.layer = layer;
        this.canvas = this.layer.canvas;
        this.toggle = true;

        this.init();
    }

    init() {
        this.visibilityBtn.addEventListener('click', () => this.toggleVisibility());

        this.layerInfo.addEventListener('dragstart', (event) => this.onDragStart(event));
        this.layerInfo.addEventListener('dragover', (event) => this.onDragOver(event));
        this.layerInfo.addEventListener('drop', (event) => this.onDrop(event));
        this.layerInfo.addEventListener('dragend', (event) => this.onDragEnd(event));
        this.layerInfo.addEventListener('dragenter', (event) => this.onDragEnter(event));
        this.layerInfo.addEventListener('dragleave', (event) => this.onDragLeave(event));
    }

    getLayerInfoId() {
        return this.layerInfo.id;
    }

    getLayerIndex() {
        return this.layerIndex;
    }

    setLayerIndex(newIndex) {
        this.layerIndex = newIndex;
    }

    toggleVisibility() {
        if (this.toggle) {
            this.visibilityBtn.src = eyeOff;
            this.canvas.style.display = 'none';
            this.toggle = false;
        } else {
            this.visibilityBtn.src = eye;
            this.canvas.style.display = 'block';
            this.toggle = true;
        }
    }

    onDragStart(event) {
        event.dataTransfer.setData('text/plain', this.layerInfo.id);
        event.dataTransfer.effectAllowed = 'move';

        // Add the transparent class to make the element semi-transparent
        this.layerInfo.classList.add('transparent');

        // Hide the dragged element
        setTimeout(() => {
            this.layerInfo.classList.add('hidden');
        }, 0);
    }

    onDragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';

        const rect = this.layerInfo.getBoundingClientRect();
        const mouseY = event.clientY || event.pageY;
        const isAbove = mouseY < rect.top + rect.height / 2;

        this.layerInfo.classList.toggle('below', !isAbove);
    }

    onDragEnter(event) {
        event.preventDefault();
        this.layerInfo.classList.add('drag-over');
    }

    onDragLeave(event) {
        this.layerInfo.classList.remove('drag-over', 'below');
    }

    onDrop(event) {
        event.preventDefault();
        const draggedId = event.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(draggedId);
        const targetElement = this.layerInfo;

        const parent = targetElement.parentNode;
        const rect = targetElement.getBoundingClientRect();
        const mouseY = event.clientY || event.pageY;
        const isAbove = mouseY < rect.top + rect.height / 2;

        if (isAbove) {
            parent.insertBefore(draggedElement, targetElement); // Insert before the target
        } else {
            parent.insertBefore(draggedElement, targetElement.nextSibling); // Insert after the target
        }

        const dropEvent = new CustomEvent('layer-drop', {
            detail: { draggedId, targetId: this.layerInfo.id }
        });
        parent.dispatchEvent(dropEvent);

        this.layerInfo.classList.remove('drag-over', 'below');

        // Show the dragged element again after the drop
        draggedElement.classList.remove('hidden');
        draggedElement.classList.remove('transparent');
    }

    onDragEnd(event) {
        event.preventDefault();
        this.layerInfo.classList.remove('drag-over', 'below');

        // Ensure the dragged element is shown again
        this.layerInfo.classList.remove('hidden');
        this.layerInfo.classList.remove('transparent');
    }
}
