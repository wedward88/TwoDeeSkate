

class Skateboard  {
    constructor(options) {
        //Initialize World//
        this.ctx = options.ctx;
        this.canvas = options.canvas;
        this.keyMap = options.keyMap;
        this.currentGround = options.currentGround;
        this.currentObstacle = this.currentGround.currentObstacle;
        this.level = options.level;
        this.keyActiveFalse = options.keyActiveFalse;
        this.didFall = false;
        
        

        // images //
        this.tickCount = 0;
        this.frameIndex = 0;
        this.ticksPerFrame = 7;
        this.frameNo = 1;

        this.board1 = new Image();
        this.board2 = new Image();
        this.board3 = new Image();
        this.board4 = new Image();
        this.board5 = new Image();

        this.board1.src = './src/skateAssets/board1.png';
        this.board2.src = './src/skateAssets/board2.png';
        this.board3.src = './src/skateAssets/board3.png';
        this.board4.src = './src/skateAssets/board4.png';
        this.board5.src = './src/skateAssets/board5.png';

        this.currentBoardFrame = this.board1;
        
        //Dimensions//
        this.height = 40;
        this.width = 150;
        this.groundLevel = this.currentGround.top - this.height;

        // Positioning //
        this.posX = 200;
        this.posY = 400; 

        //Object Edges//
        this.bottom = this.posY - this.height;
        this.middle = this.width / 2;
        this.top = this.posY;
        this.leftEdge = this.posX;
        this.rightEdge = this.posX + this.width;
        
        //Speed//
        this.speedY = 0;

        //Gravity//
        this.gravity = .1;
        this.gravitySpeed = 0;


        //Context binds//
        
        this.render = this.render.bind(this);
        this.animateBoard = this.animateBoard.bind(this);
        this.gravityAccelerate = this.gravityAccelerate.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
        this.boardGravity = this.boardGravity.bind(this);
        this.collisionCheck = this.collisionCheck.bind(this);
        this.groundSpeed = this.groundSpeed.bind(this);
        
    }

    

    gravityAccelerate(n) {
        this.gravity = n;
    }

    boardGravity() {
        this.gravitySpeed += this.gravity;
        this.posY += this.speedY + this.gravitySpeed;

        this.collisionCheck();
    }

    collisionCheck() {
        let overGap;
    

        

            if (this.currentObstacle.type === 'gap'){
            //     overGap = !(this.leftEdge > this.currentObstacle.leftEdge && this.rightEdge < this.currentObstacle.rightEdge )
            // } else {
                overGap = (this.leftEdge + 20 > this.currentObstacle.leftEdge && this.rightEdge < this.currentObstacle.rightEdge)
            }
            //if the board is over an object, then check to see if the board is hitting the 'ground'
   
            let inObstacle;
            if (this.currentObstacle.type === 'notGap') {
                inObstacle = (this.rightEdge > this.currentObstacle.leftEdge && this.rightEdge < this.currentObstacle.rightEdge && this.bottom > this.currentObstacle.top) ||
                             (this.rightEdge > this.currentObstacle.leftEdge && this.rightEdge < this.currentObstacle.rightEdge && this.top > this.groundLevel) ||
                             (this.leftEdge > this.currentObstacle.leftEdge && this.leftEdge < this.currentObstacle.rightEdge && this.bottom > this.currentObstacle.top) ||
                             (this.leftEdge < this.currentObstacle.leftEdge && this.rightEdge > this.currentObstacle.rightEdge && this.bottom > this.currentObstacle.top)

            } else if (this.currentObstacle.type === 'gap') {
                
                inObstacle = (this.rightEdge > this.currentObstacle.leftEdge && this.rightEdge < this.currentObstacle.rightEdge && this.bottom > this.currentObstacle.top + this.currentObstacle.height) //||
                            //  (this.leftEdge > this.currentObstacle.leftEdge && this.leftEdge < this.currentObstacle.rightEdge && this.bottom > this.currentObstacle.top + 50) ||
                            //  (this.leftEdge < this.currentObstacle.leftEdge && this.rightEdge > this.currentObstacle.rightEdge && this.bottom > this.currentObstacle.top + 50) ||
                            //  (this.bottom === this.currentObstacle.top + 50 && this.leftEdge > this.currentObstacle.leftEdge && this.rightEdge < this.currentObstacle.rightEdge)

            }

            
            
            if ((this.posY > this.groundLevel) && !overGap) {
                this.posY = this.groundLevel;
                this.gravitySpeed = 0;
            } else if ((this.posY > this.groundLevel) && overGap) {
                this.keyActiveFalse();
                this.currentGround.speedX = 0;
            }

            if (this.currentObstacle.type === 'notGap') {
                
                if (inObstacle) {
                    this.keyActiveFalse();
                    this.keyMap[32] = false;
                    this.didFall = true;
                    this.currentGround.speedX = 0;
                    if (!this.currentGround.resetInvoked) {
                        this.currentGround.resetBoard();
                        this.currentGround.resetInvoked = true;
                    }

                }
            } else if (this.currentObstacle.type === 'gap') {
                    
                if (inObstacle) {
                    this.keyActiveFalse();
                    this.keyMap[68] = false;
                    this.currentGround.speedX = 0;
                    if (!this.currentGround.resetInvoked) {
                        setTimeout(this.currentGround.resetBoard, 1500);
                        this.currentGround.resetInvoked = true;
                        this.gameOver = true;
                    }
                }
            }
        // } else if (!overGround && (this.posY > 600)) {
        //     // debugger
        //     this.didFall = true;
        //     this.currentGround.speedX = 0;
        //     if (!this.currentGround.resetInvoked) {
        //         setTimeout(this.currentGround.resetBoard, 1500);
        //         this.currentGround.resetInvoked = true;
        //     }
         
    }

    

    groundSpeed() {
        // debugger
        // If the bottom of the board is higher than the surface of the ground, then don't apply friction
        
        
        if (this.bottom >= this.currentGround.top) {
            // debugger
            this.currentGround.speedX *= this.currentGround.friction;
            this.currentGround.posX += this.currentGround.speedX;
            this.level[1].speedX = this.currentGround.speedX;
            this.level[1].posX += this.level[1].speedX;
            // this.level[1].posX += this.currentGround.speedX;
            this.currentObstacle.posX += this.currentGround.speedX;
            this.level[1].currentObstacle.posX += this.level[1].speedX;
            
        } else {
            this.currentGround.speedX *= .995;
            this.currentGround.posX += this.currentGround.speedX;
            this.level[1].speedX = this.currentGround.speedX;
            this.level[1].posX += this.level[1].speedX;
            // this.level[1].posX += this.currentGround.speedX;
            this.currentObstacle.posX += this.currentGround.speedX;
            this.level[1].currentObstacle.posX += this.level[1].speedX;

        }
    }

    animateBoard () {
        this.tickCount += 1;
        
        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;
            
            if (this.frameNo < 5) {
                this.frameNo += 1;
            } else {
                this.frameNo = 1;
            }
        }

        let boardVal;

        if (this.frameNo === 1) {
            boardVal = this.board1;
        } else if (this.frameNo === 2) {
            boardVal = this.board2;
        } else if (this.frameNo === 3) {
            boardVal = this.board3;
        } else if (this.frameNo === 4) {
            boardVal = this.board4;
        } else if (this.frameNo === 5) {
            boardVal = this.board5;
        }

        this.ctx.drawImage(boardVal, this.posX, this.posY, this.width, this.height)
    }


   
    update () {
        this.bottom = this.posY + this.height;
        this.middle = this.width / 2;
        this.top = this.posY;
        this.leftEdge = this.posX;
        this.rightEdge = this.posX + this.width;
        this.currentObstacle = this.currentGround.currentObstacle;

        this.groundSpeed();
        this.boardGravity();
    }
    
    render () {
        
        this.update();
        if (this.keyMap[32]) {
            if (this.posY < 500) {
                this.keyMap[32] = false
            } else {
                // this.speedY = 2;
                this.gravityAccelerate(-2);
            }
        } else {
            this.gravityAccelerate(0.8);
        }


        
        // this.ctx.beginPath();
        // this.ctx.rect(this.posX, this.posY, this.width, this.height);
        // this.ctx.fillStyle = "#FF0000";
        // this.ctx.fill();
        // this.ctx.closePath();
        // console.log(this.posY)
        if (this.posY < 400) {
            this.animateBoard();
        } else if (!this.didFall) {
            this.currentBoardFrame = this.board1;
            this.ctx.drawImage(this.currentBoardFrame, this.posX, this.posY, this.width, this.height)
        } else if (this.didFall) {
            this.keyMap[68] = false;
            this.ctx.drawImage(this.board3, this.posX, this.posY, this.width, this.height)
        }
        
        
        // console.log(this.posY);

    }
}


export default Skateboard;

