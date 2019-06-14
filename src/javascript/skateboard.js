

class Skateboard  {
    constructor(options) {
        //Initialize World//
        this.ctx = options.ctx;
        this.canvas = options.canvas;
        

        //Dimensions//
        this.height = 10;
        this.width = 150;

        // Positioning //
        this.posX = (this.canvas.width - this.width) / 2;
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

        //Key stroke//
        this.spacePressed = false;

        //Context binds//
        this.popBoard = this.popBoard.bind(this);
        // this.landBoard = this.landBoard.bind(this);
        this.render = this.render.bind(this);
        this.accelerate = this.accelerate.bind(this);
        this.update = this.update.bind(this);
        
    }

    accelerate(n) {
        this.gravity = n;
    }


    popBoard (e) {
        
        if (e.key == " ") {
            this.spacePressed = true;
        }
    
    }

    // landBoard (e) {
    //     if (e.key == " "){
    //         this.spacePressed = false;
    //     }
    // }

    update () {
        this.bottom = this.posY + this.height;
        this.middle = this.width / 2;
        this.top = this.posY;
        this.leftEdge = this.posX;
        this.rightEdge = this.posX + this.width;
    }
    
    render () {
        this.update();
        if (this.spacePressed) {
            if (this.posY > 520) {
                this.accelerate(-1);
            } else {
                this.spacePressed = false;
            }
        } else if (!this.spacePressed) {
            this.accelerate(0.4);
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

