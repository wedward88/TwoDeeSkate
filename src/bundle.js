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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _World__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./World */ \"./src/javascript/World.js\");\n\n\n\nclass Game {\n    constructor() {\n        this.canvas = document.getElementById('skateCanvas');\n        this.ctx = this.canvas.getContext('2d');\n        \n        this.world = new _World__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            canvas: this.canvas,\n            ctx: this.ctx\n        });\n        \n        this.renderGame = this.renderGame.bind(this);\n        \n    }\n    \n\n\n    renderGame () {\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        this.world.render();\n        \n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/javascript/Game.js?");

/***/ }),

/***/ "./src/javascript/Ground.js":
/*!**********************************!*\
  !*** ./src/javascript/Ground.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Ground {\n    constructor(options) {\n\n        //Initialize//\n        this.ctx = options.ctx;\n        this.canvas = options.canvas;\n        this.skateboard = options.skateboard;\n        this.gap = options.mindTheGap;\n        this.platformNo = options.platformNo;\n        this.handleKeyMap = options.handleKeyMap;\n        this.keyMap = options.keyMap;\n\n        //Dimensions//\n        this.width = 4000;\n        this.height = 500;\n\n        // Positioning //\n        this.posX = 0;\n        \n        // Physics //\n        this.friction = .98;\n        this.speedX = 0;\n        \n\n        // Ground Edges //\n        this.top = 600;\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n\n        // Context Binds //\n        this.render = this.render.bind(this);\n        this.update = this.update.bind(this);\n        this.accelerate = this.accelerate.bind(this);\n        this.boardGravity = this.boardGravity.bind(this);\n        this.hitGround = this.hitGround.bind(this);\n        this.groundSpeed = this.groundSpeed.bind(this);\n\n        // document.addEventListener('keydown', this.movement, false);\n        // document.addEventListener('keydown', this.movement, false);\n        \n        \n    }\n\n    accelerate(n) {\n        if (this.speedX > -10 && this.speedX < 10) {\n            this.speedX += n;\n        }\n    }\n\n    update () {\n\n        if (this.keyMap[68]) {\n            this.accelerate(-.4);\n            this.speedX += -.1;\n\n        } else if (this.keyMap[65]) {\n            this.accelerate(.4);\n            this.speedX += .1;\n\n        } \n\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n        this.groundSpeed();\n        this.boardGravity();\n\n    }\n\n\n    boardGravity() {\n        this.skateboard.gravitySpeed += this.skateboard.gravity;\n        this.skateboard.posY += this.skateboard.speedY + this.skateboard.gravitySpeed;\n\n        this.hitGround();\n    }\n\n    hitGround() {\n        //if the board is over an object, then check to see if the board is hitting the 'ground'\n        if (this.skateboard.rightEdge > this.leftEdge && this.skateboard.leftEdge < this.rightEdge) {\n            let groundLevel = this.top - this.skateboard.height;\n\n            if (this.skateboard.posY > groundLevel) {\n                this.skateboard.posY = groundLevel;\n                this.skateboard.gravitySpeed = 0;\n\n            }\n        }\n    }\n\n    groundSpeed() {\n        // debugger\n        // If the bottom of the board is higher than the surface of the ground, then don't apply friction\n        if (this.skateboard.bottom >= this.top) {\n            // debugger\n            this.speedX *= this.friction;\n            this.posX += this.speedX;\n        } else {\n            this.posX += this.speedX;\n        }\n    }\n\n\n    render() {\n        \n        this.update();\n        this.ctx.beginPath();\n        this.ctx.rect(this.posX, (this.top), this.width, this.height);\n        this.ctx.fillStyle = \"#a8ada6\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ground);\n\n//# sourceURL=webpack:///./src/javascript/Ground.js?");

/***/ }),

/***/ "./src/javascript/Skateboard.js":
/*!**************************************!*\
  !*** ./src/javascript/Skateboard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Skateboard  {\n    constructor(options) {\n        //Initialize World//\n        this.ctx = options.ctx;\n        this.canvas = options.canvas;\n        this.keyMap = options.keyMap;\n        \n        //Dimensions//\n        this.height = 10;\n        this.width = 150;\n\n        // Positioning //\n        this.posX = (this.canvas.width - this.width) / 2;\n        this.posY = 400; \n\n        //Object Edges//\n        this.bottom = this.posY - this.height;\n        this.middle = this.width / 2;\n        this.top = this.posY;\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n        \n        //Speed//\n        this.speedY = 0;\n\n        //Gravity//\n        this.gravity = .1;\n        this.gravitySpeed = 0;\n\n        //Key stroke//\n        this.spacePressed = false;\n\n        //Context binds//\n        this.popBoard = this.popBoard.bind(this);\n        // this.landBoard = this.landBoard.bind(this);\n        this.render = this.render.bind(this);\n        this.accelerate = this.accelerate.bind(this);\n        this.update = this.update.bind(this);\n        this.render = this.render.bind(this);\n        \n    }\n\n    accelerate(n) {\n        this.gravity = n;\n    }\n\n\n    popBoard (e) {\n        \n        if (e.key == \" \") {\n            this.spacePressed = true;\n        }\n    \n    }\n\n    // landBoard (e) {\n    //     if (e.key == \" \"){\n    //         this.spacePressed = false;\n    //     }\n    // }\n\n    update () {\n        this.bottom = this.posY + this.height;\n        this.middle = this.width / 2;\n        this.top = this.posY;\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n    }\n    \n    render () {\n        this.update();\n        \n        if (this.keyMap[32]) {\n            if (this.posY < 520) {\n                this.keyMap[32] = false\n            } else {\n                // this.speedY = 2;\n                this.accelerate(-1);\n            }\n        } else {\n            this.accelerate(0.4);\n        }\n        \n        this.ctx.beginPath();\n        this.ctx.rect(this.posX, this.posY, this.width, this.height);\n        this.ctx.fillStyle = \"#FF0000\";\n        this.ctx.fill();\n        this.ctx.closePath();\n        \n        // console.log(this.posY);\n\n    }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skateboard);\n\n\n\n//# sourceURL=webpack:///./src/javascript/Skateboard.js?");

/***/ }),

/***/ "./src/javascript/World.js":
/*!*********************************!*\
  !*** ./src/javascript/World.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Skateboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Skateboard */ \"./src/javascript/Skateboard.js\");\n/* harmony import */ var _Ground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ground */ \"./src/javascript/Ground.js\");\n\n\n\nclass World {\n    constructor(options) {\n          /////////////////////\n         //Initialize World //\n        /////////////////////\n        this.ctx = options.ctx;\n        this.canvas = options.canvas;\n        this.keyMap = {};\n        this.skateboard = new _Skateboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            ctx: this.ctx,\n            canvas: this.canvas,\n            keyMap: this.keyMap\n        \n        });\n\n        this.level = new _Ground__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            ctx: this.ctx,\n            canvas: this.canvas,\n            skateboard: this.skateboard,\n            keyMap: this.keyMap\n        });\n  \n        \n        this.handleKeyMap = (e) => {\n            this.keyMap[e.keyCode] = e.type == 'keydown';\n        }\n        \n        // Context Binds //\n        // this.initializeLevel = this.initializeLevel.bind(this);\n        \n\n        // Event Listeners //\n        document.addEventListener('keydown', this.handleKeyMap, false);\n        document.addEventListener('keyup', this.handleKeyMap, false);\n        // document.addEventListener('keypress', this.skateboard.landBoard, false);\n            \n    }\n \n\n    render () {\n        this.level.render();\n        this.skateboard.render();\n    \n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (World);\n\n//# sourceURL=webpack:///./src/javascript/World.js?");

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