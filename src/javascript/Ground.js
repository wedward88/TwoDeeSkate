

class Ground {
    constructor(options) {

        //Initialize//
        this.ctx = options.ctx;
        this.canvas = options.canvas;
        this.skateboard = options.skateboard;
        this.handleKeyMap = options.handleKeyMap;
        this.keyMap = options.keyMap;
        this.reset = options.reset;
        this.color = options.color;
        this.resetInvoked = false;
        this.startPos = options.startPos;
        this.currentObstacle = options.currentObstacle || null;
        this.currentObstaclePosX = null;
        
        // debugger

        //Dimensions//
        this.width = this.canvas.width * 2;
        this.height = 500;

        // Positioning //
        this.posX = this.startPos;
        
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
        this.speedAccelerate = this.speedAccelerate.bind(this);
        this.resetBoard = this.resetBoard.bind(this);

    }

    update () {

        if (this.keyMap[68]) {
            this.speedAccelerate(-.4);
            this.speedX += -.1;
        } else if (this.keyMap[65]) {
            if (this.posX < 197) {
                this.speedAccelerate(.4);
                this.speedX += .1;
            } else {
                // this.speedAccelerate(.4);
                this.speedX = 0;
            }
        } 

        this.leftEdge = this.posX;
        this.rightEdge = this.posX + this.width;

    }

    speedAccelerate(n) {
        if (this.speedX > -10 && this.speedX < 10) {
            this.speedX += n;
        }
    }

    resetBoard () { 
        this.reset();
    }


    render() {
        
        this.update();
        this.ctx.beginPath();
        this.ctx.rect(this.posX, (this.top), this.width, this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
        // debugger
        this.currentObstacle.render();
    }
}


export default Ground;