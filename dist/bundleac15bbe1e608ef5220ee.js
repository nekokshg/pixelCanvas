/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* Manages the color selection logic and UI for choosing colors */
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
  function CanvasEventHandler(canvasElement) {
    _classCallCheck(this, CanvasEventHandler);
    this.canvas = canvasElement;
    this.isDrawing = false;
  }
  return _createClass(CanvasEventHandler, [{
    key: "init",
    value: function init(pencilTool) {
      var _this = this;
      this.canvas.addEventListener('mousedown', function (event) {
        return _this.onMouseDown(event, pencilTool);
      });
      this.canvas.addEventListener('mousemove', function (event) {
        return _this.onMouseMove(event, pencilTool);
      });
      this.canvas.addEventListener('mouseup', function () {
        return _this.onMouseUp();
      });
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event, pencilTool) {
      this.isDrawing = true;
      this.draw(event, pencilTool);
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event, pencilTool) {
      if (this.isDrawing) {
        this.draw(event, pencilTool);
      }
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      this.isDrawing = false;
    }
  }, {
    key: "draw",
    value: function draw(event, pencilTool) {
      var rect = this.canvas.getBoundingClientRect();
      var x = Math.floor((event.clientX - rect.left) / this.canvas.scale);
      var y = Math.floor((event.clientY - rect.top) / this.canvas.scale);
      pencilTool.draw(x, y);
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
      //const color = this.colorPicker.getColor();
      var color = "black";
      this.canvasRenderer.drawPixel(x, y, color);
    }
  }]);
}();

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_canvas_canvasManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/canvas/canvasManager.js */ "./src/js/canvas/canvasManager.js");
/* harmony import */ var _js_canvas_canvasRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/canvas/canvasRenderer.js */ "./src/js/canvas/canvasRenderer.js");
/* harmony import */ var _js_tools_pencilTool_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/tools/pencilTool.js */ "./src/js/tools/pencilTool.js");
/* harmony import */ var _js_color_colorPicker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/color/colorPicker.js */ "./src/js/color/colorPicker.js");
/* harmony import */ var _js_events_canvasEventHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/events/canvasEventHandler.js */ "./src/js/events/canvasEventHandler.js");
/* Initializes the app, sets up modules, and orchestrates interactions between them */






document.addEventListener('DOMContentLoaded', function () {
  var canvasManager = new _js_canvas_canvasManager_js__WEBPACK_IMPORTED_MODULE_0__.CanvasManager('pixelCanvas', 256, 256, 10);
  var canvasRenderer = new _js_canvas_canvasRenderer_js__WEBPACK_IMPORTED_MODULE_1__.CanvasRenderer(canvasManager);
  var colorPicker = new _js_color_colorPicker_js__WEBPACK_IMPORTED_MODULE_3__.ColorPicker();
  var pencilTool = new _js_tools_pencilTool_js__WEBPACK_IMPORTED_MODULE_2__.PencilTool(canvasRenderer, colorPicker);
  var eventHandler = new _js_events_canvasEventHandler_js__WEBPACK_IMPORTED_MODULE_4__.CanvasEventHandler(canvasManager.canvas);
  eventHandler.init(pencilTool);
});
})();

/******/ })()
;
//# sourceMappingURL=bundleac15bbe1e608ef5220ee.js.map