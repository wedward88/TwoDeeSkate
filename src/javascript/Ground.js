class Ground {
    constructor(options) {

        //Initialize//
        this.ctx = options.ctx;
        this.canvas = options.canvas;

        //Dimensions//
        this.width = 1000;
        this.height = 500;

        // Positioning //
        this.posX = 0;

        // Physics //
        this.friction = .95;
        this.speedX = 0;
        

        // Ground Edges //
        this.top = 600;
        this.leftEdge = this.posX;
        this.rightEdge = this.posX + this.width;

        // Context Binds //
        this.render = this.render.bind(this);
        this.update = this.update.bind(this);
        this.accelerate = this.accelerate.bind(this);
        
    }

    accelerate(n) {
        this.speedX += n;
    }

    update () {
        this.leftEdge = this.posX;
        this.rightEdge = this.posX + this.width;
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