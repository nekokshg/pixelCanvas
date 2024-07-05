/* Renders the drawing canvas */
export class CanvasRenderer {
    constructor(canvasManager) {
        this.canvasManager = canvasManager;
        this.canvas = this.canvasManager.canvas;
        this.width = this.canvasManager.canvas.width;
        this.height = this.canvasManager.canvas.height;
        this.ctx = canvasManager.getContext();
        this.origScale = this.canvasManager.scale;

        // Disable anti-aliasing
        this.ctx.imageSmoothingEnabled = false;

        // Store the drawn pixels or shapes
        this.pixels = [];
    }

    drawPixel(x, y, color) {
        this._drawPixelInternal(x, y, color, true);
    }

    _drawPixelInternal(x, y, color, pushToPixels) {
        const roundedX = Math.round(x); // Round the coordinates to ensure they align with pixel boundaries
        const roundedY = Math.round(y);

        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.fillRect(roundedX, roundedY, 1, 1); // Draw a filled rectangle (pixel) at rounded coordinates
        this.ctx.closePath();
        if (pushToPixels) {
            this.pixels.push({ x: roundedX, y: roundedY, color });
        }
    }

    drawLine(prevX, prevY, x, y, color) {
        const dx = x - prevX;
        const dy = y - prevY;
        const steps = Math.max(Math.abs(dx), Math.abs(dy));
        const xIncrement = dx / steps;
        const yIncrement = dy / steps;

        for (let i = 0; i <= steps; i++) {
            const currentX = prevX + xIncrement * i;
            const currentY = prevY + yIncrement * i;
            this._drawPixelInternal(currentX, currentY, color, true);
        }
    }

    // Enhanced drawLinePreview to clear and redraw the line dynamically
    drawLinePreview(startX, startY, endX, endY, color) {
        const dx = endX - startX;
        const dy = endY - startY;
        const steps = Math.max(Math.abs(dx), Math.abs(dy));
        const xIncrement = dx / steps;
        const yIncrement = dy / steps;

        for (let i = 0; i <= steps; i++) {
            const currentX = startX + xIncrement * i;
            const currentY = startY + yIncrement * i;
            this._drawPixelInternal(currentX, currentY, color, false);
        }
    }

    erasePixel(x, y) {
        const roundedX = Math.round(x);
        const roundedY = Math.round(y);

        this.ctx.clearRect(roundedX, roundedY, 1, 1);

        this.pixels = this.pixels.filter(pixel => pixel.x !== roundedX || pixel.y !== roundedY);
    }

    eraseLine(prevX, prevY, x, y) {
        const dx = x - prevX;
        const dy = y - prevY;
        const steps = Math.max(Math.abs(dx), Math.abs(dy));
        const xIncrement = dx / steps;
        const yIncrement = dy / steps;

        for (let i = 0; i <= steps; i++) {
            const currentX = prevX + xIncrement * i;
            const currentY = prevY + yIncrement * i;
            this.erasePixel(currentX, currentY);
        }
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvasManager.canvas.width, this.canvasManager.canvas.height);
        this.pixels = [];
    }

    render() {
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.clearRect(0, 0, this.canvasManager.canvas.width, this.canvasManager.canvas.height);
        
        // Re-draw all stored pixels
        this.pixels.forEach(pixel => {
            this.ctx.fillStyle = pixel.color;
            this.ctx.fillRect(pixel.x, pixel.y, 1, 1);
        });
    }
    
    colorsAreEqual(color1, color2, includeAlpha = false) {
        if (includeAlpha) {
            return color1.r === color2.r && color1.g === color2.g && color1.b === color2.b && color1.a === color2.a;
        }
        return color1.r === color2.r && color1.g === color2.g && color1.b === color2.b;
    }
    
    getColorAtPixel(x, y) {
        const pixel = this.ctx.getImageData(x, y, 1, 1).data;
    
        return {
            r: pixel[0],
            g: pixel[1],
            b: pixel[2],
            a: pixel[3]
        };
    }
    
    setColorAtPixel(x, y, color) {
        const imageData = this.ctx.createImageData(1, 1);
        const data = imageData.data;
        data[0] = color.r;
        data[1] = color.g;
        data[2] = color.b;
        data[3] = color.a;
        this.ctx.putImageData(imageData, x, y);
    }
    
    floodFill(mouseX, mouseY, targetColor, fillColor) {
        const x = Math.floor(mouseX );
        const y = Math.floor(mouseY);
        const width = this.canvasManager.canvas.width;
        const height = this.canvasManager.canvas.height;
        const origWidth = this.canvasManager.getOrigWidth();
        const origHeight = this.canvasManager.getOrigHeight();
    
        // Create a temporary canvas at the current scale
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = width;
        tempCanvas.height = height;
        const tempCtx = tempCanvas.getContext('2d');
    
        // Copy the original canvas content to the temporary canvas
        tempCtx.drawImage(this.canvasManager.canvas, 0, 0, width, height);
    
        // Create a scaled-down canvas at the original scale
        const scaledDownCanvas = document.createElement('canvas');
        scaledDownCanvas.width = origWidth;
        scaledDownCanvas.height = origHeight;
        const scaledDownCtx = scaledDownCanvas.getContext('2d');
    
        // Scale the temporary canvas down to the original scale
        scaledDownCtx.drawImage(tempCanvas, 0, 0, width, height, 0, 0, scaledDownCanvas.width, scaledDownCanvas.height);
    
        // Get image data for pixel manipulation
        const imageData = scaledDownCtx.getImageData(0, 0, scaledDownCanvas.width, scaledDownCanvas.height);
        const data = imageData.data;
    
        const stack = [{ x, y }];
        const visited = new Set();
    
        const getPixelColor = (x, y) => {
            const index = (y * scaledDownCanvas.width + x) * 4;
            return {
                r: data[index],
                g: data[index + 1],
                b: data[index + 2],
                a: data[index + 3]
            };
        };
    
        const setPixelColor = (x, y, color) => {
            const index = (y * scaledDownCanvas.width + x) * 4;
            data[index] = color.r;
            data[index + 1] = color.g;
            data[index + 2] = color.b;
            data[index + 3] = color.a;

            // Push the pixel data to this.pixels
            this.pixels.push({ x, y, color: `rgba(${color.r},${color.g},${color.b},${color.a})` });
        };
    
        while (stack.length) {
            const { x, y } = stack.pop();
    
            if (x < 0 || y < 0 || x >= scaledDownCanvas.width || y >= scaledDownCanvas.height) {
                continue; // Skip if out of bounds
            }
    
            const key = `${x},${y}`;
            if (visited.has(key)) {
                continue; // Skip if already visited
            }
    
            visited.add(key);
    
            const currentColor = getPixelColor(x, y);
    
            // Skip if the current pixel is already filled with fillColor
            if (this.colorsAreEqual(currentColor, fillColor, true)) {
                continue;
            }
    
            // Fill if currentColor matches targetColor or if it's transparent
            if (this.colorsAreEqual(currentColor, targetColor, true) || currentColor.a === 0) {
                setPixelColor(x, y, fillColor);
    
                // Push adjacent pixels onto the stack
                stack.push({ x: x + 1, y });
                stack.push({ x: x - 1, y });
                stack.push({ x, y: y + 1 });
                stack.push({ x, y: y - 1 });
            }
        }
    
        // Update the image data on the scaled-down canvas
        scaledDownCtx.putImageData(imageData, 0, 0);
    
        // Transfer the filled area back to the original canvas
        this.canvasManager.ctx.drawImage(scaledDownCanvas, 0, 0);
    }
    
}