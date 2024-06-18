/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/canvas/backgroundCanvas/bgCanvasManager.js":
/*!***********************************************************!*\
  !*** ./src/js/canvas/backgroundCanvas/bgCanvasManager.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BGCanvasManager: () => (/* binding */ BGCanvasManager)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var BGCanvasManager = /*#__PURE__*/function () {
  function BGCanvasManager(canvasId, width, height, cellSize, scale) {
    _classCallCheck(this, BGCanvasManager);
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.cellSize = cellSize;
    this.width = width;
    this.height = height;
    this.scale = scale;
    this.updateCanvasSize();
  }
  return _createClass(BGCanvasManager, [{
    key: "getContext",
    value: function getContext() {
      return this.ctx;
    }
  }, {
    key: "clearCanvas",
    value: function clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "setScale",
    value: function setScale(scale) {
      this.scale = scale;
      this.updateCanvasSize();
    }
  }, {
    key: "updateCanvasSize",
    value: function updateCanvasSize() {
      //Zoom
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvas.width = this.width * this.cellSize * this.scale;
      this.canvas.height = this.height * this.cellSize * this.scale;
      this.ctx.setTransform(this.scale, 0, 0, this.scale, 0, 0);
    }
  }, {
    key: "resizeCanvas",
    value: function resizeCanvas(width, height) {
      this.width = width;
      this.height = height;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvas.width = this.width * this.cellSize * this.scale;
      this.canvas.height = this.height * this.cellSize * this.scale;
      this.ctx.setTransform(this.scale, 0, 0, this.scale, 0, 0);
    }
  }]);
}();

/***/ }),

/***/ "./src/js/canvas/backgroundCanvas/bgCanvasRenderer.js":
/*!************************************************************!*\
  !*** ./src/js/canvas/backgroundCanvas/bgCanvasRenderer.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BGCanvasRenderer: () => (/* binding */ BGCanvasRenderer)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var BGCanvasRenderer = /*#__PURE__*/function () {
  function BGCanvasRenderer(canvasManager) {
    _classCallCheck(this, BGCanvasRenderer);
    this.ctx = canvasManager.getContext();
    this.cellSize = canvasManager.cellSize;
    // Disable anti-aliasing
    this.ctx.imageSmoothingEnabled = false;
  }
  return _createClass(BGCanvasRenderer, [{
    key: "render",
    value: function render() {
      var blocksX = this.ctx.canvas.width / this.cellSize;
      var blocksY = this.ctx.canvas.height / this.cellSize;
      for (var i = 0; i < Math.ceil(blocksY); i++) {
        for (var j = 0; j < Math.ceil(blocksX); j++) {
          var color = (i + j) % 2 === 0 ? '#FFFFFF' : '#CCCCCC';
          this.ctx.fillStyle = color;

          // Calculate the width and height of the current block
          var width = (j + 1) * this.cellSize > this.ctx.canvas.width ? this.ctx.canvas.width - j * this.cellSize : this.cellSize;
          var height = (i + 1) * this.cellSize > this.ctx.canvas.height ? this.ctx.canvas.height - i * this.cellSize : this.cellSize;
          this.ctx.fillRect(j * this.cellSize, i * this.cellSize, width, height);
        }
      }
    }
  }]);
}();

/***/ }),

/***/ "./src/js/canvas/calculateBlocks.js":
/*!******************************************!*\
  !*** ./src/js/canvas/calculateBlocks.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateBlocks: () => (/* binding */ calculateBlocks)
/* harmony export */ });
//Function to calculate the number of 16px by 16px blocks per height and width in px
//Takes into account of partial blocks
//Ex: calculateBlocks(82, 16) => { blocksX: 5.125, blocksY: 1 }
function calculateBlocks(width, height) {
  var blockSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 16;
  var blocksX = width / blockSize;
  var blocksY = height / blockSize;
  return {
    blocksX: blocksX,
    blocksY: blocksY
  };
}

/***/ }),

/***/ "./src/js/canvas/mainCanvas/canvasManager.js":
/*!***************************************************!*\
  !*** ./src/js/canvas/mainCanvas/canvasManager.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CanvasManager: () => (/* binding */ CanvasManager)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* Manages the drawing canvas */
var CanvasManager = /*#__PURE__*/function () {
  function CanvasManager(canvasId, width, height, scale) {
    _classCallCheck(this, CanvasManager);
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.width = width;
    this.height = height;
    this.scale = scale;
    this.imageData = null;
    this.updateCanvasSize();
  }
  return _createClass(CanvasManager, [{
    key: "getContext",
    value: function getContext() {
      return this.ctx;
    }
  }, {
    key: "setScale",
    value: function setScale(scale) {
      this.scale = scale;
      this.updateCanvasSize();
    }
  }, {
    key: "resizeCanvas",
    value: function resizeCanvas(width, height) {
      this.width = width;
      this.height = height;
      this.updateCanvasSize();
    }
  }, {
    key: "updateCanvasSize",
    value: function updateCanvasSize() {
      // Adjust the canvas size based on the scale
      this.canvas.width = this.width * this.scale;
      this.canvas.height = this.height * this.scale;

      // Clear the canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Apply the scaling transformation directly to the main canvas context
      this.ctx.scale(this.scale, this.scale);
    }
  }]);
}();

/***/ }),

/***/ "./src/js/canvas/mainCanvas/canvasRenderer.js":
/*!****************************************************!*\
  !*** ./src/js/canvas/mainCanvas/canvasRenderer.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CanvasRenderer: () => (/* binding */ CanvasRenderer)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* Renders the drawing canvas */
var CanvasRenderer = /*#__PURE__*/function () {
  function CanvasRenderer(canvasManager) {
    _classCallCheck(this, CanvasRenderer);
    this.canvasManager = canvasManager;
    this.width = this.canvasManager.canvas.width;
    this.height = this.canvasManager.canvas.height;
    this.ctx = canvasManager.getContext();
    this.cellSize = canvasManager.cellSize;
    // Disable anti-aliasing
    this.ctx.imageSmoothingEnabled = false;

    // Store the drawn pixels or shapes
    this.pixels = [];
  }
  return _createClass(CanvasRenderer, [{
    key: "drawPixel",
    value: function drawPixel(x, y, color) {
      this._drawPixelInternal(x, y, color, true);
    }
  }, {
    key: "_drawPixelInternal",
    value: function _drawPixelInternal(x, y, color, pushToPixels) {
      var roundedX = Math.round(x); // Round the coordinates to ensure they align with pixel boundaries
      var roundedY = Math.round(y);
      this.ctx.beginPath();
      this.ctx.fillStyle = color;
      this.ctx.fillRect(roundedX, roundedY, 1, 1); // Draw a filled rectangle (pixel) at rounded coordinates
      this.ctx.closePath();
      if (pushToPixels) {
        this.pixels.push({
          x: roundedX,
          y: roundedY,
          color: color
        });
      }
    }
  }, {
    key: "drawLine",
    value: function drawLine(prevX, prevY, x, y, color) {
      var dx = x - prevX;
      var dy = y - prevY;
      var steps = Math.max(Math.abs(dx), Math.abs(dy));
      var xIncrement = dx / steps;
      var yIncrement = dy / steps;
      for (var i = 0; i <= steps; i++) {
        var currentX = prevX + xIncrement * i;
        var currentY = prevY + yIncrement * i;
        this._drawPixelInternal(currentX, currentY, color, true);
      }
    }

    // Enhanced drawLinePreview to clear and redraw the line dynamically
  }, {
    key: "drawLinePreview",
    value: function drawLinePreview(startX, startY, endX, endY, color) {
      var dx = endX - startX;
      var dy = endY - startY;
      var steps = Math.max(Math.abs(dx), Math.abs(dy));
      var xIncrement = dx / steps;
      var yIncrement = dy / steps;
      for (var i = 0; i <= steps; i++) {
        var currentX = startX + xIncrement * i;
        var currentY = startY + yIncrement * i;
        this._drawPixelInternal(currentX, currentY, color, false);
      }
    }
  }, {
    key: "erasePixel",
    value: function erasePixel(x, y) {
      var roundedX = Math.round(x);
      var roundedY = Math.round(y);
      this.ctx.clearRect(roundedX, roundedY, 1, 1);
      this.pixels = this.pixels.filter(function (pixel) {
        return pixel.x !== roundedX || pixel.y !== roundedY;
      });
    }
  }, {
    key: "eraseLine",
    value: function eraseLine(prevX, prevY, x, y) {
      var dx = x - prevX;
      var dy = y - prevY;
      var steps = Math.max(Math.abs(dx), Math.abs(dy));
      var xIncrement = dx / steps;
      var yIncrement = dy / steps;
      for (var i = 0; i <= steps; i++) {
        var currentX = prevX + xIncrement * i;
        var currentY = prevY + yIncrement * i;
        this.erasePixel(currentX, currentY);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.ctx.clearRect(0, 0, this.canvasManager.canvas.width, this.canvasManager.canvas.height);
      this.pixels = [];
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      // Re-draw all stored pixels
      this.pixels.forEach(function (pixel) {
        _this.ctx.fillStyle = pixel.color;
        _this.ctx.fillRect(pixel.x, pixel.y, 1, 1);
      });
    }
  }]);
}();

/***/ }),

/***/ "./src/js/color/colorPicker.js":
/*!*************************************!*\
  !*** ./src/js/color/colorPicker.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorPicker: () => (/* binding */ ColorPicker)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* Manages the color */
var ColorPicker = /*#__PURE__*/function () {
  function ColorPicker() {
    _classCallCheck(this, ColorPicker);
    this.currentColor = '#000000'; // Default color
  }
  return _createClass(ColorPicker, [{
    key: "setColor",
    value: function setColor(color) {
      this.currentColor = color;
    }
  }, {
    key: "getColor",
    value: function getColor() {
      return this.currentColor;
    }
  }]);
}();

/***/ }),

/***/ "./src/js/events/canvasEventHandler.js":
/*!*********************************************!*\
  !*** ./src/js/events/canvasEventHandler.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CanvasEventHandler: () => (/* binding */ CanvasEventHandler)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* Centralizes event listeners for user interactions, such as mouse clicks and movements for pixelCanvas canvas element */
var CanvasEventHandler = /*#__PURE__*/function () {
  function CanvasEventHandler(canvasManagers, canvasRenderers, toolbar, colorPicker) {
    _classCallCheck(this, CanvasEventHandler);
    this.canvasManagers = canvasManagers;
    this.canvasRenderers = canvasRenderers;

    //Canvas
    this.canvasManager = this.canvasManagers[0];
    this.canvasRenderer = this.canvasRenderers[0];
    this.canvas = this.canvasManager.canvas;

    //BG Canvas
    this.bgManager = this.canvasManagers[1];
    this.bgRenderer = this.canvasRenderers[1];

    //Tool Bar
    this.toolbar = toolbar;
    this.selectedTool = null;

    //Color Picker
    this.colorPicker = colorPicker;
    this.scale = this.canvasManager.scale;
    this.originX = 0;
    this.originY = 0;
    this.isDoing = false;
    this.isPopup = false;
    this.drawPixel = false;
    this.erasePixel = false;
    this.lastX = null;
    this.lastY = null;
    this.startX = null;
    this.startY = null;
  }
  return _createClass(CanvasEventHandler, [{
    key: "init",
    value: function init() {
      var _this = this;
      // Initialize canvas event listeners
      this.canvas.addEventListener('mousedown', function (event) {
        return _this.onMouseDown(event);
      });
      this.canvas.addEventListener('mousemove', function (event) {
        return _this.onMouseMove(event);
      });
      this.canvas.addEventListener('mouseup', function (event) {
        return _this.onMouseUp(event);
      });
      this.canvas.addEventListener('mouseleave', function () {
        return _this.onMouseLeave();
      });
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      if (!this.isPopup) {
        // Get the selected tool from the toolbar
        this.selectedTool = this.toolbar.currentTool; // This will return the selected tool function
        this.isDoing = true;
        var _this$getMousePositio = this.getMousePosition(event),
          x = _this$getMousePositio.x,
          y = _this$getMousePositio.y;
        this.lastX = x;
        this.lastY = y;

        // Perform drawing operations using the selected tool
        if (this.selectedTool === 'pencil') {
          this.drawPixel = true;
          this.draw(this.lastX, this.lastY, x, y);
        } else if (this.selectedTool === 'eraser') {
          this.erasePixel = true;
          this.erase(this.lastX, this.lastY, x, y);
        } else if (this.selectedTool === 'zoomIn') {
          this.zoomIn(x, y);
        } else if (this.selectedTool === 'zoomOut') {
          this.zoomOut(x, y);
        } else if (this.selectedTool === 'line') {
          this.startLinePreview(x, y);
        }
      }
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      if (!this.isPopup && this.isDoing) {
        var _this$getMousePositio2 = this.getMousePosition(event),
          x = _this$getMousePositio2.x,
          y = _this$getMousePositio2.y;

        // Perform drawing operations using the selected tool
        if (this.selectedTool === 'pencil') {
          //this.drawPixel = false;
          this.draw(this.lastX, this.lastY, x, y);
        } else if (this.selectedTool === 'eraser') {
          this.erase(this.lastX, this.lastY, x, y);
        } else if (this.selectedTool === 'zoomIn') {
          this.zoomIn(x, y);
        } else if (this.selectedTool === 'zoomOut') {
          this.zoomOut(x, y);
        } else if (this.selectedTool === 'line') {
          this.updateLinePreview(this.startX, this.startY, x, y);
        }
        this.lastX = x;
        this.lastY = y;
      }
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(event) {
      if (this.selectedTool === 'line') {
        var _this$getMousePositio3 = this.getMousePosition(event),
          x = _this$getMousePositio3.x,
          y = _this$getMousePositio3.y;
        this.commitLine(this.startX, this.startY, x, y);
      }
      this.isDoing = false;
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      //fix logic if mouse is down and leave still want to be able to paint if mouse is down and enters
      this.isDoing = false;
    }
  }, {
    key: "getMousePosition",
    value: function getMousePosition(event) {
      var rect = this.canvas.getBoundingClientRect();
      var x = Math.floor((event.clientX - rect.left) / this.scale);
      var y = Math.floor((event.clientY - rect.top) / this.scale);
      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "draw",
    value: function draw(prevX, prevY, x, y) {
      var color = this.colorPicker.getColor();
      if (this.drawPixel == true) {
        this.canvasRenderer.drawPixel(x, y, color);
        this.drawPixel = false;
      } else {
        this.canvasRenderer.drawLine(prevX, prevY, x, y, color);
      }
    }
  }, {
    key: "erase",
    value: function erase(prevX, prevY, x, y) {
      if (this.erasePixel == true) {
        this.canvasRenderer.erasePixel(x, y);
        this.erasePixel = false;
      } else {
        this.canvasRenderer.eraseLine(prevX, prevY, x, y);
      }
    }
  }, {
    key: "zoom",
    value: function zoom(zf, x, y) {
      var _this2 = this;
      var MIN_SCALE = .1;
      var MAX_SCALE = 100;
      var mouseX = x;
      var mouseY = y;
      var currScale = this.scale;
      var zoomFactor = zf;
      var newScale = 0;

      // Calculate new scale and ensure it does not go below a minimum value
      if (zoomFactor < 1.2) {
        newScale = Math.floor(currScale * zoomFactor);
      } else {
        newScale = Math.ceil(currScale * zoomFactor);
      }

      // If the new scale is out of bounds, return without making changes
      if (newScale < MIN_SCALE || newScale > MAX_SCALE) {
        alert('Cannot zoom any further');
        return;
      }

      // Calculate new origin positions
      var newOriginX = mouseX / newScale - mouseX / currScale + this.originX;
      var newOriginY = mouseY / newScale - mouseY / currScale + this.originY;

      // Apply transformations
      this.canvasRenderers.forEach(function (renderer) {
        renderer.ctx.translate(newOriginX - _this2.originX, newOriginY - _this2.originY);
        renderer.ctx.scale(zoomFactor, zoomFactor);
        renderer.ctx.translate(-newOriginX, -newOriginY);
      });

      // Update scale and resize canvas
      this.canvasManagers.forEach(function (manager) {
        manager.setScale(newScale);
      });

      // Re-render canvases
      this.canvasRenderers.forEach(function (renderer) {
        renderer.render();
      });

      // Update origin and scale
      this.originX = newOriginX;
      this.originY = newOriginY;
      this.scale = newScale;
    }
  }, {
    key: "zoomIn",
    value: function zoomIn(x, y) {
      var zoomFactor = 1.2;
      this.zoom(zoomFactor, x, y);
    }
  }, {
    key: "zoomOut",
    value: function zoomOut(x, y) {
      var zoomFactor = 1.2;
      this.zoom(1 / zoomFactor, x, y);
    }

    // Save the starting point and preview image for the line
  }, {
    key: "startLinePreview",
    value: function startLinePreview(startX, startY) {
      this.previewImage = this.canvasRenderer.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
      this.startX = startX;
      this.startY = startY;
    }

    // Update the line preview dynamically
  }, {
    key: "updateLinePreview",
    value: function updateLinePreview(startX, startY, endX, endY) {
      // Clear the canvas and redraw the previous image
      if (this.previewImage) {
        this.canvasRenderer.ctx.putImageData(this.previewImage, 0, 0);
      }
      this.canvasRenderer.drawLinePreview(startX, startY, endX, endY, this.colorPicker.getColor());
    }

    // Commit the final line to the canvas
  }, {
    key: "commitLine",
    value: function commitLine(startX, startY, endX, endY) {
      this.canvasRenderer.drawLine(startX, startY, endX, endY, this.colorPicker.getColor());
      startX = null;
      startY = null;
      this.previewImage = null;
    }
  }]);
}();

/***/ }),

/***/ "./src/js/events/colorPickerEventHandler.js":
/*!**************************************************!*\
  !*** ./src/js/events/colorPickerEventHandler.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorPickerEventHandler: () => (/* binding */ ColorPickerEventHandler)
/* harmony export */ });
/* harmony import */ var _assets_colorPicker_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/colorPicker.jpeg */ "./src/assets/colorPicker.jpeg");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* Centralizes event listeners for user interactions, such as mouse clicks and movements for colorPicker canvas element */

var ColorPickerEventHandler = /*#__PURE__*/function () {
  function ColorPickerEventHandler(colorPicker) {
    _classCallCheck(this, ColorPickerEventHandler);
    //Set the source of the image
    var cpImg = document.getElementById('colorPickerImg');
    cpImg.src = _assets_colorPicker_jpeg__WEBPACK_IMPORTED_MODULE_0__;

    //Initialize canvas and content
    this.canvas = document.getElementById('colorPickerCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.colorPicker = colorPicker;
    this.isPicking = false;

    // Event listeners
    this.initEventListeners();
  }
  return _createClass(ColorPickerEventHandler, [{
    key: "initEventListeners",
    value: function initEventListeners() {
      var _this = this;
      // Listen for image load to draw on canvas
      var cpImg = document.getElementById('colorPickerImg');
      cpImg.addEventListener('load', this.onImageLoad.bind(this));

      // Listen for mouse events on the canvas
      this.canvas.addEventListener('mousedown', function (event) {
        return _this.onMouseDown(event);
      });
      this.canvas.addEventListener('mousemove', function (event) {
        return _this.onMouseMove(event);
      });
      this.canvas.addEventListener('mouseup', function () {
        return _this.onMouseUp();
      });
    }
  }, {
    key: "onImageLoad",
    value: function onImageLoad() {
      var cpImg = document.getElementById('colorPickerImg');
      // Set canvas size to match the image
      this.canvas.width = cpImg.width;
      this.canvas.height = cpImg.height;

      // Draw the image onto the canvas
      this.ctx.drawImage(cpImg, 0, 0, cpImg.width, cpImg.height);
      cpImg.style.display = 'none'; // Hide the original image
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      this.canvas.style.cursor = "crosshair";
      this.isPicking = true;
      this.pickColor(event);
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      if (this.isPicking) {
        this.pickColor(event);
      }
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      this.canvas.style.cursor = "pointer";
      this.isPicking = false;
    }
  }, {
    key: "pickColor",
    value: function pickColor(event) {
      var rect = this.canvas.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;
      var imageData = this.ctx.getImageData(x, y, 1, 1).data;
      var r = imageData[0];
      var g = imageData[1];
      var b = imageData[2];
      var rgb = "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
      var hex = this.rgbToHex(r, g, b);
      this.colorPicker.setColor(rgb);
      this.displayColor(hex, rgb);
    }
  }, {
    key: "rgbToHex",
    value: function rgbToHex(r, g, b) {
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    }
  }, {
    key: "displayColor",
    value: function displayColor(hex, rgb) {
      var hexcode = document.getElementsByClassName('hexCode')[0];
      var rgbVal = document.getElementsByClassName('rgbValue')[0];
      var colorBox = document.getElementsByClassName('colorBox')[0];
      hexcode.textContent = "hexcode: ".concat(hex);
      rgbVal.textContent = rgb;
      colorBox.style.backgroundColor = hex;
    }
  }]);
}();

/***/ }),

/***/ "./src/js/events/settingsBarEventHandler.js":
/*!**************************************************!*\
  !*** ./src/js/events/settingsBarEventHandler.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsBarEventHandler: () => (/* binding */ SettingsBarEventHandler)
/* harmony export */ });
/* harmony import */ var _assets_resize_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/resize.png */ "./src/assets/resize.png");
/* harmony import */ var _assets_clear_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/clear.png */ "./src/assets/clear.png");
/* harmony import */ var _canvas_calculateBlocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../canvas/calculateBlocks */ "./src/js/canvas/calculateBlocks.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var SettingsBarEventHandler = /*#__PURE__*/function () {
  function SettingsBarEventHandler(canvasManagers, canvasRenderers, eventHandler) {
    _classCallCheck(this, SettingsBarEventHandler);
    this.canvasManagers = canvasManagers;
    this.canvasRenderers = canvasRenderers;
    this.canvasManager = this.canvasManagers[0];
    this.bgManager = this.canvasManagers[1];
    this.canvasRenderer = this.canvasRenderers[0];
    this.bgRenderer = this.canvasRenderers[1];
    this.eventHandler = eventHandler;
    this.resizeButton = document.getElementsByClassName('resizeImg')[0];
    this.clearButton = document.getElementsByClassName('clear')[0];
    this.resizeButton.src = _assets_resize_png__WEBPACK_IMPORTED_MODULE_0__;
    this.clearButton.src = _assets_clear_png__WEBPACK_IMPORTED_MODULE_1__;
    this.init();
  }
  return _createClass(SettingsBarEventHandler, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.resizeButton.addEventListener('click', function () {
        return _this.resizeCanvas(_this.eventHandler);
      });
      this.clearButton.addEventListener('click', function () {
        return _this.clearCanvas(_this.canvasRenderer);
      });
    }
  }, {
    key: "resizeCanvas",
    value: function resizeCanvas(eventHandler) {
      var _this2 = this;
      eventHandler.isPopup = true; //Prevent user interaction with canvas when there is a popup window

      // Show the resize modal
      document.getElementById('resizeModal').style.display = 'block';

      // Resize the canvas based on the user input into the resize modal
      document.getElementById('submitDimensions').addEventListener('click', function () {
        // Get the input values
        var widthInput = document.getElementById('widthInput').value;
        var heightInput = document.getElementById('heightInput').value;

        // Convert the input strings to numbers
        var width = parseFloat(widthInput);
        var height = parseFloat(heightInput);

        // Check if the inputs are valid numbers
        if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
          alert("Please enter valid positive numeric values for width and height.");
        } else {
          var _calculateBlocks = (0,_canvas_calculateBlocks__WEBPACK_IMPORTED_MODULE_2__.calculateBlocks)(width, height),
            blocksX = _calculateBlocks.blocksX,
            blocksY = _calculateBlocks.blocksY;

          //Resize canvases
          _this2.canvasManager.resizeCanvas(blocksX * 16, blocksY * 16);
          _this2.bgManager.resizeCanvas(blocksX, blocksY);

          //Rerender canvases
          _this2.canvasRenderer.render();
          _this2.bgRenderer.render();

          // Hide the modal
          document.getElementById('resizeModal').style.display = 'none';
          _this2.eventHandler.isPopup = false;
          _this2.canvasManager.canvas.style.display = 'block';
        }
      });

      //Close the modal if the user clicks the close button
      document.querySelector('.close-button').addEventListener('click', function () {
        document.getElementById('resizeModal').style.display = 'none';
        _this2.eventHandler.isPopup = false;
        _this2.canvasManager.canvas.style.display = 'block';
      });

      // Close the modal if the user clicks outside of the modal content
      window.onclick = function (event) {
        if (event.target == document.getElementById('resizeModal')) {
          document.getElementById('resizeModal').style.display = 'none';
          _this2.eventHandler.isPopup = false;
          _this2.canvasManager.canvas.style.display = 'block';
        }
      };
    }
  }, {
    key: "clearCanvas",
    value: function clearCanvas(canvasRenderer) {
      canvasRenderer.clear();
    }
  }]);
}();

/***/ }),

/***/ "./src/js/events/toolBarEventHandler.js":
/*!**********************************************!*\
  !*** ./src/js/events/toolBarEventHandler.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolbarEventHandler: () => (/* binding */ ToolbarEventHandler)
/* harmony export */ });
/* harmony import */ var _assets_pencil_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/pencil.png */ "./src/assets/pencil.png");
/* harmony import */ var _assets_eraser_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/eraser.png */ "./src/assets/eraser.png");
/* harmony import */ var _assets_zoom_in_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/zoom-in.png */ "./src/assets/zoom-in.png");
/* harmony import */ var _assets_zoom_out_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/zoom-out.png */ "./src/assets/zoom-out.png");
/* harmony import */ var _assets_fill_bucket_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/fill-bucket.png */ "./src/assets/fill-bucket.png");
/* harmony import */ var _assets_line_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/line.png */ "./src/assets/line.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* Centralizes event listeners for user interactions, such as mouse clicks and movements for toolBar_List element */






var ToolbarEventHandler = /*#__PURE__*/function () {
  function ToolbarEventHandler() {
    _classCallCheck(this, ToolbarEventHandler);
    //Set the source of the image
    this.pencilButton = document.getElementsByClassName('pencil')[0];
    this.eraserButton = document.getElementsByClassName('eraser')[0];
    this.zoomInButton = document.getElementsByClassName('zoomIn')[0];
    this.zoomOutButton = document.getElementsByClassName('zoomOut')[0];
    this.lineButton = document.getElementsByClassName('line')[0];
    this.pencilButton.src = _assets_pencil_png__WEBPACK_IMPORTED_MODULE_0__;
    this.eraserButton.src = _assets_eraser_png__WEBPACK_IMPORTED_MODULE_1__;
    this.zoomInButton.src = _assets_zoom_in_png__WEBPACK_IMPORTED_MODULE_2__;
    this.zoomOutButton.src = _assets_zoom_out_png__WEBPACK_IMPORTED_MODULE_3__;
    this.lineButton.src = _assets_line_png__WEBPACK_IMPORTED_MODULE_5__;

    //Set default tool
    this.currentTool = 'pencil';

    // Initialize toolbar event listeners
    this.init();
  }
  return _createClass(ToolbarEventHandler, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.pencilButton.addEventListener('click', function () {
        return _this.selectTool('pencil');
      });
      this.eraserButton.addEventListener('click', function () {
        return _this.selectTool('eraser');
      });
      this.zoomInButton.addEventListener('click', function () {
        return _this.selectTool('zoomIn');
      });
      this.zoomOutButton.addEventListener('click', function () {
        return _this.selectTool('zoomOut');
      });
      this.lineButton.addEventListener('click', function () {
        return _this.selectTool('line');
      });
    }
  }, {
    key: "selectTool",
    value: function selectTool(newTool) {
      this.currentTool = newTool;
      return this.currentTool; // For simplicity, returning toolName as a string
    }
  }]);
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.container {
    display: flex;
}

ul{
    list-style: none;
}

#header_Container{
    display: flex;
    background-color: blue;
    flex: 0 0 100%;
}

.settingsBarItem{
    display: inline-block;
    margin-right: 10px;
}

.toolBar_Container {
    width: 200px;
    background-color: grey;
}

.toolButton:hover{
    background-color: white;
}

#pixelCanvas_Container { 
    display: flex;
    flex-direction: column; /* Stack children vertically */
    height: 100vh;
    width: 100vw;
    position: relative;
}

.canvasWrapper {
    position: relative;
    flex-grow: 1; /* Allow it to take up the remaining space */
    overflow: hidden; /* Ensure canvases do not overflow */
}

#backgroundCanvas, #pixelCanvas {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
}

#backgroundCanvas {
    z-index: 1;
}

#pixelCanvas {
    z-index: 2;
}

.colorInfoContainer {
    display: flex;
}

.colorBox {
    width: 10px;
    height: 10px;
    border: 4px dotted black;
}

.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    padding-top: 60px;
}

.modal-content {
    background-color: #fefefe;
    margin: 5% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
}

.close-button {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close-button:hover,
.close-button:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB,EAAE,8BAA8B;IACtD,aAAa;IACb,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,YAAY,EAAE,4CAA4C;IAC1D,gBAAgB,EAAE,oCAAoC;AAC1D;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,cAAc;AAClB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,wBAAwB;AAC5B;;AAEA;IACI,aAAa,EAAE,sBAAsB;IACrC,eAAe,EAAE,kBAAkB;IACnC,UAAU,EAAE,eAAe;IAC3B,OAAO;IACP,MAAM;IACN,WAAW,EAAE,eAAe;IAC5B,YAAY,EAAE,gBAAgB;IAC9B,cAAc,EAAE,4BAA4B;IAC5C,4BAA4B,EAAE,mBAAmB;IACjD,iCAAiC,EAAE,qBAAqB;IACxD,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,eAAe,EAAE,kCAAkC;IACnD,aAAa;IACb,sBAAsB;IACtB,UAAU,EAAE,oDAAoD;AACpE;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;;AAEA;;IAEI,YAAY;IACZ,qBAAqB;IACrB,eAAe;AACnB","sourcesContent":[".container {\n    display: flex;\n}\n\nul{\n    list-style: none;\n}\n\n#header_Container{\n    display: flex;\n    background-color: blue;\n    flex: 0 0 100%;\n}\n\n.settingsBarItem{\n    display: inline-block;\n    margin-right: 10px;\n}\n\n.toolBar_Container {\n    width: 200px;\n    background-color: grey;\n}\n\n.toolButton:hover{\n    background-color: white;\n}\n\n#pixelCanvas_Container { \n    display: flex;\n    flex-direction: column; /* Stack children vertically */\n    height: 100vh;\n    width: 100vw;\n    position: relative;\n}\n\n.canvasWrapper {\n    position: relative;\n    flex-grow: 1; /* Allow it to take up the remaining space */\n    overflow: hidden; /* Ensure canvases do not overflow */\n}\n\n#backgroundCanvas, #pixelCanvas {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n}\n\n#backgroundCanvas {\n    z-index: 1;\n}\n\n#pixelCanvas {\n    z-index: 2;\n}\n\n.colorInfoContainer {\n    display: flex;\n}\n\n.colorBox {\n    width: 10px;\n    height: 10px;\n    border: 4px dotted black;\n}\n\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    padding-top: 60px;\n}\n\n.modal-content {\n    background-color: #fefefe;\n    margin: 5% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n}\n\n.close-button {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n}\n\n.close-button:hover,\n.close-button:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/clear.png":
/*!******************************!*\
  !*** ./src/assets/clear.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/clear.png";

/***/ }),

/***/ "./src/assets/colorPicker.jpeg":
/*!*************************************!*\
  !*** ./src/assets/colorPicker.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/colorPicker.jpeg";

/***/ }),

/***/ "./src/assets/eraser.png":
/*!*******************************!*\
  !*** ./src/assets/eraser.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/eraser.png";

/***/ }),

/***/ "./src/assets/fill-bucket.png":
/*!************************************!*\
  !*** ./src/assets/fill-bucket.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fill-bucket.png";

/***/ }),

/***/ "./src/assets/line.png":
/*!*****************************!*\
  !*** ./src/assets/line.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/line.png";

/***/ }),

/***/ "./src/assets/pencil.png":
/*!*******************************!*\
  !*** ./src/assets/pencil.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/pencil.png";

/***/ }),

/***/ "./src/assets/resize.png":
/*!*******************************!*\
  !*** ./src/assets/resize.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/resize.png";

/***/ }),

/***/ "./src/assets/zoom-in.png":
/*!********************************!*\
  !*** ./src/assets/zoom-in.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/zoom-in.png";

/***/ }),

/***/ "./src/assets/zoom-out.png":
/*!*********************************!*\
  !*** ./src/assets/zoom-out.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/zoom-out.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainCanvasController: () => (/* binding */ MainCanvasController)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _js_canvas_calculateBlocks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/canvas/calculateBlocks.js */ "./src/js/canvas/calculateBlocks.js");
/* harmony import */ var _js_canvas_backgroundCanvas_bgCanvasManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/canvas/backgroundCanvas/bgCanvasManager.js */ "./src/js/canvas/backgroundCanvas/bgCanvasManager.js");
/* harmony import */ var _js_canvas_backgroundCanvas_bgCanvasRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/canvas/backgroundCanvas/bgCanvasRenderer.js */ "./src/js/canvas/backgroundCanvas/bgCanvasRenderer.js");
/* harmony import */ var _js_canvas_mainCanvas_canvasManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/canvas/mainCanvas/canvasManager.js */ "./src/js/canvas/mainCanvas/canvasManager.js");
/* harmony import */ var _js_canvas_mainCanvas_canvasRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/canvas/mainCanvas/canvasRenderer.js */ "./src/js/canvas/mainCanvas/canvasRenderer.js");
/* harmony import */ var _js_color_colorPicker_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/color/colorPicker.js */ "./src/js/color/colorPicker.js");
/* harmony import */ var _js_events_canvasEventHandler_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/events/canvasEventHandler.js */ "./src/js/events/canvasEventHandler.js");
/* harmony import */ var _js_events_colorPickerEventHandler_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/events/colorPickerEventHandler.js */ "./src/js/events/colorPickerEventHandler.js");
/* harmony import */ var _js_events_toolBarEventHandler_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/events/toolBarEventHandler.js */ "./src/js/events/toolBarEventHandler.js");
/* harmony import */ var _js_events_settingsBarEventHandler_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/events/settingsBarEventHandler.js */ "./src/js/events/settingsBarEventHandler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }











var MainCanvasController = /*#__PURE__*/function () {
  function MainCanvasController() {
    _classCallCheck(this, MainCanvasController);
    var _calculateBlocks = (0,_js_canvas_calculateBlocks_js__WEBPACK_IMPORTED_MODULE_1__.calculateBlocks)(256, 256),
      blocksX = _calculateBlocks.blocksX,
      blocksY = _calculateBlocks.blocksY; //Default size 32px by 32px
    this.blocksX = blocksX;
    this.blocksY = blocksY;
    this.blockSize = 16;
    this.init();
  }
  return _createClass(MainCanvasController, [{
    key: "init",
    value: function init() {
      this.setupBackgroundCanvas();
      this.setupMainCanvas();
      this.setupEventHandlers();
    }
  }, {
    key: "setupBackgroundCanvas",
    value: function setupBackgroundCanvas() {
      this.bgManager = new _js_canvas_backgroundCanvas_bgCanvasManager_js__WEBPACK_IMPORTED_MODULE_2__.BGCanvasManager('backgroundCanvas', this.blocksX, this.blocksY, this.blockSize, 1);
      this.bgRenderer = new _js_canvas_backgroundCanvas_bgCanvasRenderer_js__WEBPACK_IMPORTED_MODULE_3__.BGCanvasRenderer(this.bgManager);
      this.bgRenderer.render();
    }
  }, {
    key: "setupMainCanvas",
    value: function setupMainCanvas() {
      var pixelWidth = this.blocksX * this.blockSize;
      var pixelHeight = this.blocksY * this.blockSize;
      this.canvasManager = new _js_canvas_mainCanvas_canvasManager_js__WEBPACK_IMPORTED_MODULE_4__.CanvasManager('pixelCanvas', pixelWidth, pixelHeight, 1);
      this.canvasRenderer = new _js_canvas_mainCanvas_canvasRenderer_js__WEBPACK_IMPORTED_MODULE_5__.CanvasRenderer(this.canvasManager);
    }
  }, {
    key: "setupEventHandlers",
    value: function setupEventHandlers() {
      this.colorPicker = new _js_color_colorPicker_js__WEBPACK_IMPORTED_MODULE_6__.ColorPicker();
      this.colorPickerEventHandler = new _js_events_colorPickerEventHandler_js__WEBPACK_IMPORTED_MODULE_8__.ColorPickerEventHandler(this.colorPicker);
      this.toolbarEventHandler = new _js_events_toolBarEventHandler_js__WEBPACK_IMPORTED_MODULE_9__.ToolbarEventHandler();
      this.canvasEventHandler = new _js_events_canvasEventHandler_js__WEBPACK_IMPORTED_MODULE_7__.CanvasEventHandler([this.canvasManager, this.bgManager], [this.canvasRenderer, this.bgRenderer], this.toolbarEventHandler, this.colorPicker);
      this.canvasEventHandler.init();
      this.settingsBarEventHandler = new _js_events_settingsBarEventHandler_js__WEBPACK_IMPORTED_MODULE_10__.SettingsBarEventHandler([this.canvasManager, this.bgManager], [this.canvasRenderer, this.bgRenderer], this.canvasEventHandler);
    }
  }]);
}();
document.addEventListener('DOMContentLoaded', function () {
  var mainCanvasController = new MainCanvasController();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle69b42bf5db1d5876d256.js.map