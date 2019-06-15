///this game///

class Trash {
    constructor(options) {

        this.ctx = options.ctx;
        this.canvas = options.canvas;
        this.posX = options.posX;
        this.posY = options.posY;

        //Dimensions
        this.width = 75;
        this.height = 300;

        //Edges
        this.leftEdge = this.posX;
        this.rightEdge = this.posX + this.width;
    }


    render () {
        this.ctx.beginPath();
        this.ctx.rect(this.posX, this.posY, this.width, this.height);
        this.ctx.fillStyle = "black";
        this.ctx.fill();
        this.ctx.closePath();
    }

}