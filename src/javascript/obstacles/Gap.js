class Gap {
    constructor(options){
        this.ctx = options.ctx;
        this.canvas = options.canvas;
        this.posX = options.posX;
        this.posY = options.posY;

        //Dimensions
        this.width = 500;
        this.height = 1000;

        //Edges
        this.leftEdge = this.posX;
        this.rightEdge = this.posX + this.width;
    }

    update () {
        this.leftEdge = this.posX;
        this.rightEdge = this.posX + this.width;
    }

    render () {
        this.update();
        this.ctx.beginPath();
        this.ctx.rect(this.posX, this.posY, this.width, this.height);
        this.ctx.fillStyle = "#eee";
        this.ctx.fill();
        this.ctx.closePath();

    }
}

export default Gap;