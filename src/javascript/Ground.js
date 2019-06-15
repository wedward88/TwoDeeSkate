class Ground {
    constructor(options) {

        //Initialize//
        this.ctx = options.ctx;
        this.canvas = options.canvas;
        this.skateboard = options.skateboard;
        this.gap = options.mindTheGap;
        this.platformNo = options.platformNo;
        this.handleKeyMap = options.handleKeyMap;
        this.keyMap = options.keyMap;
        this.currentObstacle = options.currentObstacle;
        this.reset = options.reset;
        this.resetInvoked = false

        //Dimensions//
        this.width = 10000;
        this.height = 500;

        // Positioning //
        this.posX = 0;
        
        // Physics //
        this.friction = .98;
        this.speedX = 0;
        

        // Ground Edges //
        this.top = 600;
        this.leftEdge = this.posX;
        this.rightEdge = this.posX + this.width;

        // Context Binds //
        this.render = this.render.bind(this);
        this.update = this.update.bind(this);
        this.accelerate = this.accelerate.bind(this);
        this.boardGravity = this.boardGravity.bind(this);
        this.hitGround = this.hitGround.bind(this);
        this.groundSpeed = this.groundSpeed.bind(this);
        this.resetBoard = this.resetBoard.bind(this);

        // document.addEventListener('keydown', this.movement, false);
        // document.addEventListener('keydown', this.movement, false);
        
        
    }

    accelerate(n) {
        if (this.speedX > -10 && this.speedX < 10) {
            this.speedX += n;
            console.log(this.speedX);
        }
    }

    update () {

        if (this.keyMap[68]) {
            this.accelerate(-.4);
            this.speedX += -.1;
        } else if (this.keyMap[65]) {
            if (this.posX < 197) {
                this.accelerate(.4);
                this.speedX += .1;
            } else {
                // this.accelerate(.4);
                this.speedX = 0;
            }
        } 

        this.leftEdge = this.posX;
        this.rightEdge = this.posX + this.width;
        this.groundSpeed();
        this.boardGravity();

    }


    boardGravity() {
        this.skateboard.gravitySpeed += this.skateboard.gravity;
        this.skateboard.posY += this.skateboard.speedY + this.skateboard.gravitySpeed;

        this.hitGround();
    }

    hitGround() {
        let onGround = !(this.skateboard.leftEdge > this.currentObstacle.leftEdge && this.skateboard.rightEdge < this.currentObstacle.rightEdge)
        //if the board is over an object, then check to see if the board is hitting the 'ground'
        if (onGround) {
            let groundLevel = this.top - this.skateboard.height;

            if (this.skateboard.posY > groundLevel) {
                this.skateboard.posY = groundLevel;
                this.skateboard.gravitySpeed = 0;

            }
        } else if (!onGround && (this.skateboard.posY > 600)) {
                
                this.speedX = 0;
                if(!this.resetInvoked){
                    setTimeout(this.resetBoard, 1500);
                    this.resetInvoked = true;
                }
                
        }
    }

    resetBoard () {
        this.skateboard.posY = 600;
        this.skateboard.posX = -500;
        this.reset();
       
    }

    

    

    groundSpeed() {
        // debugger
        // If the bottom of the board is higher than the surface of the ground, then don't apply friction
        if (this.skateboard.bottom >= this.top) {
            // debugger
            this.speedX *= this.friction;
            this.posX += this.speedX;
            this.currentObstacle.posX += this.speedX;
            
        } else {
            this.posX += this.speedX;
            this.currentObstacle.posX += this.speedX;
            
        }
    }


    render() {
        
        this.update();
        this.ctx.beginPath();
        this.ctx.rect(this.posX, (this.top), this.width, this.height);
        this.ctx.fillStyle = "#a8ada6";
        this.ctx.fill();
        this.ctx.closePath();
    }
}


export default Ground;