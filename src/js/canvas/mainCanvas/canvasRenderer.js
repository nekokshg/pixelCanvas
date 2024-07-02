/* Renders the drawing canvas */
export class CanvasRenderer {
    constructor(canvasManager) {
        this.canvasManager = canvasManager;
        this.canvas = this.canvasManager.canvas;
        this.width = this.canvasManager.canvas.width;
        this.height = this.canvasManager.canvas.height;
        this.ctx = canvasManager.getContext();

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

    getColorAtPixel(mouseX, mouseY) {
        const x = mouseX * this.canvasManager.scale;
        const y = mouseY * this.canvasManager.scale;
        const pixel = this.ctx.getImageData(x, y, 1, 1).data;

        return {
            r: pixel[0],
            g: pixel[1],
            b: pixel[2],
            a: pixel[3]
        };
    }

    floodFill(x, y, targetColor, fillColor) {
    //NEED TO OPTIMIZE IT FREEZES WHEN TRYING TO FILL LARGE AREAS ON THE CANVAS
        const stack = [{ x: Math.floor(x), y: Math.floor(y) }];
        const width = this.canvasManager.canvas.width;
        const height = this.canvasManager.canvas.height;

        while (stack.length) {
            const { x, y } = stack.pop();
    
            if (x < 0 || y < 0 || x >= width || y >= height) {
                continue; // Skip if out of bounds
            }

            const currentColor = this.getColorAtPixel(x, y);
    
            // Skip if the current pixel is already filled with fillColor
            if (this.colorsAreEqual(currentColor, fillColor, true)) {
                continue;
            }
    
            // Fill if currentColor matches targetColor or if it's transparent
            if (this.colorsAreEqual(currentColor, targetColor, true) || currentColor.a === 0) {
                this.drawPixel(x, y, `rgba(${fillColor.r},${fillColor.g},${fillColor.b},${fillColor.a})`);
    
                // Push adjacent pixels onto the stack
                stack.push({ x: x + 1, y });
                stack.push({ x: x - 1, y });
                stack.push({ x, y: y + 1 });
                stack.push({ x, y: y - 1 });
            }
        }
    }

}