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

/***/ "./src/javascript/Background.js":
/*!**************************************!*\
  !*** ./src/javascript/Background.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Background {\n    constructor(options) {\n        this.ctx = options.ctx;\n        this.canvas = options.canvas;\n\n        this.bg1 = new Image();\n        this.bg2 = new Image();\n        this.bg3 = new Image();\n        this.bg1.src = './src/skateAssets/bg1.png';\n        this.bg2.src = './src/skateAssets/bg2.png';\n        this.bg3.src = './src/skateAssets/bg3.png';\n\n        // Dimensions //\n        this.width = this.canvas.width / 3;\n        this.height = 600\n\n        // Location //\n        this.bg1posX = 0;\n        this.bg1posY = 0;\n\n        this.bg2posX = this.canvas.width * .333;\n        this.bg2posY = 0;\n\n        this.bg3posX = this.canvas.width * .66;\n        this.bg3posY = 0;\n\n    }\n\n    render () {\n\n        this.ctx.drawImage(this.bg1, this.bg1posX, this.bg1posY, this.width, this.height)\n        this.ctx.drawImage(this.bg2, this.bg2posX, this.bg2posY, this.width, this.height)\n        this.ctx.drawImage(this.bg3, this.bg3posX, this.bg3posY, this.width, this.height)\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Background);\n\n//# sourceURL=webpack:///./src/javascript/Background.js?");

/***/ }),

/***/ "./src/javascript/Game.js":
/*!********************************!*\
  !*** ./src/javascript/Game.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _World__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./World */ \"./src/javascript/World.js\");\n/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Background */ \"./src/javascript/Background.js\");\n\n\n\n\nclass Game {\n    constructor(options) {\n        this.canvas = document.getElementById('skateCanvas');\n        this.ctx = this.canvas.getContext('2d');\n        this.scoreBar = new Image();\n        this.scoreBar.src = './src/skateAssets/scoreBar.png'\n        \n        this.updateState = this.updateState.bind(this);\n        this.renderGame = this.renderGame.bind(this);\n        this.resetGame = this.resetGame.bind(this);\n        this.updateScore = this.updateScore.bind(this);\n\n        this.world = new _World__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            canvas: this.canvas,\n            ctx: this.ctx,\n            reset: this.updateState,\n            updateScore: this.updateScore\n        });\n\n        this.background = new _Background__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            canvas: this.canvas,\n            ctx: this.ctx\n        });\n\n        this.state = {\n            reset: false,\n            score: 0\n        }\n        \n    }\n\n    resetGame () {\n        // debugger\n        // this.state.render = true;\n        this.world = new _World__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            canvas: this.canvas,\n            ctx: this.ctx,\n            reset: this.updateState,\n            updateScore: this.updateScore\n        });\n    }\n\n    updateState() {\n        this.state.score = 0;\n        this.state.reset = true;\n\n    }\n\n    updateScore () {\n        this.state.score += 1\n    }\n\n    drawScore () {\n        this.ctx.shadowColor = 'black';\n        this.ctx.shadowBlur = 15;\n        this.ctx.drawImage(this.scoreBar, 940, 50, 200, 100)\n        this.ctx.shadowBlur = 0;\n        this.ctx.font = '30px Arial'\n        this.ctx.fillStyle = \"black\"\n        this.ctx.fillText(`Score: ${this.state.score}`, 980, 80)\n    }\n    \n\n\n    renderGame () {\n        \n        if (this.state.reset) {\n            this.state.reset = false;\n            this.resetGame();\n        }\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        this.background.render();\n        this.world.render();\n        this.drawScore();\n        \n    \n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/javascript/Game.js?");

/***/ }),

/***/ "./src/javascript/Ground.js":
/*!**********************************!*\
  !*** ./src/javascript/Ground.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Ground {\n    constructor(options) {\n\n        //Initialize//\n        this.ctx = options.ctx;\n        this.canvas = options.canvas;\n        this.skateboard = options.skateboard;\n        this.handleKeyMap = options.handleKeyMap;\n        this.keyMap = options.keyMap;\n        this.reset = options.reset;\n        this.color = options.color;\n        this.resetInvoked = false;\n        this.startPos = options.startPos;\n        this.currentObstacle = options.currentObstacle || null;\n        this.currentObstaclePosX = null;\n        \n        // debugger\n\n        //Dimensions//\n        this.width = this.canvas.width * 2;\n        this.height = 500;\n\n        // Positioning //\n        this.posX = this.startPos;\n        \n        // Physics //\n        this.friction = .98;\n        this.speedX = 0;\n        \n\n        // Ground Edges //\n        this.top = 600;\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n\n        // Context Binds //\n        this.render = this.render.bind(this);\n        this.update = this.update.bind(this);\n        this.speedAccelerate = this.speedAccelerate.bind(this);\n        this.resetBoard = this.resetBoard.bind(this);\n\n    }\n\n    update () {\n\n        if (this.keyMap[68]) {\n            this.speedAccelerate(-.8);\n            this.speedX += -.1;\n        } \n\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n\n    }\n\n    speedAccelerate(n) {\n        if (this.speedX > -7 && this.speedX < 7) {\n            this.speedX += n;\n        }\n    }\n\n    resetBoard () { \n        this.reset();\n    }\n\n\n    render() {\n        \n        this.update();\n        this.ctx.beginPath();\n        this.ctx.rect(this.posX, (this.top), this.width, this.height);\n        this.ctx.fillStyle = this.color;\n        this.ctx.fill();\n        this.ctx.closePath();\n        // debugger\n        this.currentObstacle.render();\n    }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ground);\n\n//# sourceURL=webpack:///./src/javascript/Ground.js?");

/***/ }),

/***/ "./src/javascript/Skateboard.js":
/*!**************************************!*\
  !*** ./src/javascript/Skateboard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Skateboard  {\n    constructor(options) {\n        //Initialize World//\n        this.ctx = options.ctx;\n        this.canvas = options.canvas;\n        this.keyMap = options.keyMap;\n        this.currentGround = options.currentGround;\n        this.currentObstacle = this.currentGround.currentObstacle;\n        this.level = options.level;\n        this.didFall = false;\n        \n        \n\n        // images //\n        this.tickCount = 0;\n        this.frameIndex = 0;\n        this.ticksPerFrame = 7;\n        this.frameNo = 1;\n\n        this.board1 = new Image();\n        this.board2 = new Image();\n        this.board3 = new Image();\n        this.board4 = new Image();\n        this.board5 = new Image();\n\n        this.board1.src = './src/skateAssets/board1.png';\n        this.board2.src = './src/skateAssets/board2.png';\n        this.board3.src = './src/skateAssets/board3.png';\n        this.board4.src = './src/skateAssets/board4.png';\n        this.board5.src = './src/skateAssets/board5.png';\n\n        this.currentBoardFrame = this.board1;\n        \n        //Dimensions//\n        this.height = 40;\n        this.width = 150;\n        this.groundLevel = this.currentGround.top - this.height;\n\n        // Positioning //\n        this.posX = 200;\n        this.posY = 400; \n\n        //Object Edges//\n        this.bottom = this.posY - this.height;\n        this.middle = this.width / 2;\n        this.top = this.posY;\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n        \n        //Speed//\n        this.speedY = 0;\n\n        //Gravity//\n        this.gravity = .1;\n        this.gravitySpeed = 0;\n\n\n        //Context binds//\n        \n        this.render = this.render.bind(this);\n        this.animateBoard = this.animateBoard.bind(this);\n        this.gravityAccelerate = this.gravityAccelerate.bind(this);\n        this.update = this.update.bind(this);\n        this.render = this.render.bind(this);\n        this.boardGravity = this.boardGravity.bind(this);\n        this.collisionCheck = this.collisionCheck.bind(this);\n        this.groundSpeed = this.groundSpeed.bind(this);\n        \n    }\n\n    \n\n    gravityAccelerate(n) {\n        this.gravity = n;\n    }\n\n    boardGravity() {\n        this.gravitySpeed += this.gravity;\n        this.posY += this.speedY + this.gravitySpeed;\n\n        this.collisionCheck();\n    }\n\n    collisionCheck() {\n        let overGround;\n        let otherGround = this.level[1]\n\n        \n\n        if (this.currentObstacle.type === 'gap'){\n            overGround = !(this.leftEdge > this.currentObstacle.leftEdge && this.rightEdge < this.currentObstacle.rightEdge)\n        } else {\n            overGround = (this.leftEdge > this.currentGround.leftEdge && this.rightEdge < this.currentGround.rightEdge) ||\n                       (this.leftEdge > otherGround.leftEdge && this.rightEdge < otherGround.rightEdge) ||\n                       (this.leftEdge < this.currentGround.rightEdge && this.rightEdge > otherGround.leftEdge) ||\n                       (this.leftEdge < otherGround.leftEdge && this.rightEdge < this.currentGround.rightEdge)\n        }\n            //if the board is over an object, then check to see if the board is hitting the 'ground'\n        if (overGround) {\n\n            let inObstacle = (this.rightEdge > this.currentObstacle.leftEdge && this.rightEdge < this.currentObstacle.rightEdge && this.bottom > this.currentObstacle.posY) ||\n                (this.rightEdge > this.currentObstacle.leftEdge && this.rightEdge < this.currentObstacle.rightEdge && this.posY > this.groundLevel) ||\n                (this.leftEdge > this.currentObstacle.leftEdge && this.leftEdge < this.currentObstacle.rightEdge && this.bottom > this.currentObstacle.posY) ||\n                (this.leftEdge < this.currentObstacle.leftEdge && this.rightEdge > this.currentObstacle.rightEdge && this.bottom > this.currentObstacle.posY)\n            \n            if ((this.posY > this.groundLevel) && !inObstacle) {\n                this.posY = this.groundLevel;\n                this.gravitySpeed = 0;\n                \n            } else if (this.currentObstacle.type === 'notGap') {\n                \n                if (inObstacle) {\n                    console.log(' YOURE TRASH !!!!! (get it) ')\n                    this.didFall = true;\n                    this.currentGround.speedX = 0;\n                    if (!this.currentGround.resetInvoked) {\n                        setTimeout(this.currentGround.resetBoard, 1500);\n                        this.currentGround.resetInvoked = true;\n                    }\n\n                }\n            }\n        } else if (!overGround && (this.posY > 600)) {\n            // debugger\n            this.didFall = true;\n            this.currentGround.speedX = 0;\n            if (!this.currentGround.resetInvoked) {\n                setTimeout(this.currentGround.resetBoard, 1500);\n                this.currentGround.resetInvoked = true;\n            }\n        } \n    }\n\n    \n\n    groundSpeed() {\n        // debugger\n        // If the bottom of the board is higher than the surface of the ground, then don't apply friction\n        \n        \n        if (this.bottom >= this.currentGround.top) {\n            // debugger\n            this.currentGround.speedX *= this.currentGround.friction;\n            this.currentGround.posX += this.currentGround.speedX;\n            this.level[1].speedX = this.currentGround.speedX;\n            this.level[1].posX += this.level[1].speedX;\n            // this.level[1].posX += this.currentGround.speedX;\n            this.currentObstacle.posX += this.currentGround.speedX;\n            this.level[1].currentObstacle.posX += this.level[1].speedX;\n            \n        } else {\n            this.currentGround.speedX *= .995;\n            this.currentGround.posX += this.currentGround.speedX;\n            this.level[1].speedX = this.currentGround.speedX;\n            this.level[1].posX += this.level[1].speedX;\n            // this.level[1].posX += this.currentGround.speedX;\n            this.currentObstacle.posX += this.currentGround.speedX;\n            this.level[1].currentObstacle.posX += this.level[1].speedX;\n\n        }\n    }\n\n    animateBoard () {\n        this.tickCount += 1;\n        \n        if (this.tickCount > this.ticksPerFrame) {\n            this.tickCount = 0;\n            \n            if (this.frameNo < 5) {\n                this.frameNo += 1;\n                console.log(this.frameNo);\n            } else {\n                this.frameNo = 1;\n            }\n        }\n\n        let boardVal;\n\n        if (this.frameNo === 1) {\n            boardVal = this.board1;\n        } else if (this.frameNo === 2) {\n            boardVal = this.board2;\n        } else if (this.frameNo === 3) {\n            boardVal = this.board3;\n        } else if (this.frameNo === 4) {\n            boardVal = this.board4;\n        } else if (this.frameNo === 5) {\n            boardVal = this.board5;\n        }\n\n        this.ctx.drawImage(boardVal, this.posX, this.posY, this.width, this.height)\n    }\n\n\n   \n    update () {\n        this.bottom = this.posY + this.height;\n        this.middle = this.width / 2;\n        this.top = this.posY;\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n        this.currentObstacle = this.currentGround.currentObstacle;\n\n        this.groundSpeed();\n        this.boardGravity();\n    }\n    \n    render () {\n        \n        this.update();\n        if (this.keyMap[32]) {\n            if (this.posY < 500) {\n                this.keyMap[32] = false\n            } else {\n                // this.speedY = 2;\n                this.gravityAccelerate(-1);\n            }\n        } else {\n            this.gravityAccelerate(0.4);\n        }\n\n\n        \n        // this.ctx.beginPath();\n        // this.ctx.rect(this.posX, this.posY, this.width, this.height);\n        // this.ctx.fillStyle = \"#FF0000\";\n        // this.ctx.fill();\n        // this.ctx.closePath();\n        // console.log(this.posY)\n        if (this.posY < 400) {\n            this.animateBoard();\n        } else if (!this.didFall) {\n            this.currentBoardFrame = this.board1;\n            this.ctx.drawImage(this.currentBoardFrame, this.posX, this.posY, this.width, this.height)\n        } else if (this.didFall) {\n            this.keyMap[68] = false;\n            this.ctx.drawImage(this.board3, this.posX, this.posY, this.width, this.height)\n        }\n        \n        \n        // console.log(this.posY);\n\n    }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skateboard);\n\n\n\n//# sourceURL=webpack:///./src/javascript/Skateboard.js?");

/***/ }),

/***/ "./src/javascript/World.js":
/*!*********************************!*\
  !*** ./src/javascript/World.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Skateboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Skateboard */ \"./src/javascript/Skateboard.js\");\n/* harmony import */ var _Ground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ground */ \"./src/javascript/Ground.js\");\n/* harmony import */ var _obstacles_ObstacleGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obstacles/ObstacleGenerator */ \"./src/javascript/obstacles/ObstacleGenerator.js\");\n\n\n\n\nclass World {\n    constructor(options) {\n          /////////////////////\n         //Initialize World //\n        /////////////////////\n        this.ctx = options.ctx;\n        this.canvas = options.canvas;\n        this.reset = options.reset;\n        this.updateScore = options.updateScore;\n        this.keyMap = {};\n        this.skateboard = null;\n        this.ground = null;\n        this.level = null;\n        \n        this.gap = null;\n        this.generateRandomObstacle = _obstacles_ObstacleGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n        \n        this.load();\n        this.currentGround = this.level[0];\n        this.handleKeyMap = (e) => {\n            this.keyMap[e.keyCode] = e.type == 'keydown';\n        }\n        \n        // Context Binds //\n        this.load = this.load.bind(this);\n        this.update = this.update.bind(this);\n\n        // Event Listeners //\n        document.addEventListener('keydown', this.handleKeyMap, false);\n        document.addEventListener('keyup', this.handleKeyMap, false);\n        // document.addEventListener('keypress', this.skateboard.landBoard, false);\n            \n    }\n\n    load () {\n        \n    \n        // this.gap = new Gap({\n        //     ctx: this.ctx,\n        //     canvas: this.canvas,\n        //     posX: 800,\n        //     posY: 600,\n        // });\n\n        this.level = [\n            new _Ground__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n                ctx: this.ctx,\n                canvas: this.canvas,\n                skateboard: this.skateboard,\n                keyMap: this.keyMap,\n                reset: this.reset,\n                color: \"#c7c7c7\",\n                startPos: 0,\n                index: 0,\n                currentObstacle: this.generateRandomObstacle({\n                    ctx: this.ctx,\n                    canvas: this.canvas,\n                    posX: 800\n                })\n            }),\n            new _Ground__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n                ctx: this.ctx,\n                canvas: this.canvas,\n                skateboard: this.skateboard,\n                keyMap: this.keyMap,\n                reset: this.reset,\n                color: \"#c7c7c7\",\n                startPos: this.canvas.width * 2,\n                index: 1,\n                currentObstacle: this.generateRandomObstacle({\n                    ctx: this.ctx,\n                    canvas: this.canvas,\n                    posX: (this.canvas.width * 2) + 500\n                })\n            })\n        ]\n\n        this.skateboard = new _Skateboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            ctx: this.ctx,\n            canvas: this.canvas,\n            keyMap: this.keyMap,\n            level: this.level,\n            currentGround: this.level[0]\n        });\n        // debugger\n        \n    }\n\n    update () {\n        // console.log(this.currentGround.color)\n        // this.currentGround = this.level[0]\n        // console.log(this.currentGround.posX)\n        // console.log(this.currentGround.rightEdge)\n        if (this.currentGround.rightEdge < 0 ) {\n            // debugger\n            this.updateScore();\n            this.level.push(this.level.shift());\n            // this.currentGround.currentObstacle = null;\n            this.currentGround = this.level[0];\n            // debugger\n            this.level[0].posX = 0\n            this.level[1].posX = this.canvas.width * 2\n            this.level[1].currentObstacle = this.generateRandomObstacle({\n                ctx: this.ctx,\n                canvas: this.canvas,\n                posX: this.level[1].posX + 1000\n            });\n            this.skateboard.currentGround = this.level[0];\n            \n        }\n        \n    }\n \n\n    render () {\n        this.update();\n        for (let i = 0; i < this.level.length; i++) {\n            this.level[i].render();\n        }\n        \n        // this.gap.render();\n        this.ctx.shadowColor = 'black';\n        this.ctx.shadowBlur = 5;\n        this.skateboard.render();\n        this.ctx.shadowBlur = 0;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (World);\n\n//# sourceURL=webpack:///./src/javascript/World.js?");

/***/ }),

/***/ "./src/javascript/obstacles/Dumpster.js":
/*!**********************************************!*\
  !*** ./src/javascript/obstacles/Dumpster.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Dumpster {\n    constructor(options) {\n        this.type = 'notGap';\n        this.ctx = options.ctx;\n        this.canvas = options.canvas;\n        this.posX = options.posX;\n        this.posY = 425;\n        this.dumpster = new Image();\n        this.dumpster.src = './src/skateAssets/dumpster.png';\n\n        //Dimensions\n        this.width = 225;\n        this.height = 200;\n\n        //Edges\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n    }\n\n    update() {\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n    }\n\n\n    render() {\n        this.update();\n        // this.ctx.beginPath();\n        // this.ctx.rect(this.posX, this.posY, this.width, this.height);\n        // this.ctx.fillStyle = \"red\";\n        // this.ctx.fill();\n        // this.ctx.closePath();\n        \n        this.ctx.drawImage(this.dumpster, this.posX, this.posY, this.width, this.height)\n\n\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dumpster);\n\n//# sourceURL=webpack:///./src/javascript/obstacles/Dumpster.js?");

/***/ }),

/***/ "./src/javascript/obstacles/Gap.js":
/*!*****************************************!*\
  !*** ./src/javascript/obstacles/Gap.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Gap {\n    constructor(options){\n        this.type = 'gap';\n        this.ctx = options.ctx;\n        this.canvas = options.canvas;\n        this.posX = options.posX;\n        this.posY = 600;\n        this.warning = new Image();\n        this.warning.src = './src/skateAssets/dangerSign.png'\n\n        //Dimensions\n        this.width = 750;\n        this.height = 200;\n\n        //Edges\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n    }\n\n    update () {\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n    }\n\n    render () {\n\n        \n        this.update();\n        this.ctx.drawImage(this.warning, this.posX - 300, this.posY - 200, 200, 200)\n        this.ctx.beginPath();\n        let gradient = this.ctx.createLinearGradient(this.width / 2, 600, this.width / 2, this.posY + this.height);\n        gradient.addColorStop(0, \"#afafaf\");\n        gradient.addColorStop(1, \"black\");\n        this.ctx.fillStyle = gradient;\n        this.ctx.rect(this.posX, this.posY, this.width, this.height);\n        this.ctx.fill();\n        this.ctx.closePath();\n\n    \n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gap);\n\n//# sourceURL=webpack:///./src/javascript/obstacles/Gap.js?");

/***/ }),

/***/ "./src/javascript/obstacles/Hydrant.js":
/*!*********************************************!*\
  !*** ./src/javascript/obstacles/Hydrant.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Hydrant {\n    constructor(options) {\n        this.type = 'notGap';\n        this.ctx = options.ctx;\n        this.canvas = options.canvas;\n        this.posX = options.posX;\n        this.posY = 475;\n        this.hydrant = new Image();\n        this.hydrant.src = './src/skateAssets/hydrant.png';\n\n        //Dimensions\n        this.width = 125;\n        this.height = 125;\n\n        //Edges\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n    }\n\n    update() {\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n    }\n\n\n    render() {\n        this.update();\n        // this.ctx.beginPath();\n        // this.ctx.rect(this.posX, this.posY, this.width, this.height);\n        // this.ctx.fillStyle = \"red\";\n        // this.ctx.fill();\n        // this.ctx.closePath();\n        \n        this.ctx.drawImage(this.hydrant, this.posX, this.posY, this.width, this.height)\n\n\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hydrant);\n\n//# sourceURL=webpack:///./src/javascript/obstacles/Hydrant.js?");

/***/ }),

/***/ "./src/javascript/obstacles/ObstacleGenerator.js":
/*!*******************************************************!*\
  !*** ./src/javascript/obstacles/ObstacleGenerator.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Trash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Trash */ \"./src/javascript/obstacles/Trash.js\");\n/* harmony import */ var _Gap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gap */ \"./src/javascript/obstacles/Gap.js\");\n/* harmony import */ var _Hydrant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hydrant */ \"./src/javascript/obstacles/Hydrant.js\");\n/* harmony import */ var _Dumpster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dumpster */ \"./src/javascript/obstacles/Dumpster.js\");\n\n\n\n\n\nconst generateRandomObstacle = (options) => {\n    const posX = options.posX;\n    const ctx = options.ctx;\n    const canvas = options.canvas;\n\n    const obstacles = [\n        _Trash__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        _Gap__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        _Hydrant__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _Dumpster__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ]\n\n    const getRandomInt = (max) => {\n        return Math.floor(Math.random() * Math.floor(max));\n    }\n    let obstacleNo = getRandomInt(obstacles.length)\n    \n    return new obstacles[obstacleNo]({\n        ctx: ctx,\n        canvas: canvas,\n        posX: posX\n    });\n    \n}\n    \n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (generateRandomObstacle);\n\n//# sourceURL=webpack:///./src/javascript/obstacles/ObstacleGenerator.js?");

/***/ }),

/***/ "./src/javascript/obstacles/Trash.js":
/*!*******************************************!*\
  !*** ./src/javascript/obstacles/Trash.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Trash {\n    constructor(options) {\n        this.type = 'notGap';\n        this.ctx = options.ctx;\n        this.canvas = options.canvas;\n        this.posX = options.posX;\n        this.posY = 475;\n        this.trash = new Image();\n        this.trash.src = './src/skateAssets/trash.png';\n\n        //Dimensions\n        this.width = 125;\n        this.height = 125;\n\n        //Edges\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n    }\n\n    update () {\n        this.leftEdge = this.posX;\n        this.rightEdge = this.posX + this.width;\n    }\n\n\n    render () {\n        this.update();\n        // this.ctx.beginPath();\n        // this.ctx.rect(this.posX, this.posY, this.width, this.height);\n        // this.ctx.fillStyle = \"red\";\n        // this.ctx.fill();\n        // this.ctx.closePath();\n        \n        this.ctx.drawImage(this.trash, this.posX, this.posY, this.width, this.height)\n       \n        \n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trash);\n\n//# sourceURL=webpack:///./src/javascript/obstacles/Trash.js?");

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