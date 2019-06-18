

class Ground {
    constructor(options) {

        //Initialize//
        this.ctx = options.ctx;
        this.canvas = options.canvas;
        this.skateboard = options.skateboard;
        this.keyMap = options.keyMap;
        this.reset = options.reset;
        this.color = options.color;
        this.resetInvoked = false;
        this.startPos = options.startPos;
        this.currentObstacle = options.currentObstacle || null;
        this.currentObstaclePosX = null;
        this.streetLamp = new Image();
        this.streetLamp.src = './src/skateAssets/streetLamp.png'
        
        // debugger

        //Dimensions//
        this.width = this.canvas.width * 2;
        this.height = this.canvas.height * .25;

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
        this.update = this.update.bind(this);
        this.speedAccelerate = this.speedAccelerate.bind(this);
        this.resetBoard = this.resetBoard.bind(this);

    }

    update () {
        
        if (this.keyMap[68]) {
            this.speedAccelerate(-.8);
            this.speedX += -.1;
        } 

        this.leftEdge = this.posX;
        this.rightEdge = this.posX + this.width;

    }

    speedAccelerate(n) {
        if (this.speedX > -7 && this.speedX < 7) {
            this.speedX += n;
        }
    }

    resetBoard () { 
        this.reset();
    }

    renderStreetLamps () {
        this.ctx.drawImage(this.streetLamp, this.posX, 200, 325, 400)
        this.ctx.drawImage(this.streetLamp, this.posX + 1650, 200, 325, 400) 
    }


    render() {
        
        this.update();
        
        this.ctx.beginPath();
        this.ctx.rect(this.posX, (this.top), this.width, this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
        
        this.renderStreetLamps();
        
        // debugger
        this.currentObstacle.render();
    }
}


export default Ground;