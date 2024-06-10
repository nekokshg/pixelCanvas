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
  function BGCanvasManager(canvasId, width, height, cellSize) {
    _classCallCheck(this, BGCanvasManager);
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.cellSize = cellSize;
    this.canvas.width = width * cellSize;
    this.canvas.height = height * cellSize;
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
      this.canvas.width = this.canvas.width / this.ctx.getTransform().a * scale;
      this.canvas.height = this.canvas.height / this.ctx.getTransform().d * scale;
      this.ctx.setTransform(scale, 0, 0, scale, 0, 0);
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
/* harmony export */   BGCanvasManager: () => (/* binding */ BGCanvasManager)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var BGCanvasManager = /*#__PURE__*/function () {
  function BGCanvasManager(canvasId, width, height, cellSize) {
    _classCallCheck(this, BGCanvasManager);
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.cellSize = cellSize;
    this.width = width;
    this.height = height;
    this.scale = 1;
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
      this.ctx.setTransform(scale, 0, 0, scale, 0, 0);
    }
  }, {
    key: "updateCanvasSize",
    value: function updateCanvasSize() {
      this.canvas.width = this.width * this.cellSize * this.scale;
      this.canvas.height = this.height * this.cellSize * this.scale;
    }
  }]);
}();

/***/ }),

/***/ "./src/js/canvas/canvasUtils.js":
/*!**************************************!*\
  !*** ./src/js/canvas/canvasUtils.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CanvasUtils: () => (/* binding */ CanvasUtils)
/* harmony export */ });
/* harmony import */ var _assets_zoom_in_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/zoom-in.png */ "./src/assets/zoom-in.png");
/* harmony import */ var _assets_zoom_out_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/zoom-out.png */ "./src/assets/zoom-out.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* Common functionalities (i.e. resizing) */


var CanvasUtils = /*#__PURE__*/function () {
  function CanvasUtils(canvasManagers) {
    var _this = this;
    _classCallCheck(this, CanvasUtils);
    // Set the source of the image
    this.ziImg = document.getElementsByClassName('zoomIn')[0];
    this.ziImg.src = _assets_zoom_in_png__WEBPACK_IMPORTED_MODULE_0__;
    this.zoImg = document.getElementsByClassName('zoomOut')[0];
    this.zoImg.src = _assets_zoom_out_png__WEBPACK_IMPORTED_MODULE_1__;
    this.canvasManagers = canvasManagers;

    // Event listeners
    this.ziImg.addEventListener('click', function () {
      return _this.zoomIn();
    });
    this.zoImg.addEventListener('click', function () {
      return _this.zoomOut();
    });
  }
  return _createClass(CanvasUtils, [{
    key: "zoomIn",
    value: function zoomIn() {
      this.setScale(this.canvasManagers[0].scale * 1.2);
    }
  }, {
    key: "zoomOut",
    value: function zoomOut() {
      this.setScale(this.canvasManagers[0].scale / 1.2);
    }
  }, {
    key: "setScale",
    value: function setScale(scale) {
      this.canvasManagers.forEach(function (manager) {
        return manager.setScale(scale);
      });
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
      this.ctx.clearRect(0, 0, this.canvas.width / this.scale, this.canvas.height / this.scale);
    }
  }, {
    key: "setScale",
    value: function setScale(scale) {
      this.scale = scale;
      this.updateCanvasSize();
      this.ctx.setTransform(scale, 0, 0, scale, 0, 0);
    }
  }, {
    key: "updateCanvasSize",
    value: function updateCanvasSize() {
      this.canvas.width = this.width * this.scale;
      this.canvas.height = this.height * this.scale;
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
    this.ctx = canvasManager.getContext();
    this.cellSize = canvasManager.cellSize;
  }
  return _createClass(CanvasRenderer, [{
    key: "drawPixel",
    value: function drawPixel(x, y, color) {
      this.ctx.fillStyle = color;
      this.ctx.fillRect(x, y, 1, 1); // Draw a filled rectangle (pixel) at position (x, y) with width and height of 1
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

/***/ "./src/js/mainCanvasController.js":
/*!****************************************!*\
  !*** ./src/js/mainCanvasController.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainCanvasController: () => (/* binding */ MainCanvasController)
/* harmony export */ });
/* harmony import */ var _canvas_backgroundCanvas_bgCanvasManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas/backgroundCanvas/bgCanvasManager.js */ "./src/js/canvas/backgroundCanvas/bgCanvasManager.js");
/* harmony import */ var _canvas_backgroundCanvas_bgCanvasRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas/backgroundCanvas/bgCanvasRenderer.js */ "./src/js/canvas/backgroundCanvas/bgCanvasRenderer.js");
/* harmony import */ var _canvas_mainCanvas_canvasManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas/mainCanvas/canvasManager.js */ "./src/js/canvas/mainCanvas/canvasManager.js");
/* harmony import */ var _canvas_mainCanvas_canvasRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvas/mainCanvas/canvasRenderer.js */ "./src/js/canvas/mainCanvas/canvasRenderer.js");
/* harmony import */ var _color_colorPicker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color/colorPicker.js */ "./src/js/color/colorPicker.js");
/* harmony import */ var _events_canvasEventHandler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/canvasEventHandler.js */ "./src/js/events/canvasEventHandler.js");
/* harmony import */ var _events_colorPickerEventHandler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/colorPickerEventHandler.js */ "./src/js/events/colorPickerEventHandler.js");
/* harmony import */ var _events_toolBarEventHandler_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events/toolBarEventHandler.js */ "./src/js/events/toolBarEventHandler.js");
/* harmony import */ var _canvas_canvasUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./canvas/canvasUtils.js */ "./src/js/canvas/canvasUtils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* Coordinates between both canvases */









var MainCanvasController = /*#__PURE__*/function () {
  function MainCanvasController() {
    _classCallCheck(this, MainCanvasController);
    this.blocksX = 4; // Number of blocks along x-axis
    this.blocksY = 4; // Number of blocks along y-axis
    this.blockSize = 16; // Size of each block

    this.init();
  }
  return _createClass(MainCanvasController, [{
    key: "init",
    value: function init() {
      this.setupBackgroundCanvas();
      this.setupMainCanvas();
      this.setupCanvasUtils();
      this.setupEventHandlers();
    }
  }, {
    key: "setupBackgroundCanvas",
    value: function setupBackgroundCanvas() {
      this.bgManager = new _canvas_backgroundCanvas_bgCanvasManager_js__WEBPACK_IMPORTED_MODULE_0__.BGCanvasManager('backgroundCanvas', this.blocksX, this.blocksY, this.blockSize);
      this.bgRenderer = new _canvas_backgroundCanvas_bgCanvasRenderer_js__WEBPACK_IMPORTED_MODULE_1__.BGCanvasRenderer(this.bgManager);
      this.bgRenderer.renderBackground();
    }
  }, {
    key: "setupMainCanvas",
    value: function setupMainCanvas() {
      var pixelWidth = this.blocksX * this.blockSize;
      var pixelHeight = this.blocksY * this.blockSize;
      this.canvasManager = new _canvas_mainCanvas_canvasManager_js__WEBPACK_IMPORTED_MODULE_2__.CanvasManager('pixelCanvas', pixelWidth, pixelHeight, 1);
      this.canvasRenderer = new _canvas_mainCanvas_canvasRenderer_js__WEBPACK_IMPORTED_MODULE_3__.CanvasRenderer(this.canvasManager);
    }
  }, {
    key: "setupCanvasUtils",
    value: function setupCanvasUtils() {
      this.canvasUtils = new _canvas_canvasUtils_js__WEBPACK_IMPORTED_MODULE_8__.CanvasUtils([this.bgManager, this.canvasManager]);
    }
  }, {
    key: "setupEventHandlers",
    value: function setupEventHandlers() {
      this.colorPicker = new _color_colorPicker_js__WEBPACK_IMPORTED_MODULE_4__.ColorPicker();
      this.colorPickerEventHandler = new _events_colorPickerEventHandler_js__WEBPACK_IMPORTED_MODULE_6__.ColorPickerEventHandler(this.colorPicker);
      this.toolbar = new _events_toolBarEventHandler_js__WEBPACK_IMPORTED_MODULE_7__.ToolbarEventHandler();
      this.canvasEventHandler = new _events_canvasEventHandler_js__WEBPACK_IMPORTED_MODULE_5__.CanvasEventHandler(this.canvasManager.canvas, 1, this.toolbar, this.canvasRenderer, this.colorPicker);
      this.canvasEventHandler.init();
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
/* harmony import */ var _js_mainCanvasController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/mainCanvasController.js */ "./src/js/mainCanvasController.js");

document.addEventListener('DOMContentLoaded', function () {
  // Instantiate the MainCanvasController which handles all canvas related initializations
  var mainCanvasController = new _js_mainCanvasController_js__WEBPACK_IMPORTED_MODULE_0__.MainCanvasController();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle911d81c8472c083ba52e.js.map