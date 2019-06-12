/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/Game.js":
/*!********************************!*\
  !*** ./src/javascript/Game.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _World__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./World */ \"./src/javascript/World.js\");\n\n\n\nclass Game {\n    constructor() {\n        this.canvas = document.getElementById('skateCanvas');\n        this.ctx = this.canvas.getContext('2d');\n        \n        this.world = new _World__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            canvas: this.canvas,\n            ctx: this.ctx\n        });\n        \n        this.renderGame = this.renderGame.bind(this);\n        \n    }\n\n\n    renderGame () {\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        this.world.renderWorld();\n        \n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/javascript/Game.js?");

/***/ }),

/***/ "./src/javascript/Skateboard.js":
/*!**************************************!*\
  !*** ./src/javascript/Skateboard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Skateboard  {\n    constructor(options) {\n        this.ctx = options.ctx;\n        this.canvas = options.canvas;\n        this.image = options.image;\n\n        this.groundLevel = 600;\n\n        this.skateboardHeight = 10;\n        this.skateboardWidth = 150;\n\n        this.skateboardX = (this.canvas.width - this.skateboardWidth) / 2\n        this.skateboardY = this.groundLevel;\n        this.speedX = 0;\n        this.speedY = 0;\n\n        this.gravity = .1;\n        this.gravitySpeed = 0;\n\n        \n        this.spacePressed = false;\n\n        \n        this.popBoard = this.popBoard.bind(this);\n        this.landBoard = this.landBoard.bind(this);\n        this.hitGround = this.hitGround.bind(this);\n        this.renderBoard = this.renderBoard.bind(this);\n        this.boardGravity = this.boardGravity.bind(this);\n        this.accelerate = this.accelerate.bind(this);\n\n        document.addEventListener('keydown', this.popBoard, false);\n        document.addEventListener('keyup', this.landBoard, false);\n    }\n\n    accelerate(n) {\n        this.gravity = n;\n    }\n\n    boardGravity ()  {\n        this.gravitySpeed += this.gravity;\n        this.skateboardY += this.speedY + this.gravitySpeed;\n\n        this.hitGround();\n    }\n\n    hitGround () {\n        \n        let groundLevel = this.groundLevel;\n\n        if (this.skateboardY > groundLevel) {\n            this.skateboardY = groundLevel;\n            this.gravitySpeed = 0;\n        }\n\n    }\n\n\n    popBoard (e) {\n        if (e.key == \" \") {\n            this.spacePressed = true;\n        }\n    }\n\n    landBoard (e) {\n        if (e.key == \" \"){\n            this.spacePressed = false;\n        }\n    }\n    \n    renderBoard () {\n        this.boardGravity();\n        \n        if (this.spacePressed) {\n            if (this.skateboardY > 520) {\n            this.accelerate(-1);\n            } else {\n                this.spacePressed = false;\n            }\n\n        } else if (!this.spacePressed) {\n             \n            this.accelerate(0.4);\n         \n        }\n        \n        this.ctx.beginPath();\n        this.ctx.rect(this.skateboardX, this.skateboardY, this.skateboardWidth, this.skateboardHeight);\n        this.ctx.fillStyle = \"#FF0000\";\n        this.ctx.fill();\n        this.ctx.closePath();\n\n\n    }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skateboard);\n\n\n\n//# sourceURL=webpack:///./src/javascript/Skateboard.js?");

/***/ }),

/***/ "./src/javascript/World.js":
/*!*********************************!*\
  !*** ./src/javascript/World.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Skateboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Skateboard */ \"./src/javascript/Skateboard.js\");\n\n\nclass World {\n    constructor(options) {\n        this.ctx = options.ctx;\n        this.canvas = options.canvas;\n        this.skateboard = new _Skateboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            ctx: this.ctx,\n            canvas: this.canvas\n        })\n\n\n       \n        \n    }\n\n   \n\n    renderWorld () {\n        this.skateboard.renderBoard();\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (World);\n\n//# sourceURL=webpack:///./src/javascript/World.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _javascript_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascript/Game */ \"./src/javascript/Game.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', ()=> {\n\n    let game = new _javascript_Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    \n    let animate =  () => {\n        game.renderGame();\n        requestAnimationFrame(animate);\n    }\n\n    requestAnimationFrame(animate);\n    \n});\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });