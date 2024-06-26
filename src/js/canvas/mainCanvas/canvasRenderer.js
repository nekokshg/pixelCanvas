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
    
    floodFill(x, y, targetColor, fillColor) {
        const scale = this.canvasManager.scale; // Get the current scale from the canvas manager
        const stack = [{ x, y }];
        const width = this.canvasManager.canvas.width / scale;
        const height = this.canvasManager.canvas.height / scale;
        const imageData = this.ctx.getImageData(0, 0, width * scale, height * scale);
        const data = imageData.data;
    
        const getPixelColor = (x, y) => {
            const index = ((y * scale) * (width * scale) + (x * scale)) * 4;
            return {
                r: data[index],
                g: data[index + 1],
                b: data[index + 2],
                a: data[index + 3]
            };
        };
    
        const setPixelColor = (x, y, color) => {
            for (let i = 0; i < scale; i++) {
                for (let j = 0; j < scale; j++) {
                    const index = (((y * scale) + j) * (width * scale) + ((x * scale) + i)) * 4;
                    data[index] = color.r;
                    data[index + 1] = color.g;
                    data[index + 2] = color.b;
                    data[index + 3] = color.a;
                }
            }
            this.pixels.push({ x, y, color: `rgba(${color.r},${color.g},${color.b},${color.a / 255})` });
        };
    
        while (stack.length) {
            const { x, y } = stack.pop();
    
            if (x < 0 || y < 0 || x >= width || y >= height) {
                continue;
            }
    
            const currentColor = getPixelColor(x, y);
    
            // Fill if currentColor matches targetColor or if the pixel is transparent
            if (this.colorsAreEqual(currentColor, targetColor, true) || currentColor.a === 0) {
                setPixelColor(x, y, fillColor);
    
                stack.push({ x: x + 1, y });
                stack.push({ x: x - 1, y });
                stack.push({ x, y: y + 1 });
                stack.push({ x, y: y - 1 });
            }
        }
        this.ctx.putImageData(imageData, 0, 0);
    }
    
}