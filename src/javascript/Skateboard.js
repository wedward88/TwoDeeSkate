

class Skateboard  {
    constructor(options) {
        //Initialize World//
        this.ctx = options.ctx;
        this.canvas = options.canvas;
        this.keyMap = options.keyMap;
        
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
        this.accelerate = this.accelerate.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
        
    }

    accelerate(n) {
        this.gravity = n;
    }


   
    update () {
        this.bottom = this.posY + this.height;
        this.middle = this.width / 2;
        this.top = this.posY;
        this.leftEdge = this.posX;
        this.rightEdge = this.posX + this.width;
    }
    
    render () {
        this.update();
        
        if (this.keyMap[32]) {
            if (this.posY < 550) {
                this.keyMap[32] = false
            } else {
                // this.speedY = 2;
                this.accelerate(-1);
            }
        } else {
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

