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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _World__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./World */ \"./src/javascript/World.js\");\n\n\n\n\nclass Game {\n    constructor(options) {\n        this.canvas = document.getElementById('skateCanvas');\n        this.ctx = this.canvas.getContext('2d');\n        \n        \n        this.updateState = this.updateState.bind(this);\n        this.renderGame = this.renderGame.bind(this);\n        this.resetGame = this.resetGame.bind(this);\n        this.updateScore = this.updateScore.bind(this);\n\n        this.world = new _World__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            canvas: this.canvas,\n            ctx: this.ctx,\n            reset: this.updateState,\n            updateScore: this.updateScore\n        });\n\n        this.state = {\n            reset: false,\n            score: 0\n        }\n        \n    }\n\n    resetGame () {\n        // debugger\n        // this.state.render = true;\n        this.world = new _World__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            canvas: this.canvas,\n            ctx: this.ctx,\n            reset: this.updateState,\n            updateScore: this.updateScore\n        });\n    }\n\n    updateState() {\n        this.state.score = 0;\n        this.state.reset = true;\n\n    }\n\n    updateScore () {\n        this.state.score += 1\n    }\n\n    drawScore () {\n        this.ctx.font = '30px Arial'\n        this.ctx.fillText(`Score: ${this.state.score}`, 1000, 100)\n    }\n    \n\n\n    renderGame () {\n        \n        if (this.state.reset) {\n            this.state.reset = false;\n            this.resetGame();\n        }\n        \n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        this.drawScore();\n        this.world.render();\n        \n    \n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/javascript/Game.js?");

/***/ }),

/***/ "./src/javascript/Ground.js":
/*!**********************************!*\
  !*** ./src/javascript/Ground.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Ground {\n    constructor(options) {\n\n        //Initialize//\n        this.ctx = options.ctx;\n        this.canvas = options.canvas;\n        this.skateboard = options.skateboard;\n        this.handleKeyMap = options.handleKeyMap;\n        this.keyMap = options.keyMap;\n        this.reset = options.reset;\n        this.color = options.color;\n        this.resetInvoked = false;\n        this.startPos = options.startPos;\n        this.currentObstacle = options.currentObstacle || null;\n        this.currentObstaclePosX = null;\n        \n        // debugger\n\n        //Dimensions//\n        this.width = this.canvas.width * 2;\n        this.height = 500;\n\n        // Positioning //\n        this.posX = this.startPos;\n        \n        // Physics //\n        this.friction = .98;\n        this.speedX = 0;\n        \n\n        // Ground Edges //\n        this.top = 600;\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n\n        // Context Binds //\n        this.render = this.render.bind(this);\n        this.update = this.update.bind(this);\n        this.speedAccelerate = this.speedAccelerate.bind(this);\n        this.resetBoard = this.resetBoard.bind(this);\n\n    }\n\n    update () {\n\n        if (this.keyMap[68]) {\n            this.speedAccelerate(-.4);\n            this.speedX += -.1;\n        } else if (this.keyMap[65]) {\n            if (this.posX < 197) {\n                this.speedAccelerate(.4);\n                this.speedX += .1;\n            } else {\n                // this.speedAccelerate(.4);\n                this.speedX = 0;\n            }\n        } \n\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n\n    }\n\n    speedAccelerate(n) {\n        if (this.speedX > -10 && this.speedX < 10) {\n            this.speedX += n;\n        }\n    }\n\n    resetBoard () { \n        this.reset();\n    }\n\n\n    render() {\n        \n        this.update();\n        this.ctx.beginPath();\n        this.ctx.rect(this.posX, (this.top), this.width, this.height);\n        this.ctx.fillStyle = this.color;\n        this.ctx.fill();\n        this.ctx.closePath();\n        // debugger\n        this.currentObstacle.render();\n    }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ground);\n\n//# sourceURL=webpack:///./src/javascript/Ground.js?");

/***/ }),

/***/ "./src/javascript/Skateboard.js":
/*!**************************************!*\
  !*** ./src/javascript/Skateboard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Skateboard  {\n    constructor(options) {\n        //Initialize World//\n        this.ctx = options.ctx;\n        this.canvas = options.canvas;\n        this.keyMap = options.keyMap;\n        this.currentGround = options.currentGround;\n        this.currentObstacle = this.currentGround.currentObstacle;\n        this.level = options.level;\n        \n        //Dimensions//\n        this.height = 10;\n        this.width = 150;\n\n        // Positioning //\n        this.posX = 200;\n        this.posY = 400; \n\n        //Object Edges//\n        this.bottom = this.posY - this.height;\n        this.middle = this.width / 2;\n        this.top = this.posY;\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n        \n        //Speed//\n        this.speedY = 0;\n\n        //Gravity//\n        this.gravity = .1;\n        this.gravitySpeed = 0;\n\n\n        //Context binds//\n        \n        this.render = this.render.bind(this);\n        this.gravityAccelerate = this.gravityAccelerate.bind(this);\n        this.update = this.update.bind(this);\n        this.render = this.render.bind(this);\n        \n        this.boardGravity = this.boardGravity.bind(this);\n        this.collisionCheck = this.collisionCheck.bind(this);\n        this.groundSpeed = this.groundSpeed.bind(this);\n        \n    }\n\n    \n\n    gravityAccelerate(n) {\n        this.gravity = n;\n    }\n\n    boardGravity() {\n        this.gravitySpeed += this.gravity;\n        this.posY += this.speedY + this.gravitySpeed;\n\n        this.collisionCheck();\n    }\n\n    collisionCheck() {\n        let onGround;\n        let otherGround = this.level[1]\n\n        \n\n        if (this.currentObstacle.type === 'gap'){\n            onGround = !(this.leftEdge > this.currentObstacle.leftEdge && this.rightEdge < this.currentObstacle.rightEdge)\n        } else {\n            onGround = (this.leftEdge > this.currentGround.leftEdge && this.rightEdge < this.currentGround.rightEdge) ||\n                       (this.leftEdge > otherGround.leftEdge && this.rightEdge < otherGround.rightEdge) ||\n                       (this.leftEdge < this.currentGround.rightEdge && this.rightEdge > otherGround.leftEdge) ||\n                       (this.leftEdge < otherGround.leftEdge && this.rightEdge < this.currentGround.rightEdge)\n        }\n            //if the board is over an object, then check to see if the board is hitting the 'ground'\n        if (onGround) {\n            \n            let groundLevel = this.currentGround.top - this.height;\n            if (this.posY > groundLevel) {\n                this.posY = groundLevel;\n                this.gravitySpeed = 0;\n            } else if (this.currentObstacle.type === 'trash') {\n                \n                let inTrash = (this.rightEdge > this.currentObstacle.leftEdge && this.rightEdge < this.currentObstacle.rightEdge && this.bottom > this.currentObstacle.posY) ||\n                              (this.leftEdge > this.currentObstacle.leftEdge && this.leftEdge < this.currentObstacle.rightEdge && this.bottom > this.currentObstacle.posY) ||\n                              (this.leftEdge < this.currentObstacle.leftEdge && this.rightEdge > this.currentObstacle.rightEdge && this.bottom > this.currentObstacle.posY)\n\n                // debugger\n                if (inTrash) {\n                    console.log(' YOURE TRASH !!!!! ')\n                    \n                    this.currentGround.speedX = 0;\n                    if (!this.currentGround.resetInvoked) {\n                        setTimeout(this.currentGround.resetBoard, 1500);\n                        this.currentGround.resetInvoked = true;\n                    }\n\n                }\n            }\n        } else if (!onGround && (this.posY > 600)) {\n            // debugger\n            this.currentGround.speedX = 0;\n            if (!this.currentGround.resetInvoked) {\n                setTimeout(this.currentGround.resetBoard, 1500);\n                this.currentGround.resetInvoked = true;\n            }\n        } \n    }\n\n    \n\n    groundSpeed() {\n        // debugger\n        // If the bottom of the board is higher than the surface of the ground, then don't apply friction\n        \n        \n        if (this.bottom >= this.currentGround.top) {\n            // debugger\n            this.currentGround.speedX *= this.currentGround.friction;\n            this.currentGround.posX += this.currentGround.speedX;\n            this.level[1].speedX = this.currentGround.speedX;\n            this.level[1].posX += this.level[1].speedX;\n            // this.level[1].posX += this.currentGround.speedX;\n            this.currentObstacle.posX += this.currentGround.speedX;\n            this.level[1].currentObstacle.posX += this.level[1].speedX;\n            \n        } else {\n            this.currentGround.posX += this.currentGround.speedX;\n            this.level[1].speedX = this.currentGround.speedX;\n            this.level[1].posX += this.level[1].speedX;\n            // this.level[1].posX += this.currentGround.speedX;\n            this.currentObstacle.posX += this.currentGround.speedX;\n            this.level[1].currentObstacle.posX += this.level[1].speedX;\n\n        }\n    }\n\n\n   \n    update () {\n        this.bottom = this.posY + this.height;\n        this.middle = this.width / 2;\n        this.top = this.posY;\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n        this.currentObstacle = this.currentGround.currentObstacle;\n\n        this.groundSpeed();\n        this.boardGravity();\n    }\n    \n    render () {\n        this.update();\n        \n        if (this.keyMap[32]) {\n            if (this.posY < 550) {\n                this.keyMap[32] = false\n            } else {\n                // this.speedY = 2;\n                this.gravityAccelerate(-1);\n            }\n        } else {\n            this.gravityAccelerate(0.4);\n        }\n        \n        this.ctx.beginPath();\n        this.ctx.rect(this.posX, this.posY, this.width, this.height);\n        this.ctx.fillStyle = \"#FF0000\";\n        this.ctx.fill();\n        this.ctx.closePath();\n        \n        // console.log(this.posY);\n\n    }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skateboard);\n\n\n\n//# sourceURL=webpack:///./src/javascript/Skateboard.js?");

/***/ }),

/***/ "./src/javascript/World.js":
/*!*********************************!*\
  !*** ./src/javascript/World.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Skateboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Skateboard */ \"./src/javascript/Skateboard.js\");\n/* harmony import */ var _Ground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ground */ \"./src/javascript/Ground.js\");\n/* harmony import */ var _obstacles_ObstacleGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obstacles/ObstacleGenerator */ \"./src/javascript/obstacles/ObstacleGenerator.js\");\n\n\n\n\nclass World {\n    constructor(options) {\n          /////////////////////\n         //Initialize World //\n        /////////////////////\n        this.ctx = options.ctx;\n        this.canvas = options.canvas;\n        this.reset = options.reset;\n        this.updateScore = options.updateScore;\n        this.keyMap = {};\n        this.skateboard = null;\n        this.ground = null;\n        this.level = null;\n        \n        this.gap = null;\n        this.generateRandomObstacle = _obstacles_ObstacleGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n        \n        this.load();\n        this.currentGround = this.level[0];\n        this.handleKeyMap = (e) => {\n            this.keyMap[e.keyCode] = e.type == 'keydown';\n        }\n        \n        // Context Binds //\n        this.load = this.load.bind(this);\n        this.update = this.update.bind(this);\n\n        // Event Listeners //\n        document.addEventListener('keydown', this.handleKeyMap, false);\n        document.addEventListener('keyup', this.handleKeyMap, false);\n        // document.addEventListener('keypress', this.skateboard.landBoard, false);\n            \n    }\n\n    load () {\n        \n    \n        // this.gap = new Gap({\n        //     ctx: this.ctx,\n        //     canvas: this.canvas,\n        //     posX: 800,\n        //     posY: 600,\n        // });\n\n        this.level = [\n            new _Ground__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n                ctx: this.ctx,\n                canvas: this.canvas,\n                skateboard: this.skateboard,\n                keyMap: this.keyMap,\n                reset: this.reset,\n                color: \"#a8ada6\",\n                startPos: 0,\n                index: 0,\n                currentObstacle: this.generateRandomObstacle({\n                    ctx: this.ctx,\n                    canvas: this.canvas,\n                    posX: 800\n                })\n            }),\n            new _Ground__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n                ctx: this.ctx,\n                canvas: this.canvas,\n                skateboard: this.skateboard,\n                keyMap: this.keyMap,\n                reset: this.reset,\n                color: \"#a8ada6\",\n                startPos: this.canvas.width * 2,\n                index: 1,\n                currentObstacle: this.generateRandomObstacle({\n                    ctx: this.ctx,\n                    canvas: this.canvas,\n                    posX: (this.canvas.width * 2) + 500\n                })\n            })\n        ]\n\n        this.skateboard = new _Skateboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            ctx: this.ctx,\n            canvas: this.canvas,\n            keyMap: this.keyMap,\n            level: this.level,\n            currentGround: this.level[0]\n        });\n        // debugger\n        \n    }\n\n    update () {\n        // console.log(this.currentGround.color)\n        // this.currentGround = this.level[0]\n        // console.log(this.currentGround.posX)\n        // console.log(this.currentGround.rightEdge)\n        if (this.currentGround.rightEdge < 0 ) {\n            // debugger\n            this.updateScore();\n            this.level.push(this.level.shift());\n            // this.currentGround.currentObstacle = null;\n            this.currentGround = this.level[0];\n            // debugger\n            this.level[0].posX = 0\n            this.level[1].posX = this.canvas.width * 2\n            this.level[1].currentObstacle = this.generateRandomObstacle({\n                ctx: this.ctx,\n                canvas: this.canvas,\n                posX: this.level[1].posX + 1000\n            });\n            this.skateboard.currentGround = this.level[0];\n            \n        }\n        \n    }\n \n\n    render () {\n        this.update();\n        for (let i = 0; i < this.level.length; i++) {\n            this.level[i].render();\n        }\n        \n        // this.gap.render();\n        this.skateboard.render();\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (World);\n\n//# sourceURL=webpack:///./src/javascript/World.js?");

/***/ }),

/***/ "./src/javascript/obstacles/Gap.js":
/*!*****************************************!*\
  !*** ./src/javascript/obstacles/Gap.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Gap {\n    constructor(options){\n        this.type = 'gap';\n        this.ctx = options.ctx;\n        this.canvas = options.canvas;\n        this.posX = options.posX;\n        this.posY = 600;\n\n        //Dimensions\n        this.width = 500;\n        this.height = 1000;\n\n        //Edges\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n    }\n\n    update () {\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n    }\n\n    render () {\n        \n        this.update();\n        this.ctx.beginPath();\n        this.ctx.rect(this.posX, this.posY, this.width, this.height);\n        this.ctx.fillStyle = \"#eee\";\n        this.ctx.fill();\n        this.ctx.closePath();\n\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gap);\n\n//# sourceURL=webpack:///./src/javascript/obstacles/Gap.js?");

/***/ }),

/***/ "./src/javascript/obstacles/ObstacleGenerator.js":
/*!*******************************************************!*\
  !*** ./src/javascript/obstacles/ObstacleGenerator.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Trash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Trash */ \"./src/javascript/obstacles/Trash.js\");\n/* harmony import */ var _Gap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gap */ \"./src/javascript/obstacles/Gap.js\");\n\n\n\nconst generateRandomObstacle = (options) => {\n    const posX = options.posX;\n    const ctx = options.ctx;\n    const canvas = options.canvas;\n\n    const obstacles = [\n        _Trash__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        _Gap__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ]\n\n    const getRandomInt = (max) => {\n        return Math.floor(Math.random() * Math.floor(max));\n    }\n    let obstacleNo = getRandomInt(obstacles.length)\n    \n    return new obstacles[obstacleNo]({\n        ctx: ctx,\n        canvas: canvas,\n        posX: posX\n    });\n    \n}\n    \n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (generateRandomObstacle);\n\n//# sourceURL=webpack:///./src/javascript/obstacles/ObstacleGenerator.js?");

/***/ }),

/***/ "./src/javascript/obstacles/Trash.js":
/*!*******************************************!*\
  !*** ./src/javascript/obstacles/Trash.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n///this game///\n\nclass Trash {\n    constructor(options) {\n        this.type = 'trash';\n        this.ctx = options.ctx;\n        this.canvas = options.canvas;\n        this.posX = options.posX;\n        this.posY = 450;\n\n        //Dimensions\n        this.width = 75;\n        this.height = 150;\n\n        //Edges\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n    }\n\n    update () {\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n    }\n\n\n    render () {\n        this.update();\n        this.ctx.beginPath();\n        this.ctx.rect(this.posX, this.posY, this.width, this.height);\n        this.ctx.fillStyle = \"green\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trash);\n\n//# sourceURL=webpack:///./src/javascript/obstacles/Trash.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _javascript_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascript/Game */ \"./src/javascript/Game.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', ()=> {\n\n    let game = new _javascript_Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n    \n    let animate =  () => {\n        game.renderGame();\n        requestAnimationFrame(animate);\n    }\n\n\n    requestAnimationFrame(animate);\n    \n});\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });