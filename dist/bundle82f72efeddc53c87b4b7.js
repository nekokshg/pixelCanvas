/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/leftCol/leftColEventHandler.js":
/*!***********************************************!*\
  !*** ./src/js/leftCol/leftColEventHandler.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeftColEventHandler: () => (/* binding */ LeftColEventHandler)
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
/**
 * Centralizes event listeners for user interactions, such as mouse clicks for elements in the leftCol.
 * 
 * The purpose of the leftCol is only for selecting tools.
 */






var LeftColEventHandler = /*#__PURE__*/function () {
  function LeftColEventHandler() {
    _classCallCheck(this, LeftColEventHandler);
    this.pencilButton = document.getElementsByClassName('pencil')[0];
    this.pencilButton.src = _assets_pencil_png__WEBPACK_IMPORTED_MODULE_0__;
    this.eraserButton = document.getElementsByClassName('eraser')[0];
    this.eraserButton.src = _assets_eraser_png__WEBPACK_IMPORTED_MODULE_1__;
    this.zoomInButton = document.getElementsByClassName('zoomIn')[0];
    this.zoomInButton.src = _assets_zoom_in_png__WEBPACK_IMPORTED_MODULE_2__;
    this.zoomOutButton = document.getElementsByClassName('zoomOut')[0];
    this.zoomOutButton.src = _assets_zoom_out_png__WEBPACK_IMPORTED_MODULE_3__;
    this.lineButton = document.getElementsByClassName('line')[0];
    this.lineButton.src = _assets_line_png__WEBPACK_IMPORTED_MODULE_5__;
    this.fillButton = document.getElementsByClassName('fill')[0];
    this.fillButton.src = _assets_fill_bucket_png__WEBPACK_IMPORTED_MODULE_4__;
    this.lastButton = document.getElementsByClassName('lastButton')[0];

    // Set default tool
    this.currentTool = 'pencil';
    this.selectedButton = this.pencilButton;
    this.selectedButton.classList.add('selected');
    this.init();
  }
  return _createClass(LeftColEventHandler, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.pencilButton.addEventListener('click', function () {
        return _this.selectTool('pencil', _this.pencilButton);
      });
      this.eraserButton.addEventListener('click', function () {
        return _this.selectTool('eraser', _this.eraserButton);
      });
      this.zoomInButton.addEventListener('click', function () {
        return _this.selectTool('zoomIn', _this.zoomInButton);
      });
      this.zoomOutButton.addEventListener('click', function () {
        return _this.selectTool('zoomOut', _this.zoomOutButton);
      });
      this.lineButton.addEventListener('click', function () {
        return _this.selectTool('line', _this.lineButton);
      });
      this.fillButton.addEventListener('click', function () {
        return _this.selectTool('fill', _this.fillButton);
      });
    }
  }, {
    key: "selectTool",
    value: function selectTool(newTool, button) {
      // Deselect the previous tool
      if (this.selectedButton) {
        this.selectedButton.classList.remove('selected');
      }
      if (newTool === 'fill') {
        this.lastButton.style.height = "32px";
      } else {
        this.lastButton.style.height = "auto";
      }

      // Select the new tool
      this.currentTool = newTool;
      this.selectedButton = button;
      this.selectedButton.classList.add('selected');
      return this.currentTool; // For simplicity, returning toolName as a string
    }
  }]);
}();

/***/ }),

/***/ "./src/js/middleCol/bgCanvas/bgManager.js":
/*!************************************************!*\
  !*** ./src/js/middleCol/bgCanvas/bgManager.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BGManager: () => (/* binding */ BGManager)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * This file contains the BackgroundCanvasManager class, which is responsible for managing
 * the state and interactions of the background canvas in the PixelCanvas application.
 * It handles the setup, updates, and events related to the background canvas.
 */

var BGManager = /*#__PURE__*/function () {
  function BGManager(canvasId, width, height, cellSize, scale) {
    _classCallCheck(this, BGManager);
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.scale = scale;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.cellSize = cellSize;
    this.origWidth = width;
    this.origHeight = height;
    this.origScale = scale;
    this.updateCanvasSize();
  }
  return _createClass(BGManager, [{
    key: "getContext",
    value: function getContext() {
      return this.ctx;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.height;
    }
  }, {
    key: "getScale",
    value: function getScale() {
      return this.scale;
    }
  }, {
    key: "getCellSize",
    value: function getCellSize() {
      return this.cellSize;
    }
  }, {
    key: "setWidth",
    value: function setWidth(newWidth) {
      this.width = newWidth;
    }
  }, {
    key: "setHeight",
    value: function setHeight(newHeight) {
      this.height = newHeight;
    }
  }, {
    key: "setScale",
    value: function setScale(newScale) {
      this.scale = newScale;
    }
  }, {
    key: "scaleCanvas",
    value: function scaleCanvas(scale) {
      //Function to set new scale and resize the canvas based on that
      this.setScale(scale);
      this.updateCanvasSize();
    }
  }, {
    key: "resizeCanvas",
    value: function resizeCanvas(width, height) {
      //Function to set new width and height and resize the canvas based on that
      this.setWidth(width);
      this.setHeight(height);
      this.updateCanvasSize();
    }
  }, {
    key: "updateCanvasSize",
    value: function updateCanvasSize() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvas.width = this.width * this.cellSize * this.scale;
      this.canvas.height = this.height * this.cellSize * this.scale;
      this.ctx.scale(this.scale, this.scale);
    }
  }]);
}();

/***/ }),

/***/ "./src/js/middleCol/bgCanvas/bgRenderer.js":
/*!*************************************************!*\
  !*** ./src/js/middleCol/bgCanvas/bgRenderer.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BGRenderer: () => (/* binding */ BGRenderer)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * This file contains the BackgroundCanvasRenderer class, which is responsible for rendering
 * the background canvas in the PixelCanvas application. It handles the drawing operations
 * and ensures that the background canvas is rendered correctly based on the current state.
 */

var BGRenderer = /*#__PURE__*/function () {
  function BGRenderer(canvasManager) {
    _classCallCheck(this, BGRenderer);
    this.canvasManager = canvasManager;
    this.canvas = this.canvasManager.canvas;
    this.width = this.canvasManager.getWidth();
    this.height = this.canvasManager.getHeight();
    this.scale = this.canvasManager.getScale();
    this.ctx = this.canvasManager.getContext();
    this.cellSize = this.canvasManager.getCellSize();

    // Disable anti-aliasing
    this.ctx.imageSmoothingEnabled = false;
  }
  return _createClass(BGRenderer, [{
    key: "render",
    value: function render() {
      var blocksX = this.canvas.width / this.cellSize;
      var blocksY = this.canvas.height / this.cellSize;
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
  }, {
    key: "clear",
    value: function clear() {
      //Function to clear canvas element of all drawings
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }]);
}();

/***/ }),

/***/ "./src/js/middleCol/mainCanvas/canvasManager.js":
/*!******************************************************!*\
  !*** ./src/js/middleCol/mainCanvas/canvasManager.js ***!
  \******************************************************/
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
/**
 * This file contains the CanvasManager class, which is responsible for managing
 * the state and interactions of the main canvas in the PixelCanvas application.
 * It handles the setup, updates, and events related to the main canvas.
 */

var CanvasManager = /*#__PURE__*/function () {
  function CanvasManager(canvasId, width, height, scale) {
    _classCallCheck(this, CanvasManager);
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.scale = scale;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.origWidth = width;
    this.origHeight = height;
    this.origScale = scale;
    this.updateCanvasSize();
    var canvasContainer = document.getElementsByClassName("canvasWrapper")[0];
    canvasContainer.style.width = "".concat(this.canvas.width, "px");
    canvasContainer.style.height = "".concat(this.canvas.height, "px");
  }
  return _createClass(CanvasManager, [{
    key: "getOrigWidth",
    value: function getOrigWidth() {
      var width = this.origWidth;
      return width;
    }
  }, {
    key: "getOrigHeight",
    value: function getOrigHeight() {
      var height = this.origHeight;
      return height;
    }
  }, {
    key: "getOrigScale",
    value: function getOrigScale() {
      var scale = this.origScale;
      return scale;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.height;
    }
  }, {
    key: "getScale",
    value: function getScale() {
      return this.scale;
    }
  }, {
    key: "getContext",
    value: function getContext() {
      return this.ctx;
    }
  }, {
    key: "setWidth",
    value: function setWidth(newWidth) {
      this.width = newWidth;
    }
  }, {
    key: "setHeight",
    value: function setHeight(newHeight) {
      this.height = newHeight;
    }
  }, {
    key: "setScale",
    value: function setScale(newScale) {
      this.scale = newScale;
    }
  }, {
    key: "scaleCanvas",
    value: function scaleCanvas(scale) {
      //Function to set new scale and resize the canvas based on that
      this.setScale(scale);
      this.updateCanvasSize();
    }
  }, {
    key: "resizeCanvas",
    value: function resizeCanvas(width, height) {
      //Function to set new width and height and resize the canvas based on that
      this.setWidth(width);
      this.setHeight(height);
      this.updateCanvasSize();
    }
  }, {
    key: "updateCanvasSize",
    value: function updateCanvasSize() {
      // Adjust the canvas size based on the scale
      this.canvas.width = this.width * this.scale;
      this.canvas.height = this.height * this.scale;

      //Update size of canvasWrapper
      var canvasContainer = document.getElementsByClassName("canvasWrapper")[0];
      canvasContainer.style.width = "".concat(this.canvas.width, "px");
      canvasContainer.style.height = "".concat(this.canvas.height, "px");

      // Clear the canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Apply the scaling transformation directly to the main canvas context
      this.ctx.scale(this.scale, this.scale);
    }
  }]);
}();

/***/ }),

/***/ "./src/js/middleCol/mainCanvas/canvasRenderer.js":
/*!*******************************************************!*\
  !*** ./src/js/middleCol/mainCanvas/canvasRenderer.js ***!
  \*******************************************************/
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
/**
 * This file contains the CanvasRenderer class, which is responsible for rendering
 * the main canvas in the PixelCanvas application. It handles the drawing operations
 * and ensures that the main canvas is rendered correctly based on the current state.
 */

/* Renders the drawing canvas */
var CanvasRenderer = /*#__PURE__*/function () {
  function CanvasRenderer(canvasManager) {
    _classCallCheck(this, CanvasRenderer);
    this.canvasManager = canvasManager;
    this.canvas = this.canvasManager.canvas;
    this.width = this.canvasManager.getWidth();
    this.height = this.canvasManager.getHeight();
    this.scale = this.canvasManager.getScale();
    this.ctx = this.canvasManager.getContext();

    // Disable anti-aliasing
    this.ctx.imageSmoothingEnabled = false;

    // Store the drawn pixels or shapes
    this.pixels = [];
  }
  return _createClass(CanvasRenderer, [{
    key: "render",
    value: function render() {
      var _this = this;
      this.ctx.imageSmoothingEnabled = false;
      this.ctx.clearRect(0, 0, this.canvasManager.canvas.width, this.canvasManager.canvas.height);

      // Re-draw all stored pixels
      this.pixels.forEach(function (pixel) {
        _this.ctx.fillStyle = pixel.color;
        _this.ctx.fillRect(pixel.x, pixel.y, 1, 1);
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      this.ctx.clearRect(0, 0, this.canvasManager.canvas.width, this.canvasManager.canvas.height);
      this.pixels = [];
    }
  }, {
    key: "drawPixel",
    value: function drawPixel(x, y, color) {
      var pushToPixels = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
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
        this.drawPixel(currentX, currentY, color, true);
      }
    }
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
        this.drawPixel(currentX, currentY, color, false);
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
    key: "getColorAtCoord",
    value: function getColorAtCoord(x, y) {
      var pixel = this.ctx.getImageData(x, y, 1, 1).data;
      return {
        r: pixel[0],
        g: pixel[1],
        b: pixel[2],
        a: pixel[3]
      };
    }
  }, {
    key: "colorsAreEqual",
    value: function colorsAreEqual(color1, color2) {
      var includeAlpha = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (includeAlpha) {
        return color1.r === color2.r && color1.g === color2.g && color1.b === color2.b && color1.a === color2.a;
      }
      return color1.r === color2.r && color1.g === color2.g && color1.b === color2.b;
    }
  }, {
    key: "floodFill",
    value: function floodFill(mouseX, mouseY, targetColor, fillColor) {
      var _this2 = this;
      var x = Math.floor(mouseX);
      var y = Math.floor(mouseY);
      var width = this.canvasManager.canvas.width;
      var height = this.canvasManager.canvas.height;
      var origWidth = this.canvasManager.getOrigWidth();
      var origHeight = this.canvasManager.getOrigHeight();

      // Create a temporary canvas at the current scale
      var tempCanvas = document.createElement('canvas');
      tempCanvas.width = width;
      tempCanvas.height = height;
      var tempCtx = tempCanvas.getContext('2d');

      // Copy the original canvas content to the temporary canvas
      tempCtx.drawImage(this.canvasManager.canvas, 0, 0, width, height);

      // Create a scaled-down canvas at the original scale
      var scaledDownCanvas = document.createElement('canvas');
      scaledDownCanvas.width = origWidth;
      scaledDownCanvas.height = origHeight;
      var scaledDownCtx = scaledDownCanvas.getContext('2d');

      // Scale the temporary canvas down to the original scale
      scaledDownCtx.drawImage(tempCanvas, 0, 0, width, height, 0, 0, scaledDownCanvas.width, scaledDownCanvas.height);

      // Get image data for pixel manipulation
      var imageData = scaledDownCtx.getImageData(0, 0, scaledDownCanvas.width, scaledDownCanvas.height);
      var data = imageData.data;
      var stack = [{
        x: x,
        y: y
      }];
      var visited = new Set();
      var getPixelColor = function getPixelColor(x, y) {
        var index = (y * scaledDownCanvas.width + x) * 4;
        return {
          r: data[index],
          g: data[index + 1],
          b: data[index + 2],
          a: data[index + 3]
        };
      };
      var setPixelColor = function setPixelColor(x, y, color) {
        var index = (y * scaledDownCanvas.width + x) * 4;
        data[index] = color.r;
        data[index + 1] = color.g;
        data[index + 2] = color.b;
        data[index + 3] = color.a;

        // Push the pixel data to this.pixels
        _this2.pixels.push({
          x: x,
          y: y,
          color: "rgba(".concat(color.r, ",").concat(color.g, ",").concat(color.b, ",").concat(color.a, ")")
        });
      };
      while (stack.length) {
        var _stack$pop = stack.pop(),
          _x = _stack$pop.x,
          _y = _stack$pop.y;
        if (_x < 0 || _y < 0 || _x >= scaledDownCanvas.width || _y >= scaledDownCanvas.height) {
          continue; // Skip if out of bounds
        }
        var key = "".concat(_x, ",").concat(_y);
        if (visited.has(key)) {
          continue; // Skip if already visited
        }
        visited.add(key);
        var currentColor = getPixelColor(_x, _y);

        // Skip if the current pixel is already filled with fillColor
        if (this.colorsAreEqual(currentColor, fillColor, true)) {
          continue;
        }

        // Fill if currentColor matches targetColor or if it's transparent
        if (this.colorsAreEqual(currentColor, targetColor, true) || currentColor.a === 0) {
          setPixelColor(_x, _y, fillColor);

          // Push adjacent pixels onto the stack
          stack.push({
            x: _x + 1,
            y: _y
          });
          stack.push({
            x: _x - 1,
            y: _y
          });
          stack.push({
            x: _x,
            y: _y + 1
          });
          stack.push({
            x: _x,
            y: _y - 1
          });
        }
      }

      // Update the image data on the scaled-down canvas
      scaledDownCtx.putImageData(imageData, 0, 0);

      // Transfer the filled area back to the original canvas
      this.canvasManager.ctx.drawImage(scaledDownCanvas, 0, 0);
    }
  }]);
}();

/***/ }),

/***/ "./src/js/middleCol/middleColEventHandler.js":
/*!***************************************************!*\
  !*** ./src/js/middleCol/middleColEventHandler.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MiddleColEventHandler: () => (/* binding */ MiddleColEventHandler)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Centralizes event listeners for user interactions, such as mouse clicks for elements in the mainCol.
 * 
 * The purpose of the mainCol is for centralizing actions related to the mainCanvas and bgCanvas.
 * This includes:
 * - Drawing on the canvas
 * - Zooming in on a point on the canvas
 * - Other canvas-related interactions
 */

var MiddleColEventHandler = /*#__PURE__*/function () {
  function MiddleColEventHandler(canvasManagers, canvasRenderers, leftCol, rightCol, topRow, colorManager) {
    _classCallCheck(this, MiddleColEventHandler);
    this.canvasManagers = canvasManagers;
    this.canvasRenderers = canvasRenderers;

    //Canvas
    this.canvasManager = this.canvasManagers[0];
    this.canvasRenderer = this.canvasRenderers[0];
    this.canvas = this.canvasManager.canvas;

    //Canvas Info
    this.xCoordInfo = document.getElementsByClassName('xCoord')[0];
    this.yCoordInfo = document.getElementsByClassName('yCoord')[0];
    this.zoomAmountInfo = document.getElementsByClassName('zoomAmount')[0];

    //BG Canvas
    this.bgManager = this.canvasManagers[1];
    this.bgRenderer = this.canvasRenderers[1];

    //Color Manager
    this.colorManager = colorManager;

    //Left Col (Tool Bar)
    this.toolbar = leftCol;
    this.selectedTool = null;

    //Right Col
    this.rightCol = rightCol;

    //Top Row (Settings Bar)
    this.settingsBar = topRow;
    this.scale = this.canvasManager.getScale();
    this.originalScale = this.canvasManager.getOrigScale();
    this.isDoing = false;
    this.drawPixel = false;
    this.erasePixel = false;
    this.lastX = null;
    this.lastY = null;
    this.startX = null;
    this.startY = null;
    this.prevX = 0;
    this.notZooming = true;
    this.zoomOut_ = false;
    this.zoomPoints = [];
    this.zoomFactor = 1;
    this.rounded = true;
  }
  return _createClass(MiddleColEventHandler, [{
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
      this.canvas.addEventListener('click', function (event) {
        return _this.onMouseClick(event);
      });
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      var isPopup = this.settingsBar.getStatus();
      if (!isPopup) {
        // Get the selected tool from the toolbar
        this.selectedTool = this.toolbar.currentTool; // This will return the selected tool function
        this.isDoing = true;
        var _this$getMousePositio = this.getMousePosition(event, this.rounded),
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
        } else if (this.selectedTool === 'line') {
          this.startLinePreview(x, y);
        }
      }
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      var isPopup = this.settingsBar.getStatus();
      if (!isPopup && this.isDoing) {
        var _this$getMousePositio2 = this.getMousePosition(event, this.rounded),
          x = _this$getMousePositio2.x,
          y = _this$getMousePositio2.y;

        // Perform drawing operations using the selected tool
        if (this.selectedTool === 'pencil') {
          //this.drawPixel = false;
          this.draw(this.lastX, this.lastY, x, y);
        } else if (this.selectedTool === 'eraser') {
          this.erase(this.lastX, this.lastY, x, y);
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
        var _this$getMousePositio3 = this.getMousePosition(event, this.rounded),
          x = _this$getMousePositio3.x,
          y = _this$getMousePositio3.y;
        this.commitLine(this.startX, this.startY, x, y);
      }
      this.isDoing = false;
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      if (this.selectedTool != 'line') {
        this.isDoing = false;
      }
    }
  }, {
    key: "onMouseClick",
    value: function onMouseClick(event) {
      if (this.selectedTool === 'fill') {
        this.rounded = false;
        var _this$getMousePositio4 = this.getMousePosition(event, this.rounded),
          x = _this$getMousePositio4.x,
          y = _this$getMousePositio4.y;
        this.fillArea(x, y);
        this.rounded = true;
      } else if (this.selectedTool === 'zoomIn') {
        this.zoomIn(event);
      } else if (this.selectedTool === 'zoomOut') {
        this.zoomOut(event);
      }
    }
  }, {
    key: "getMousePosition",
    value: function getMousePosition(event, rounded) {
      var rect = this.canvas.getBoundingClientRect();

      // Mouse coordinates relative to the canvas
      var x_canvas = event.clientX - rect.left;
      var y_canvas = event.clientY - rect.top;
      var x = x_canvas;
      var y = y_canvas;
      if (this.scale != this.originalScale) {
        x = x / this.scale;
        y = y / this.scale;
      }
      if (rounded == true) {
        x = Math.floor(x);
        y = Math.floor(y);
      }
      this.xCoordInfo.textContent = "X: ".concat(Math.floor(x));
      this.yCoordInfo.textContent = "Y: ".concat(Math.floor(y));
      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "draw",
    value: function draw(prevX, prevY, x, y) {
      var color = this.colorManager.getColor();
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
    value: function zoom(zf, event) {
      this.notZooming = false;
      var canvas = this.canvas;
      var MIN_SCALE = this.originalScale;
      var MAX_SCALE = 100;
      var prevScale = this.scale;
      var zoomFactor = zf;

      // Ensure the scale stays within the specified bounds
      var newScale = prevScale * zoomFactor;
      newScale = Math.min(Math.max(newScale, MIN_SCALE), MAX_SCALE);

      //Check if scale ratio is a whole number and if not zooming out
      var scaleRatio = newScale / prevScale;
      if (scaleRatio * 10 % 10 != 0 && this.zoomOut_ == false) {
        return;
      }

      // Update the scale property
      this.scale = newScale;
      var x, y;
      if (this.zoomOut_ == false) {
        this.zoomFactor = zoomFactor;
        // Get the cursor position relative to the canvas
        var rect = canvas.getBoundingClientRect();
        x = Math.floor(event.clientX - rect.left);
        y = Math.floor(event.clientY - rect.top);

        // Push the zoom point to the stack on zoom in
        if (zoomFactor > 1) {
          this.zoomPoints.push({
            x: x,
            y: y
          });
        }
      } else {
        if (this.zoomFactor > 1) {
          this.zoomFactor -= 1;
        }
        var _this$zoomPoints$pop = this.zoomPoints.pop(),
          zoomedX = _this$zoomPoints$pop.x,
          zoomedY = _this$zoomPoints$pop.y;
        x = zoomedX;
        y = zoomedY;
      }

      // Resize canvases based on newScale
      this.canvasManagers.forEach(function (manager) {
        manager.resize(newScale);
      });

      // Render all canvas renderers
      this.canvasRenderer.render();
      this.bgRenderer.render();

      // Scroll to mouse click on canvas
      this.scrollToClickedArea(event);
    }
  }, {
    key: "zoomIn",
    value: function zoomIn(event) {
      var zoomFactor = this.zoomFactor;
      this.zoom(zoomFactor + 1, event);
    }
  }, {
    key: "zoomOut",
    value: function zoomOut(event) {
      var zoomFactor = 1 / this.zoomFactor;
      if (this.zoomPoints.length > 0) {
        this.zoomOut_ = true;
        this.zoom(zoomFactor, event);
      }
      this.zoomOut_ = false;
    }

    //DEBUG LATER
  }, {
    key: "scrollToClickedArea",
    value: function scrollToClickedArea(event) {
      var canvasContainer = document.getElementsByClassName('canvasWrapper')[0]; // Replace with your canvas container ID or reference
      var containerRect = canvasContainer.getBoundingClientRect();

      // Get mouse position relative to the canvas
      var _this$getMousePositio5 = this.getMousePosition(event),
        x = _this$getMousePositio5.x,
        y = _this$getMousePositio5.y;

      // Calculate how much to scroll to make the clicked area visible
      var scrollX = x * this.scale - containerRect.width / 2;
      var scrollY = y * this.scale - containerRect.height / 2;
      console.log("Clicked Canvas X: ".concat(x, ", Y: ").concat(y));
      console.log("Scroll X: ".concat(scrollX, ", Scroll Y: ").concat(scrollY));

      // Scroll the container to the calculated position
      canvasContainer.scrollTo({
        left: scrollX * this.scale,
        top: scrollY * this.scale,
        behavior: 'smooth' // Optional: Use smooth scrolling
      });
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
      var color = this.colorManager.getColor();

      // Clear the canvas and redraw the previous image
      if (this.previewImage) {
        this.canvasRenderer.ctx.putImageData(this.previewImage, 0, 0);
      }
      this.canvasRenderer.drawLinePreview(startX, startY, endX, endY, color);
    }

    // Commit the final line to the canvas
  }, {
    key: "commitLine",
    value: function commitLine(startX, startY, endX, endY) {
      var color = this.colorManager.getColor();
      this.canvasRenderer.drawLine(startX, startY, endX, endY, color);
      startX = null;
      startY = null;
      this.previewImage = null;
    }
  }, {
    key: "fillArea",
    value: function fillArea(mouseX, mouseY) {
      var x = mouseX;
      var y = mouseY;
      var targetColor = this.canvasRenderer.getColorAtCoord(x, y);
      var colorString = this.colorManager.getColor();
      var rgbaValues = colorString.match(/\d+(\.\d+)?/g);
      var r = parseInt(rgbaValues[0]);
      var g = parseInt(rgbaValues[1]);
      var b = parseInt(rgbaValues[2]);
      var a = parseInt(rgbaValues[3]);
      var fillColor = {
        r: r,
        g: g,
        b: b,
        a: a
      };

      // Fill only if the target is not already the fill color
      if (!this.canvasRenderer.colorsAreEqual(targetColor, fillColor, true)) {
        this.canvasRenderer.floodFill(mouseX, mouseY, targetColor, fillColor);
      }
    }
  }]);
}();

/***/ }),

/***/ "./src/js/rightCol/colorPicker/colorPickerEventHandler.js":
/*!****************************************************************!*\
  !*** ./src/js/rightCol/colorPicker/colorPickerEventHandler.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorPickerEventHandler: () => (/* binding */ ColorPickerEventHandler)
/* harmony export */ });
/* harmony import */ var _assets_colorPicker_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/colorPicker.jpeg */ "./src/assets/colorPicker.jpeg");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var ColorPickerEventHandler = /*#__PURE__*/function () {
  function ColorPickerEventHandler(colorManager) {
    _classCallCheck(this, ColorPickerEventHandler);
    //Set the source of the image
    var cpImg = document.getElementById('colorPickerImg');
    cpImg.src = _assets_colorPicker_jpeg__WEBPACK_IMPORTED_MODULE_0__;

    //Initialize canvas and content
    this.canvas = document.getElementById('colorPickerCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.colorManager = colorManager;
    this.isPicking = false;
    this.addColorSwatchButton = document.getElementById('addColorSwatch');
    this.paletteContainer = document.querySelector('.palette-container');

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
      cpImg.style.maxWidth = "100%";
      cpImg.style.height = "auto";

      // Set canvas size to match the image
      this.canvas.width = cpImg.width;
      this.canvas.height = cpImg.height;
      this.canvas.style.maxWidth = "100%";
      this.canvas.style.height = "auto";

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
      var scaleX = this.canvas.width / rect.width;
      var scaleY = this.canvas.height / rect.height;
      var x = (event.clientX - rect.left) * scaleX;
      var y = (event.clientY - rect.top) * scaleY;
      var imageData = this.ctx.getImageData(x, y, 1, 1).data;
      var r = imageData[0];
      var g = imageData[1];
      var b = imageData[2];
      var a = imageData[3];
      var rgba = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
      var hex = this.rgbaToHex(r, g, b);
      this.colorManager.setColor(rgba);
      this.displayColor(hex, rgba);
    }
  }, {
    key: "rgbaToHex",
    value: function rgbaToHex(r, g, b) {
      var toHex = function toHex(n) {
        return n.toString(16).padStart(2, '0').toUpperCase();
      };
      var red = toHex(r);
      var green = toHex(g);
      var blue = toHex(b);
      return "#".concat(red).concat(green).concat(blue);
    }
  }, {
    key: "displayColor",
    value: function displayColor(hex, rgba) {
      var hexcode = document.getElementsByClassName('hexCode')[0];

      // Set the hex code and background color
      hexcode.style.backgroundColor = rgba;
      hexcode.textContent = hex;

      // Check if the RGBA color is too light
      var rgbValues = rgba.match(/\d+/g); // Extract RGB values
      var brightness = (parseInt(rgbValues[0]) * 299 + parseInt(rgbValues[1]) * 587 + parseInt(rgbValues[2]) * 114) / 1000; // Calculate brightness using a weighted formula

      // Set text color based on brightness
      if (brightness > 125) {
        // Adjust the threshold value as needed
        hexcode.style.color = 'black'; // Change text color to black
      } else {
        hexcode.style.color = 'white'; // Keep text color white
      }
    }
  }]);
}();

/***/ }),

/***/ "./src/js/rightCol/rightColEventHandler.js":
/*!*************************************************!*\
  !*** ./src/js/rightCol/rightColEventHandler.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RightColEventHandler: () => (/* binding */ RightColEventHandler)
/* harmony export */ });
/* harmony import */ var _colorPicker_colorPickerEventHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorPicker/colorPickerEventHandler */ "./src/js/rightCol/colorPicker/colorPickerEventHandler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var RightColEventHandler = /*#__PURE__*/function () {
  function RightColEventHandler(colorManager) {
    _classCallCheck(this, RightColEventHandler);
    this.colorManager = colorManager;
    this.init();
  }
  return _createClass(RightColEventHandler, [{
    key: "init",
    value: function init() {
      this.setUpColorPicker();
    }
  }, {
    key: "setUpColorPicker",
    value: function setUpColorPicker() {
      this.colorPickerEventHandler = new _colorPicker_colorPickerEventHandler__WEBPACK_IMPORTED_MODULE_0__.ColorPickerEventHandler(this.colorManager);
    }
  }]);
}();

/***/ }),

/***/ "./src/js/topRow/fileSettings/fileSettingsEventHandler.js":
/*!****************************************************************!*\
  !*** ./src/js/topRow/fileSettings/fileSettingsEventHandler.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileSettingsEventHandler: () => (/* binding */ FileSettingsEventHandler)
/* harmony export */ });
/* harmony import */ var _assets_clear_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/clear.png */ "./src/assets/clear.png");
/* harmony import */ var _assets_resize_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/resize.png */ "./src/assets/resize.png");
/* harmony import */ var _assets_export_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/export.png */ "./src/assets/export.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var FileSettingsEventHandler = /*#__PURE__*/function () {
  function FileSettingsEventHandler(canvasManager, canvasRenderer, bgManager, bgRenderer) {
    _classCallCheck(this, FileSettingsEventHandler);
    this.canvasManager = canvasManager;
    this.canvasRenderer = canvasRenderer;
    this.bgManager = bgManager;
    this.bgRenderer = bgRenderer;
    this.resizeButton = document.getElementsByClassName('resize')[0];
    this.clearButton = document.getElementsByClassName('clear')[0];
    this.exportButton = document.getElementsByClassName('export')[0];
    this.clearImg = document.getElementsByClassName('clearImg')[0];
    this.clearImg.src = _assets_clear_png__WEBPACK_IMPORTED_MODULE_0__;
    this.resizeImg = document.getElementsByClassName('resizeImg')[0];
    this.resizeImg.src = _assets_resize_png__WEBPACK_IMPORTED_MODULE_1__;
    this.exportImg = document.getElementsByClassName('exportImg')[0];
    this.exportImg.src = _assets_export_png__WEBPACK_IMPORTED_MODULE_2__;
    this.init();
  }
  return _createClass(FileSettingsEventHandler, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.resizeButton.addEventListener('click', function () {
        return _this.resizeCanvas();
      });
      this.clearButton.addEventListener('click', function () {
        return _this.clearCanvas(_this.canvasRenderer);
      });
      this.exportButton.addEventListener('click', function () {
        return _this.export();
      });
    }
  }, {
    key: "resizeCanvas",
    value: function resizeCanvas() {
      var _this2 = this;
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
          var _calculateBlocks = calculateBlocks(width, height),
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
  }, {
    key: "export",
    value: function _export() {
      var oldScale = this.canvasManager.scale;

      //Scale canvas down
      this.canvasManager.setScale(1);
      this.canvasRenderer.render();
      var canvas = this.canvasManager.canvas;
      var image = canvas.toDataURL('image/png');

      //Create a temporary link element
      var link = document.createElement('a');
      link.href = image;
      link.download = 'canvas-image.png'; //Alter here later to take file name that the user sets

      //Trigger the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      //Revert canvas back to old scale and rerender
      this.canvasManager.setScale(oldScale);
      this.canvasRenderer.render();
    }
  }]);
}();

/***/ }),

/***/ "./src/js/topRow/topRowEventHandler.js":
/*!*********************************************!*\
  !*** ./src/js/topRow/topRowEventHandler.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopRowEventHandler: () => (/* binding */ TopRowEventHandler)
/* harmony export */ });
/* harmony import */ var _assets_file_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/file.png */ "./src/assets/file.png");
/* harmony import */ var _assets_layer_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/layer.png */ "./src/assets/layer.png");
/* harmony import */ var _assets_setting_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/setting.png */ "./src/assets/setting.png");
/* harmony import */ var _assets_select_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/select.png */ "./src/assets/select.png");
/* harmony import */ var _fileSettings_fileSettingsEventHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fileSettings/fileSettingsEventHandler */ "./src/js/topRow/fileSettings/fileSettingsEventHandler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





var TopRowEventHandler = /*#__PURE__*/function () {
  function TopRowEventHandler(canvasManager, canvasRenderer, bgManager, bgRenderer) {
    _classCallCheck(this, TopRowEventHandler);
    this.canvasManager = canvasManager;
    this.canvasRenderer = canvasRenderer;
    this.bgManager = bgManager;
    this.bgRenderer = bgRenderer;
    this.disableCanvasActions = false;
    this.init();
  }
  return _createClass(TopRowEventHandler, [{
    key: "init",
    value: function init() {
      this.setUpEventHandlers(this.canvasManager, this.canvasRenderer, this.bgManager, this.bgRenderer);
    }
  }, {
    key: "setUpEventHandlers",
    value: function setUpEventHandlers() {
      this.fileSettingsEventHandler = new _fileSettings_fileSettingsEventHandler__WEBPACK_IMPORTED_MODULE_4__.FileSettingsEventHandler(this.canvasManager, this.canvasRenderer, this.bgManager, this.bgRenderer);
    }
  }, {
    key: "getStatus",
    value: function getStatus() {
      return this.disableCanvas;
    }
  }]);
}();

/***/ }),

/***/ "./src/js/utils/calculateBlocks.js":
/*!*****************************************!*\
  !*** ./src/js/utils/calculateBlocks.js ***!
  \*****************************************/
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

/***/ "./src/js/utils/colorManager.js":
/*!**************************************!*\
  !*** ./src/js/utils/colorManager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorManager: () => (/* binding */ ColorManager)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Manages the color for the program
 */

var ColorManager = /*#__PURE__*/function () {
  function ColorManager() {
    _classCallCheck(this, ColorManager);
    this.currentColor = 'rgba(0,0,0,255)'; // Default color
  }
  return _createClass(ColorManager, [{
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
___CSS_LOADER_EXPORT___.push([module.id, `/*=============== VARIABLES CSS ===============*/
:root {
    /*========== Colors ==========*/
    --white-color: #FFFFFF;

    /** CSS DARK THEME PRIMARY COLORS */
    --color-primary-100: #f1d217;
    --color-primary-200: #f5d741;
    --color-primary-300: #f8dc5e;
    --color-primary-400: #fae177;
    --color-primary-500: #fde58e;
    --color-primary-600: #feeaa5;
    /** CSS DARK THEME SURFACE COLORS */
    --color-surface-100: #121212;
    --color-surface-200: #282828;
    --color-surface-300: #3f3f3f;
    --color-surface-400: #575757;
    --color-surface-500: #717171;
    --color-surface-600: #8b8b8b;
    /** CSS DARK THEME MIXED SURFACE COLORS */
    --color-surface-mixed-100: #796a22;
    --color-surface-mixed-200: #88793a;
    --color-surface-mixed-300: #978951;
    --color-surface-mixed-400: #a69969;
    --color-surface-mixed-500: #b5a981;
    --color-surface-mixed-600: #c4ba99;
  
    /*========== Font and typography ==========*/
    --body-font: "Pixelify Sans", sans-serif;
    --biggest-font-size: 2.5rem;
    --h1-font-size: 2rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1.125rem;
    --normal-font-size: 1rem;
    --small-font-size: .813rem;
    --smaller-font-size: .75rem;
  
    /*========== Font weight ==========*/
    --font-regular: 400;
    --font-medium: 500;
    --font-semi-bold: 600;
    --font-bold: 700;
}

/*=============== BASE ===============*/
body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    font-family: var(--body-font);
    color: var(--white-color)
}

button {
    font-family: var(--body-font);
}

ul, p{
    margin-block-start: 0px;
    margin-block-end: 0px;
    padding-inline-start: 0px;
}

li {
    list-style-type: none;
}

h1 {
    font-weight: lighter;
    font-size: var(--h1-font-size);
    margin-block-start: 0px;
    margin-block-end: 0px;
}

h2 {
    font-weight: lighter;
    font-size: var(--h2-font-size);
    margin-block-start: 0px;
    margin-block-end: 0px;
}

canvas {
    overflow: scroll;
}

/*=============== HEADER ===============*/
#headerContainer {
    display: flex;
    background-color: var(--color-surface-300);
    flex: 0 0 auto;
    width: 100%;
    align-items: center;
}

.title {
    font-size: var(--h2-font-size);
    padding-right: 10px;
    padding-left: 1px;
    padding-top: 1px;
    padding-bottom: 1px;
}

.settingsBar {
    display: flex;
    gap: 10px; /* Adds space between buttons */
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropbtn {
    background-color: var(--color-primary-400);
    color: var(--color-surface-100);
    font-size: var(--normal-font-size);
    border: none;
    display: flex;
    align-items: center;
    gap: 2px;
}

.settingButton {
    display: flex;
    align-items: center;
    gap: 4px;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 3;
    font-size: var(--normal-font-size);
}

.dropdown-content div {
    color: black;
    padding: 4px;
    text-decoration: none;
}

.dropdown-content div:hover {
    background-color: #ddd;
}

.dropdown:hover .dropdown-content {
    cursor: pointer;
}

.dropdown:hover .dropbtn {
    background-color: var(--color-primary-100);
    cursor: pointer;
}



/*=============== MAIN ===============*/
.mainContainer{
    display: flex;
    flex: 1; /* Allow the container to grow and fill the available space */
}

/*=============== LEFT COLUMN ===============*/
.leftCol{
    background-color: var(--color-surface-300);
}

.toolBarList{
    width: 34px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.toolItem{
    background-color: var(--color-surface-mixed-200);
}

.toolButton{
    background-color: var(--color-primary-400);
    border: 1px solid var(--color-primary-400);
}

.toolButton:hover{
    background-color: var(--color-primary-100);
    border: 1px solid var(--color-primary-100);
    cursor: pointer;
}

.toolButton.selected {
    border: none;
    background-color:var(--color-primary-100);
}

/*=============== CENTER COLUMN ===============*/
.centerCol {
    display: flex;
    background-color: var(--color-surface-100);
    flex-grow: 1;
    flex-direction: column;
}

.canvasWrapper {
    position: relative;
    width: 640px;
    max-width: 1040px;
    height: 650px;
    max-height: 650px;
    overflow: auto;
    margin: auto;
}

#backgroundCanvas,
#pixelCanvas {
    position: absolute;
    image-rendering: pixelated;
}

#backgroundCanvas {
    z-index: 1;
}

#pixelCanvas {
    z-index: 2;
}

.canvasInfo {
    align-self: flex-end;
    margin-right: 20px;
    margin-bottom: 20px;
}


/*=============== RIGHT COLUMN ===============*/
.rightCol{
    background-color: var(--color-surface-300);
}

.colorPickerImg_Container{
    width: 200px;
    padding-left: 8px;
    padding-right: 10px;
}

.container{
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.colorPrompt{
    margin-block-start: 2px;
    margin-block-end: 2px;
}

.hexCode{
    color: var(--second-color);
}

.palette-container{
    background-color: var(--color-surface-200);
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.color-swatch{
    height: 20px;
    width: 20px;
}

/*=============== MODAL ===============*/
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 4; /* Sit on top */
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
    color: #121212;
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

.dimensions {
    padding-bottom: 10px;
}

.resizeWidthContainer{
    padding-bottom: 5px;
}

.resizeHeightContainer{
    padding-bottom: 12px;
}

.widthResize{
    padding-right: 6px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,gDAAgD;AAChD;IACI,+BAA+B;IAC/B,sBAAsB;;IAEtB,mCAAmC;IACnC,4BAA4B;IAC5B,4BAA4B;IAC5B,4BAA4B;IAC5B,4BAA4B;IAC5B,4BAA4B;IAC5B,4BAA4B;IAC5B,mCAAmC;IACnC,4BAA4B;IAC5B,4BAA4B;IAC5B,4BAA4B;IAC5B,4BAA4B;IAC5B,4BAA4B;IAC5B,4BAA4B;IAC5B,yCAAyC;IACzC,kCAAkC;IAClC,kCAAkC;IAClC,kCAAkC;IAClC,kCAAkC;IAClC,kCAAkC;IAClC,kCAAkC;;IAElC,4CAA4C;IAC5C,wCAAwC;IACxC,2BAA2B;IAC3B,oBAAoB;IACpB,uBAAuB;IACvB,wBAAwB;IACxB,wBAAwB;IACxB,0BAA0B;IAC1B,2BAA2B;;IAE3B,oCAAoC;IACpC,mBAAmB;IACnB,kBAAkB;IAClB,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA,uCAAuC;AACvC;IACI,SAAS;IACT,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,6BAA6B;IAC7B;AACJ;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,uBAAuB;IACvB,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,oBAAoB;IACpB,8BAA8B;IAC9B,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,oBAAoB;IACpB,8BAA8B;IAC9B,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;AACpB;;AAEA,yCAAyC;AACzC;IACI,aAAa;IACb,0CAA0C;IAC1C,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,SAAS,EAAE,+BAA+B;AAC9C;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,0CAA0C;IAC1C,+BAA+B;IAC/B,kCAAkC;IAClC,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,yBAAyB;IACzB,gBAAgB;IAChB,4CAA4C;IAC5C,UAAU;IACV,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,0CAA0C;IAC1C,eAAe;AACnB;;;;AAIA,uCAAuC;AACvC;IACI,aAAa;IACb,OAAO,EAAE,6DAA6D;AAC1E;;AAEA,8CAA8C;AAC9C;IACI,0CAA0C;AAC9C;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,gDAAgD;AACpD;;AAEA;IACI,0CAA0C;IAC1C,0CAA0C;AAC9C;;AAEA;IACI,0CAA0C;IAC1C,0CAA0C;IAC1C,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,yCAAyC;AAC7C;;AAEA,gDAAgD;AAChD;IACI,aAAa;IACb,0CAA0C;IAC1C,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,iBAAiB;IACjB,cAAc;IACd,YAAY;AAChB;;AAEA;;IAEI,kBAAkB;IAClB,0BAA0B;AAC9B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,mBAAmB;AACvB;;;AAGA,+CAA+C;AAC/C;IACI,0CAA0C;AAC9C;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,0CAA0C;IAC1C,aAAa;IACb,eAAe;IACf,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA,wCAAwC;AACxC;IACI,aAAa,EAAE,sBAAsB;IACrC,eAAe,EAAE,kBAAkB;IACnC,UAAU,EAAE,eAAe;IAC3B,OAAO;IACP,MAAM;IACN,WAAW,EAAE,eAAe;IAC5B,YAAY,EAAE,gBAAgB;IAC9B,cAAc,EAAE,4BAA4B;IAC5C,4BAA4B,EAAE,mBAAmB;IACjD,iCAAiC,EAAE,qBAAqB;IACxD,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,eAAe,EAAE,kCAAkC;IACnD,aAAa;IACb,sBAAsB;IACtB,UAAU,EAAE,oDAAoD;AACpE;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;;AAEA;;IAEI,YAAY;IACZ,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["/*=============== VARIABLES CSS ===============*/\n:root {\n    /*========== Colors ==========*/\n    --white-color: #FFFFFF;\n\n    /** CSS DARK THEME PRIMARY COLORS */\n    --color-primary-100: #f1d217;\n    --color-primary-200: #f5d741;\n    --color-primary-300: #f8dc5e;\n    --color-primary-400: #fae177;\n    --color-primary-500: #fde58e;\n    --color-primary-600: #feeaa5;\n    /** CSS DARK THEME SURFACE COLORS */\n    --color-surface-100: #121212;\n    --color-surface-200: #282828;\n    --color-surface-300: #3f3f3f;\n    --color-surface-400: #575757;\n    --color-surface-500: #717171;\n    --color-surface-600: #8b8b8b;\n    /** CSS DARK THEME MIXED SURFACE COLORS */\n    --color-surface-mixed-100: #796a22;\n    --color-surface-mixed-200: #88793a;\n    --color-surface-mixed-300: #978951;\n    --color-surface-mixed-400: #a69969;\n    --color-surface-mixed-500: #b5a981;\n    --color-surface-mixed-600: #c4ba99;\n  \n    /*========== Font and typography ==========*/\n    --body-font: \"Pixelify Sans\", sans-serif;\n    --biggest-font-size: 2.5rem;\n    --h1-font-size: 2rem;\n    --h2-font-size: 1.25rem;\n    --h3-font-size: 1.125rem;\n    --normal-font-size: 1rem;\n    --small-font-size: .813rem;\n    --smaller-font-size: .75rem;\n  \n    /*========== Font weight ==========*/\n    --font-regular: 400;\n    --font-medium: 500;\n    --font-semi-bold: 600;\n    --font-bold: 700;\n}\n\n/*=============== BASE ===============*/\nbody {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    font-family: var(--body-font);\n    color: var(--white-color)\n}\n\nbutton {\n    font-family: var(--body-font);\n}\n\nul, p{\n    margin-block-start: 0px;\n    margin-block-end: 0px;\n    padding-inline-start: 0px;\n}\n\nli {\n    list-style-type: none;\n}\n\nh1 {\n    font-weight: lighter;\n    font-size: var(--h1-font-size);\n    margin-block-start: 0px;\n    margin-block-end: 0px;\n}\n\nh2 {\n    font-weight: lighter;\n    font-size: var(--h2-font-size);\n    margin-block-start: 0px;\n    margin-block-end: 0px;\n}\n\ncanvas {\n    overflow: scroll;\n}\n\n/*=============== HEADER ===============*/\n#headerContainer {\n    display: flex;\n    background-color: var(--color-surface-300);\n    flex: 0 0 auto;\n    width: 100%;\n    align-items: center;\n}\n\n.title {\n    font-size: var(--h2-font-size);\n    padding-right: 10px;\n    padding-left: 1px;\n    padding-top: 1px;\n    padding-bottom: 1px;\n}\n\n.settingsBar {\n    display: flex;\n    gap: 10px; /* Adds space between buttons */\n}\n\n.dropdown {\n    position: relative;\n    display: inline-block;\n}\n\n.dropbtn {\n    background-color: var(--color-primary-400);\n    color: var(--color-surface-100);\n    font-size: var(--normal-font-size);\n    border: none;\n    display: flex;\n    align-items: center;\n    gap: 2px;\n}\n\n.settingButton {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 3;\n    font-size: var(--normal-font-size);\n}\n\n.dropdown-content div {\n    color: black;\n    padding: 4px;\n    text-decoration: none;\n}\n\n.dropdown-content div:hover {\n    background-color: #ddd;\n}\n\n.dropdown:hover .dropdown-content {\n    cursor: pointer;\n}\n\n.dropdown:hover .dropbtn {\n    background-color: var(--color-primary-100);\n    cursor: pointer;\n}\n\n\n\n/*=============== MAIN ===============*/\n.mainContainer{\n    display: flex;\n    flex: 1; /* Allow the container to grow and fill the available space */\n}\n\n/*=============== LEFT COLUMN ===============*/\n.leftCol{\n    background-color: var(--color-surface-300);\n}\n\n.toolBarList{\n    width: 34px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.toolItem{\n    background-color: var(--color-surface-mixed-200);\n}\n\n.toolButton{\n    background-color: var(--color-primary-400);\n    border: 1px solid var(--color-primary-400);\n}\n\n.toolButton:hover{\n    background-color: var(--color-primary-100);\n    border: 1px solid var(--color-primary-100);\n    cursor: pointer;\n}\n\n.toolButton.selected {\n    border: none;\n    background-color:var(--color-primary-100);\n}\n\n/*=============== CENTER COLUMN ===============*/\n.centerCol {\n    display: flex;\n    background-color: var(--color-surface-100);\n    flex-grow: 1;\n    flex-direction: column;\n}\n\n.canvasWrapper {\n    position: relative;\n    width: 640px;\n    max-width: 1040px;\n    height: 650px;\n    max-height: 650px;\n    overflow: auto;\n    margin: auto;\n}\n\n#backgroundCanvas,\n#pixelCanvas {\n    position: absolute;\n    image-rendering: pixelated;\n}\n\n#backgroundCanvas {\n    z-index: 1;\n}\n\n#pixelCanvas {\n    z-index: 2;\n}\n\n.canvasInfo {\n    align-self: flex-end;\n    margin-right: 20px;\n    margin-bottom: 20px;\n}\n\n\n/*=============== RIGHT COLUMN ===============*/\n.rightCol{\n    background-color: var(--color-surface-300);\n}\n\n.colorPickerImg_Container{\n    width: 200px;\n    padding-left: 8px;\n    padding-right: 10px;\n}\n\n.container{\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.colorPrompt{\n    margin-block-start: 2px;\n    margin-block-end: 2px;\n}\n\n.hexCode{\n    color: var(--second-color);\n}\n\n.palette-container{\n    background-color: var(--color-surface-200);\n    display: flex;\n    flex-wrap: wrap;\n    gap: 5px;\n}\n\n.color-swatch{\n    height: 20px;\n    width: 20px;\n}\n\n/*=============== MODAL ===============*/\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 4; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    padding-top: 60px;\n}\n\n.modal-content {\n    color: #121212;\n    background-color: #fefefe;\n    margin: 5% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n}\n\n.close-button {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n}\n\n.close-button:hover,\n.close-button:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.dimensions {\n    padding-bottom: 10px;\n}\n\n.resizeWidthContainer{\n    padding-bottom: 5px;\n}\n\n.resizeHeightContainer{\n    padding-bottom: 12px;\n}\n\n.widthResize{\n    padding-right: 6px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/export.png":
/*!*******************************!*\
  !*** ./src/assets/export.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/export.png";

/***/ }),

/***/ "./src/assets/file.png":
/*!*****************************!*\
  !*** ./src/assets/file.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/file.png";

/***/ }),

/***/ "./src/assets/fill-bucket.png":
/*!************************************!*\
  !*** ./src/assets/fill-bucket.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fill-bucket.png";

/***/ }),

/***/ "./src/assets/layer.png":
/*!******************************!*\
  !*** ./src/assets/layer.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/layer.png";

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

/***/ "./src/assets/select.png":
/*!*******************************!*\
  !*** ./src/assets/select.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/select.png";

/***/ }),

/***/ "./src/assets/setting.png":
/*!********************************!*\
  !*** ./src/assets/setting.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/setting.png";

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
/* harmony export */   IndexJS: () => (/* binding */ IndexJS)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _js_utils_calculateBlocks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/utils/calculateBlocks.js */ "./src/js/utils/calculateBlocks.js");
/* harmony import */ var _js_middleCol_bgCanvas_bgManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/middleCol/bgCanvas/bgManager.js */ "./src/js/middleCol/bgCanvas/bgManager.js");
/* harmony import */ var _js_middleCol_bgCanvas_bgRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/middleCol/bgCanvas/bgRenderer.js */ "./src/js/middleCol/bgCanvas/bgRenderer.js");
/* harmony import */ var _js_middleCol_mainCanvas_canvasManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/middleCol/mainCanvas/canvasManager.js */ "./src/js/middleCol/mainCanvas/canvasManager.js");
/* harmony import */ var _js_middleCol_mainCanvas_canvasRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/middleCol/mainCanvas/canvasRenderer.js */ "./src/js/middleCol/mainCanvas/canvasRenderer.js");
/* harmony import */ var _js_leftCol_leftColEventHandler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/leftCol/leftColEventHandler.js */ "./src/js/leftCol/leftColEventHandler.js");
/* harmony import */ var _js_rightCol_rightColEventHandler_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/rightCol/rightColEventHandler.js */ "./src/js/rightCol/rightColEventHandler.js");
/* harmony import */ var _js_topRow_topRowEventHandler_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/topRow/topRowEventHandler.js */ "./src/js/topRow/topRowEventHandler.js");
/* harmony import */ var _js_utils_colorManager_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/utils/colorManager.js */ "./src/js/utils/colorManager.js");
/* harmony import */ var _js_middleCol_middleColEventHandler_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/middleCol/middleColEventHandler.js */ "./src/js/middleCol/middleColEventHandler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }











var IndexJS = /*#__PURE__*/function () {
  function IndexJS() {
    _classCallCheck(this, IndexJS);
    var _calculateBlocks = (0,_js_utils_calculateBlocks_js__WEBPACK_IMPORTED_MODULE_1__.calculateBlocks)(256, 256),
      blocksX = _calculateBlocks.blocksX,
      blocksY = _calculateBlocks.blocksY; //Default size 32px by 32px
    this.blocksX = blocksX;
    this.blocksY = blocksY;
    this.blockSize = 16;
    this.scale = this.getScale();
    this.init();
  }
  return _createClass(IndexJS, [{
    key: "init",
    value: function init() {
      this.setupBackgroundCanvas();
      this.setupMainCanvas();
      this.setupColorManager();
      this.setupEventHandlers();
    }
  }, {
    key: "setupBackgroundCanvas",
    value: function setupBackgroundCanvas() {
      this.bgManager = new _js_middleCol_bgCanvas_bgManager_js__WEBPACK_IMPORTED_MODULE_2__.BGManager('backgroundCanvas', this.blocksX, this.blocksY, this.blockSize, this.scale);
      this.bgRenderer = new _js_middleCol_bgCanvas_bgRenderer_js__WEBPACK_IMPORTED_MODULE_3__.BGRenderer(this.bgManager);
      this.bgRenderer.render();
    }
  }, {
    key: "setupMainCanvas",
    value: function setupMainCanvas() {
      var pixelWidth = this.blocksX * this.blockSize;
      var pixelHeight = this.blocksY * this.blockSize;
      this.canvasManager = new _js_middleCol_mainCanvas_canvasManager_js__WEBPACK_IMPORTED_MODULE_4__.CanvasManager('pixelCanvas', pixelWidth, pixelHeight, this.scale);
      this.canvasRenderer = new _js_middleCol_mainCanvas_canvasRenderer_js__WEBPACK_IMPORTED_MODULE_5__.CanvasRenderer(this.canvasManager);
    }
  }, {
    key: "setupColorManager",
    value: function setupColorManager() {
      this.colorManager = new _js_utils_colorManager_js__WEBPACK_IMPORTED_MODULE_9__.ColorManager();
    }
  }, {
    key: "setupEventHandlers",
    value: function setupEventHandlers() {
      this.leftColEventHandler = new _js_leftCol_leftColEventHandler_js__WEBPACK_IMPORTED_MODULE_6__.LeftColEventHandler();
      this.rightColEventHandler = new _js_rightCol_rightColEventHandler_js__WEBPACK_IMPORTED_MODULE_7__.RightColEventHandler(this.colorManager);
      this.topRowEventHandler = new _js_topRow_topRowEventHandler_js__WEBPACK_IMPORTED_MODULE_8__.TopRowEventHandler(this.canvasManager, this.canvasRenderer, this.bgManager, this.bgRenderer);
      this.middleColEventHandler = new _js_middleCol_middleColEventHandler_js__WEBPACK_IMPORTED_MODULE_10__.MiddleColEventHandler([this.canvasManager, this.bgManager], [this.canvasRenderer, this.bgRenderer], this.leftColEventHandler, this.rightColEventHandler, this.topRowEventHandler, this.colorManager);
      this.init();
    }
  }, {
    key: "getScale",
    value: function getScale() {
      var container = document.querySelector('.canvasWrapper');
      var containerWidth = container.clientWidth;
      var containerHeight = container.clientHeight;
      var canvasWidth = this.blocksX * this.blockSize;
      var canvasHeight = this.blocksY * this.blockSize;
      var scaleX = containerWidth / canvasWidth;
      var scaleY = containerHeight / canvasHeight;
      var scale = Math.min(scaleX, scaleY); // Choose the smaller scale to fit within the container

      return Math.floor(scale);
    }
  }]);
}();
document.addEventListener('DOMContentLoaded', function () {
  var indexJS = new IndexJS();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle82f72efeddc53c87b4b7.js.map