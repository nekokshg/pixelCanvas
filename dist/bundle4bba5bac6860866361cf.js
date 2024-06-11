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
      var rows = this.ctx.canvas.height / this.cellSize;
      var cols = this.ctx.canvas.width / this.cellSize;
      for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
          var color = (i + j) % 2 === 0 ? '#FFFFFF' : '#CCCCCC';
          this.ctx.fillStyle = color;
          this.ctx.fillRect(j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize);
        }
      }
    }
  }]);
}();

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
    key: "clearCanvas",
    value: function clearCanvas() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "setScale",
    value: function setScale(scale) {
      this.scale = scale;
      console.log(this);
      console.log(this.scale);
      this.updateCanvasSize();
    }
  }, {
    key: "updateCanvasSize",
    value: function updateCanvasSize() {
      var _this$canvas = this.canvas,
        width = _this$canvas.width,
        height = _this$canvas.height;

      // Store the current canvas content
      var imageData = this.ctx.getImageData(0, 0, width, height);

      // Adjust the canvas size based on the scale
      this.canvas.width = this.width * this.scale;
      this.canvas.height = this.height * this.scale;

      // Clear the canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Apply the scaling transformation directly to the main canvas context
      this.ctx.scale(this.scale, this.scale);

      // Draw the scaled image data back to the main canvas
      this.ctx.putImageData(imageData, 0, 0);
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
      var roundedX = Math.round(x); // Round the coordinates to ensure they align with pixel boundaries
      var roundedY = Math.round(y);
      this.erasePixel(roundedX, roundedY);
      this.ctx.fillStyle = color;
      this.ctx.fillRect(roundedX, roundedY, 1, 1); // Draw a filled rectangle (pixel) at rounded coordinates

      this.pixels.push({
        x: roundedX,
        y: roundedY,
        color: color
      });
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
    key: "render",
    value: function render() {
      var _this = this;
      // Clear the entire canvas
      //this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

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
/* harmony import */ var _tools_pencilTool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/pencilTool */ "./src/js/tools/pencilTool.js");
/* harmony import */ var _tools_eraserTool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/eraserTool */ "./src/js/tools/eraserTool.js");
/* harmony import */ var _tools_zoomTool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/zoomTool */ "./src/js/tools/zoomTool.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* Centralizes event listeners for user interactions, such as mouse clicks and movements for pixelCanvas canvas element */



var CanvasEventHandler = /*#__PURE__*/function () {
  function CanvasEventHandler(canvas, canvasManagers, canvasRenderers, toolbar, colorPicker) {
    _classCallCheck(this, CanvasEventHandler);
    this.canvasManagers = canvasManagers;
    this.canvasRenderers = canvasRenderers;

    //Canvas
    this.canvasManager = this.canvasManagers[0];
    this.canvasRenderer = this.canvasRenderers[0];
    this.canvas = canvas;

    //BG Canvas
    this.bgManager = this.canvasManagers[1];
    this.bgRenderer = this.canvasRenderers[1];

    //Tool Bar
    this.toolbar = toolbar;
    this.selectedTool = null;
    this.zoomFactor = 1.2;

    //Color Picker
    this.colorPicker = colorPicker;
    this.scale = this.canvasManager.scale;
    this.isDoing = false;
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
      this.canvas.addEventListener('mouseup', function () {
        return _this.onMouseUp();
      });
      this.canvas.addEventListener('mouseleave', function () {
        return _this.onMouseLeave();
      });
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      // Get the selected tool from the toolbar
      this.selectedTool = this.toolbar.currentTool; // This will return the selected tool function
      this.isDoing = true;
      var _this$getMousePositio = this.getMousePosition(event),
        x = _this$getMousePositio.x,
        y = _this$getMousePositio.y;

      // Perform drawing operations using the selected tool
      if (this.selectedTool === 'pencil') {
        this.drawWithPencil(x, y);
      } else if (this.selectedTool === 'eraser') {
        this.eraseWithEraser(x, y);
      } else if (this.selectedTool === 'zoomIn') {
        this.zoomIn(x, y);
      } else if (this.selectedTool === 'zoomOut') {
        this.zoomOut(x, y);
      }
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      alert('here');
      if (this.isDoing) {
        var _this$getMousePositio2 = this.getMousePosition(event),
          x = _this$getMousePositio2.x,
          y = _this$getMousePositio2.y;

        // Perform drawing operations using the selected tool
        if (this.selectedTool === 'pencil') {
          this.drawWithPencil(x, y);
        } else if (this.selectedTool === 'eraser') {
          this.eraseWithEraser(x, y);
        } else if (this.selectedTool === 'zoomIn') {
          this.zoomIn(x, y);
        } else if (this.selectedTool === 'zoomOut') {
          this.zoomOut(x, y);
        }
      }
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
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
      console.log("Mouse: ".concat(x, ",").concat(y));
      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "drawWithPencil",
    value: function drawWithPencil(x, y) {
      var pencilTool = new _tools_pencilTool__WEBPACK_IMPORTED_MODULE_0__.PencilTool(this.canvasRenderer, this.colorPicker);
      pencilTool.draw(x, y);
    }
  }, {
    key: "eraseWithEraser",
    value: function eraseWithEraser(x, y) {
      var eraserTool = new _tools_eraserTool__WEBPACK_IMPORTED_MODULE_1__.EraserTool(this.canvasRenderer);
      eraserTool.erase(x, y);
    }
  }, {
    key: "zoomIn",
    value: function zoomIn(x, y) {
      var zoomTool = new _tools_zoomTool__WEBPACK_IMPORTED_MODULE_2__.ZoomTool(this.zoomFactor, this.scale, this.canvasManagers, this.canvasRenderers);
      this.scale = zoomTool.zoom(x, y);
    }
  }, {
    key: "zoomOut",
    value: function zoomOut(x, y) {
      var zoomTool = new _tools_zoomTool__WEBPACK_IMPORTED_MODULE_2__.ZoomTool(1 / this.zoomFactor, this.scale, this.canvasManagers, this.canvasRenderers);
      this.scale = zoomTool.zoom(x, y);
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
    this.pencilButton.src = _assets_pencil_png__WEBPACK_IMPORTED_MODULE_0__;
    this.eraserButton.src = _assets_eraser_png__WEBPACK_IMPORTED_MODULE_1__;
    this.zoomInButton.src = _assets_zoom_in_png__WEBPACK_IMPORTED_MODULE_2__;
    this.zoomOutButton.src = _assets_zoom_out_png__WEBPACK_IMPORTED_MODULE_3__;

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

/***/ "./src/js/tools/eraserTool.js":
/*!************************************!*\
  !*** ./src/js/tools/eraserTool.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EraserTool: () => (/* binding */ EraserTool)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* Contains logic for eraser tool */

var EraserTool = /*#__PURE__*/function () {
  function EraserTool(canvasRenderer) {
    _classCallCheck(this, EraserTool);
    this.canvasRenderer = canvasRenderer;
  }
  return _createClass(EraserTool, [{
    key: "erase",
    value: function erase(x, y) {
      this.canvasRenderer.erasePixel(x, y);
    }
  }]);
}();

/***/ }),

/***/ "./src/js/tools/pencilTool.js":
/*!************************************!*\
  !*** ./src/js/tools/pencilTool.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PencilTool: () => (/* binding */ PencilTool)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* Contains logic for the pencil tool, allowing the user to draw on the canvas */
var PencilTool = /*#__PURE__*/function () {
  function PencilTool(canvasRenderer, colorPicker) {
    _classCallCheck(this, PencilTool);
    this.canvasRenderer = canvasRenderer;
    this.colorPicker = colorPicker;
  }
  return _createClass(PencilTool, [{
    key: "draw",
    value: function draw(x, y) {
      var color = this.colorPicker.getColor();
      this.canvasRenderer.drawPixel(x, y, color);
    }
  }]);
}();

/***/ }),

/***/ "./src/js/tools/zoomTool.js":
/*!**********************************!*\
  !*** ./src/js/tools/zoomTool.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZoomTool: () => (/* binding */ ZoomTool)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* Contains logic for the zoom tool, contains the zoom logic for both zoomIn and zoomOut */
var ZoomTool = /*#__PURE__*/function () {
  function ZoomTool(zoomFactor, currScale, canvasManagers, canvasRenderers) {
    _classCallCheck(this, ZoomTool);
    this.zoomFactor = zoomFactor;
    this.currScale = currScale;
    this.canvasManagers = canvasManagers;
    this.canvasRenderers = canvasRenderers;
    this.originX = 0;
    this.originY = 0;
  }
  return _createClass(ZoomTool, [{
    key: "zoom",
    value: function zoom(x, y) {
      var _this = this;
      var mouseX = x;
      var mouseY = y;

      //Calculate new scale and visible origin
      var newScale = Math.ceil(currScale * zoomFactor);
      var newOriginX = mouseX / newScale - mouseX / currScale + this.originX;
      var newOriginY = mouseY / newScale - mouseY / currScale + this.originY;

      //Apply transformations
      this.canvasRenderers.forEach(function (renderer) {
        renderer.ctx.translate(newOriginX - _this.originX, newOriginY - _this.originY);
        renderer.ctx.scale(zoomFactor, zoomFactor);
        renderer.ctx.translate(-newOriginX, -newOriginY);
      });

      //Update scale and resize canvas
      this.canvasManagers.forEach(function (manager) {
        manager.setScale(newScale);
      });

      //Re-render canvases
      this.canvasRenderers.forEach(function (renderer) {
        renderer.render();
      });

      //Update origin and return scale
      this.originX = newOriginX;
      this.originY = newOriginY;
      return newScale;
    }
  }]);
}();

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

/***/ "./src/assets/pencil.png":
/*!*******************************!*\
  !*** ./src/assets/pencil.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/pencil.png";

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
/******/ 			// no module.id needed
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
/* harmony import */ var _js_canvas_backgroundCanvas_bgCanvasManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/canvas/backgroundCanvas/bgCanvasManager.js */ "./src/js/canvas/backgroundCanvas/bgCanvasManager.js");
/* harmony import */ var _js_canvas_backgroundCanvas_bgCanvasRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/canvas/backgroundCanvas/bgCanvasRenderer.js */ "./src/js/canvas/backgroundCanvas/bgCanvasRenderer.js");
/* harmony import */ var _js_canvas_mainCanvas_canvasManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/canvas/mainCanvas/canvasManager.js */ "./src/js/canvas/mainCanvas/canvasManager.js");
/* harmony import */ var _js_canvas_mainCanvas_canvasRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/canvas/mainCanvas/canvasRenderer.js */ "./src/js/canvas/mainCanvas/canvasRenderer.js");
/* harmony import */ var _js_color_colorPicker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/color/colorPicker.js */ "./src/js/color/colorPicker.js");
/* harmony import */ var _js_events_canvasEventHandler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/events/canvasEventHandler.js */ "./src/js/events/canvasEventHandler.js");
/* harmony import */ var _js_events_colorPickerEventHandler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/events/colorPickerEventHandler.js */ "./src/js/events/colorPickerEventHandler.js");
/* harmony import */ var _js_events_toolBarEventHandler_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/events/toolBarEventHandler.js */ "./src/js/events/toolBarEventHandler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }








var MainCanvasController = /*#__PURE__*/function () {
  function MainCanvasController() {
    _classCallCheck(this, MainCanvasController);
    this.blocksX = 2;
    this.blocksY = 2;
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
      this.bgManager = new _js_canvas_backgroundCanvas_bgCanvasManager_js__WEBPACK_IMPORTED_MODULE_0__.BGCanvasManager('backgroundCanvas', this.blocksX, this.blocksY, this.blockSize, 1);
      this.bgRenderer = new _js_canvas_backgroundCanvas_bgCanvasRenderer_js__WEBPACK_IMPORTED_MODULE_1__.BGCanvasRenderer(this.bgManager);
      this.bgRenderer.render();
    }
  }, {
    key: "setupMainCanvas",
    value: function setupMainCanvas() {
      var pixelWidth = this.blocksX * this.blockSize;
      var pixelHeight = this.blocksY * this.blockSize;
      this.canvasManager = new _js_canvas_mainCanvas_canvasManager_js__WEBPACK_IMPORTED_MODULE_2__.CanvasManager('pixelCanvas', pixelWidth, pixelHeight, 1);
      this.canvasRenderer = new _js_canvas_mainCanvas_canvasRenderer_js__WEBPACK_IMPORTED_MODULE_3__.CanvasRenderer(this.canvasManager);
    }
  }, {
    key: "setupEventHandlers",
    value: function setupEventHandlers() {
      this.colorPicker = new _js_color_colorPicker_js__WEBPACK_IMPORTED_MODULE_4__.ColorPicker();
      this.colorPickerEventHandler = new _js_events_colorPickerEventHandler_js__WEBPACK_IMPORTED_MODULE_6__.ColorPickerEventHandler(this.colorPicker);
      this.toolbarEventHandler = new _js_events_toolBarEventHandler_js__WEBPACK_IMPORTED_MODULE_7__.ToolbarEventHandler();
      this.canvasEventHandler = new _js_events_canvasEventHandler_js__WEBPACK_IMPORTED_MODULE_5__.CanvasEventHandler(this.canvasManager.canvas, [this.canvasManager, this.bgManager], [this.canvasRenderer, this.bgRenderer], this.toolbarEventHandler, this.colorPicker);
      this.canvasEventHandler.init();
    }
  }]);
}();
document.addEventListener('DOMContentLoaded', function () {
  var mainCanvasController = new MainCanvasController();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle4bba5bac6860866361cf.js.map