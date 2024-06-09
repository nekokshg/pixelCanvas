/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/backgroundCanvas/bgCanvasManager.js":
/*!****************************************************!*\
  !*** ./src/js/backgroundCanvas/bgCanvasManager.js ***!
  \****************************************************/
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
  function BGCanvasManager(canvasId, width, height, scale) {
    _classCallCheck(this, BGCanvasManager);
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.scale = scale;
    this.canvas.width = width * scale;
    this.canvas.height = height * scale;
    this.ctx.scale(scale, scale);
  }
  return _createClass(BGCanvasManager, [{
    key: "getContext",
    value: function getContext() {
      return this.ctx;
    }
  }, {
    key: "clearCanvas",
    value: function clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width / this.scale, this.canvas.height / this.scale);
    }
  }]);
}();

/***/ }),

/***/ "./src/js/backgroundCanvas/bgCanvasRenderer.js":
/*!*****************************************************!*\
  !*** ./src/js/backgroundCanvas/bgCanvasRenderer.js ***!
  \*****************************************************/
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
  }
  return _createClass(BGCanvasRenderer, [{
    key: "renderBackground",
    value: function renderBackground() {
      var cellSize = 10; // Adjust the size of each cell as needed
      var rows = this.ctx.canvas.height / cellSize;
      var cols = this.ctx.canvas.width / cellSize;

      // Iterate over rows and columns
      for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
          // Alternate between grey and white cells
          var color = (i + j) % 2 === 0 ? '#FFFFFF' : '#CCCCCC'; // Adjust colors as needed

          // Draw the cell
          this.ctx.fillStyle = color;
          this.ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
        }
      }
    }
  }]);
}();

/***/ }),

/***/ "./src/js/canvas/canvasManager.js":
/*!****************************************!*\
  !*** ./src/js/canvas/canvasManager.js ***!
  \****************************************/
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
/* Responsible for initializing and managing the canvas element, including setting up size and scale */

var CanvasManager = /*#__PURE__*/function () {
  function CanvasManager(canvasId, width, height, scale) {
    _classCallCheck(this, CanvasManager);
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.scale = scale;
    this.canvas.width = width * scale;
    this.canvas.height = height * scale;
    this.ctx.scale(scale, scale);
  }
  return _createClass(CanvasManager, [{
    key: "getContext",
    value: function getContext() {
      return this.ctx;
    }
  }, {
    key: "clearCanvas",
    value: function clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width / this.scale, this.canvas.height / this.scale);
    }
  }]);
}();

/***/ }),

/***/ "./src/js/canvas/canvasRenderer.js":
/*!*****************************************!*\
  !*** ./src/js/canvas/canvasRenderer.js ***!
  \*****************************************/
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
/* Handles rendering operations on the canvas, such as drawing pixels, clearing the canvas, and managing layers */
var CanvasRenderer = /*#__PURE__*/function () {
  function CanvasRenderer(canvasManager) {
    _classCallCheck(this, CanvasRenderer);
    this.ctx = canvasManager.getContext();
  }
  return _createClass(CanvasRenderer, [{
    key: "drawPixel",
    value: function drawPixel(x, y, color) {
      this.ctx.fillStyle = color;
      this.ctx.fillRect(x, y, 1, 1); //Draw a filled rectangle (pixel) at position (x, y) whith width and height of 1
    }
  }, {
    key: "erasePixel",
    value: function erasePixel(x, y) {
      this.ctx.clearRect(x, y, 1, 1);
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* Centralizes event listeners for user interactions, such as mouse clicks and movements for pixelCanvas canvas element */


var CanvasEventHandler = /*#__PURE__*/function () {
  function CanvasEventHandler(canvasElement, canvasScale, toolbarEventHandler, canvasRenderer, colorPicker) {
    _classCallCheck(this, CanvasEventHandler);
    this.canvas = canvasElement;
    this.scale = canvasScale;
    this.isDoing = false;
    this.toolbar = toolbarEventHandler;
    this.selectedTool = null;
    this.canvasRenderer = canvasRenderer;
    this.colorPicker = colorPicker;
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
      }
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      if (this.isDoing) {
        var _this$getMousePositio2 = this.getMousePosition(event),
          x = _this$getMousePositio2.x,
          y = _this$getMousePositio2.y;

        // Perform drawing operations using the selected tool
        if (this.selectedTool === 'pencil') {
          this.drawWithPencil(x, y);
        } else if (this.selectedTool === 'eraser') {
          this.eraseWithEraser(x, y);
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
    this.pencilButton.src = _assets_pencil_png__WEBPACK_IMPORTED_MODULE_0__;
    this.eraserButton.src = _assets_eraser_png__WEBPACK_IMPORTED_MODULE_1__;

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
    }
  }, {
    key: "selectTool",
    value: function selectTool(newTool) {
      this.currentTool = newTool;
      alert(this.currentTool);
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
___CSS_LOADER_EXPORT___.push([module.id, `
#pixelCanvas{
    border: 4px dotted black;
}

#backgroundCanvas, #pixelCanvas {
    position: absolute;
    top: 0;
    left: 0;
}

#backgroundCanvas {
    z-index: 1; /* Lower z-index for background canvas */
}

#pixelCanvas {
    z-index: 2; /* Higher z-index for pixel canvas */
}

.colorBox{
    width: 10px;
    height: 10px;
    border: 4px dotted black;
    
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;AACX;;AAEA;IACI,UAAU,EAAE,wCAAwC;AACxD;;AAEA;IACI,UAAU,EAAE,oCAAoC;AACpD;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,wBAAwB;;AAE5B","sourcesContent":["\n#pixelCanvas{\n    border: 4px dotted black;\n}\n\n#backgroundCanvas, #pixelCanvas {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n#backgroundCanvas {\n    z-index: 1; /* Lower z-index for background canvas */\n}\n\n#pixelCanvas {\n    z-index: 2; /* Higher z-index for pixel canvas */\n}\n\n.colorBox{\n    width: 10px;\n    height: 10px;\n    border: 4px dotted black;\n    \n}"],"sourceRoot":""}]);
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _js_backgroundCanvas_bgCanvasManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/backgroundCanvas/bgCanvasManager.js */ "./src/js/backgroundCanvas/bgCanvasManager.js");
/* harmony import */ var _js_backgroundCanvas_bgCanvasRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/backgroundCanvas/bgCanvasRenderer.js */ "./src/js/backgroundCanvas/bgCanvasRenderer.js");
/* harmony import */ var _js_canvas_canvasManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/canvas/canvasManager.js */ "./src/js/canvas/canvasManager.js");
/* harmony import */ var _js_canvas_canvasRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/canvas/canvasRenderer.js */ "./src/js/canvas/canvasRenderer.js");
/* harmony import */ var _js_color_colorPicker_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/color/colorPicker.js */ "./src/js/color/colorPicker.js");
/* harmony import */ var _js_events_canvasEventHandler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/events/canvasEventHandler.js */ "./src/js/events/canvasEventHandler.js");
/* harmony import */ var _js_events_colorPickerEventHandler_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/events/colorPickerEventHandler.js */ "./src/js/events/colorPickerEventHandler.js");
/* harmony import */ var _js_events_toolBarEventHandler_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/events/toolBarEventHandler.js */ "./src/js/events/toolBarEventHandler.js");
/* Initializes the app, sets up modules, and orchestrates interactions between them */










document.addEventListener('DOMContentLoaded', function () {
  var bgManager = new _js_backgroundCanvas_bgCanvasManager_js__WEBPACK_IMPORTED_MODULE_1__.BGCanvasManager('backgroundCanvas', 32, 32, 30);
  var bgRenderer = new _js_backgroundCanvas_bgCanvasRenderer_js__WEBPACK_IMPORTED_MODULE_2__.BGCanvasRenderer(bgManager);
  var canvasManager = new _js_canvas_canvasManager_js__WEBPACK_IMPORTED_MODULE_3__.CanvasManager('pixelCanvas', 32, 32, 30);
  var canvasRenderer = new _js_canvas_canvasRenderer_js__WEBPACK_IMPORTED_MODULE_4__.CanvasRenderer(canvasManager);
  var colorPicker = new _js_color_colorPicker_js__WEBPACK_IMPORTED_MODULE_5__.ColorPicker();
  var colorPickerEventHandler = new _js_events_colorPickerEventHandler_js__WEBPACK_IMPORTED_MODULE_7__.ColorPickerEventHandler(colorPicker);
  var toolbar = new _js_events_toolBarEventHandler_js__WEBPACK_IMPORTED_MODULE_8__.ToolbarEventHandler();
  var canvasEventHandler = new _js_events_canvasEventHandler_js__WEBPACK_IMPORTED_MODULE_6__.CanvasEventHandler(canvasManager.canvas, canvasManager.scale, toolbar, canvasRenderer, colorPicker);

  // Call the init() method to initialize canvas event listeners
  canvasEventHandler.init();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle9eced9e4252fa8b29e04.js.map