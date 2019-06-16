

class Skateboard  {
    constructor(options) {
        //Initialize World//
        this.ctx = options.ctx;
        this.canvas = options.canvas;
        this.keyMap = options.keyMap;
        this.currentGround = options.currentGround;
        this.currentObstacle = this.currentGround.currentObstacle;
        this.level = options.level;
        
        //Dimensions//
        this.height = 10;
        this.width = 150;

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
        this.gravityAccelerate = this.gravityAccelerate.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
        
        this.boardGravity = this.boardGravity.bind(this);
        this.groundCheck = this.groundCheck.bind(this);
        this.groundSpeed = this.groundSpeed.bind(this);
        
    }

    

    gravityAccelerate(n) {
        this.gravity = n;
    }

    boardGravity() {
        this.gravitySpeed += this.gravity;
        this.posY += this.speedY + this.gravitySpeed;

        this.groundCheck();
    }

    groundCheck() {
        let onGround;
        let otherGround = this.level[1]
        if (this.currentObstacle.type = 'gap'){
            onGround = !(this.leftEdge > this.currentObstacle.leftEdge && this.rightEdge < this.currentObstacle.rightEdge)
        } else {
            onGround = (this.leftEdge > this.currentGround.leftEdge && this.rightEdge < this.currentGround.rightEdge) ||
                       (this.leftEdge > otherGround.leftEdge && this.rightEdge < otherGround.rightEdge) ||
                       (this.leftEdge < this.currentGround.rightEdge && this.rightEdge > otherGround.leftEdge) ||
                       (this.leftEdge < otherGround.leftEdge && this.rightEdge < this.currentGround.rightEdge)
        }
            //if the board is over an object, then check to see if the board is hitting the 'ground'
        if (onGround) {
            // debugger
            let groundLevel = this.currentGround.top - this.height;
            if (this.posY > groundLevel) {
                this.posY = groundLevel;
                this.gravitySpeed = 0;
            }
        } else if (!onGround && (this.posY > 600)) {
            // debugger
            this.currentGround.speedX = 0;
            if (!this.currentGround.resetInvoked) {
                setTimeout(this.currentGround.resetBoard, 1500);
                this.currentGround.resetInvoked = true;
            }
        }
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
            this.currentGround.posX += this.currentGround.speedX;
            this.level[1].speedX = this.currentGround.speedX;
            this.level[1].posX += this.level[1].speedX;
            // this.level[1].posX += this.currentGround.speedX;
            this.currentObstacle.posX += this.currentGround.speedX;
            this.level[1].currentObstacle.posX += this.level[1].speedX;

        }
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
            if (this.posY < 550) {
                this.keyMap[32] = false
            } else {
                // this.speedY = 2;
                this.gravityAccelerate(-1);
            }
        } else {
            this.gravityAccelerate(0.4);
        }
        
        this.ctx.beginPath();
        this.ctx.rect(this.posX, this.posY, this.width, this.height);
        this.ctx.fillStyle = "#FF0000";
        this.ctx.fill();
        this.ctx.closePath();
        
        // console.log(this.posY);

    }
}


export default Skateboard;

