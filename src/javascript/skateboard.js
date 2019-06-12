
class Skateboard  {
    constructor(options) {
        this.ctx = options.ctx;
        this.canvas = options.canvas;
        this.image = options.image;

        this.groundLevel = 600;

        this.skateboardHeight = 10;
        this.skateboardWidth = 150;

        this.skateboardX = (this.canvas.width - this.skateboardWidth) / 2
        this.skateboardY = this.groundLevel;
        this.speedX = 0;
        this.speedY = 0;

        this.gravity = .1;
        this.gravitySpeed = 0;

        
        this.spacePressed = false;

        
        this.popBoard = this.popBoard.bind(this);
        this.landBoard = this.landBoard.bind(this);
        this.hitGround = this.hitGround.bind(this);
        this.renderBoard = this.renderBoard.bind(this);
        this.boardGravity = this.boardGravity.bind(this);
        this.accelerate = this.accelerate.bind(this);

        document.addEventListener('keydown', this.popBoard, false);
        document.addEventListener('keyup', this.landBoard, false);
    }

    accelerate(n) {
        this.gravity = n;
    }

    boardGravity ()  {
        this.gravitySpeed += this.gravity;
        this.skateboardY += this.speedY + this.gravitySpeed;

        this.hitGround();
    }

    hitGround () {
        
        let groundLevel = this.groundLevel;

        if (this.skateboardY > groundLevel) {
            this.skateboardY = groundLevel;
            this.gravitySpeed = 0;
        }

    }


    popBoard (e) {
        if (e.key == " ") {
            this.spacePressed = true;
        }
    }

    landBoard (e) {
        if (e.key == " "){
            this.spacePressed = false;
        }
    }
    
    renderBoard () {
        this.boardGravity();
        
        if (this.spacePressed) {
            if (this.skateboardY > 520) {
            this.accelerate(-1);
            } else {
                this.spacePressed = false;
            }

        } else if (!this.spacePressed) {
             
            this.accelerate(0.4);
         
        }
        
        this.ctx.beginPath();
        this.ctx.rect(this.skateboardX, this.skateboardY, this.skateboardWidth, this.skateboardHeight);
        this.ctx.fillStyle = "#FF0000";
        this.ctx.fill();
        this.ctx.closePath();


    }
}


export default Skateboard;

