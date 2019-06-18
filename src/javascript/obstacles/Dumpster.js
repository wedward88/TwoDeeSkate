

class Dumpster {
    constructor(options) {
        this.type = 'notGap';
        this.ctx = options.ctx;
        this.canvas = options.canvas;
        this.posX = options.posX;
        this.posY = 425;
        this.dumpster = new Image();
        this.dumpster.src = './src/skateAssets/dumpster.png';

        //Dimensions
        this.width = 225;
        this.height = 200;

        //Edges
        this.top = this.posY + 10
        this.leftEdge = this.posX;
        this.rightEdge = this.posX + this.width;
    }

    update() {
        this.leftEdge = this.posX;
        this.rightEdge = this.posX + this.width;
    }


    render() {
        this.update();
        // this.ctx.beginPath();
        // this.ctx.rect(this.posX, this.posY, this.width, this.height);
        // this.ctx.fillStyle = "red";
        // this.ctx.fill();
        // this.ctx.closePath();
        this.ctx.shadowBlur = 5;
        this.ctx.drawImage(this.dumpster, this.posX, this.posY, this.width, this.height)
        this.ctx.shadowBlur = 0;

    }

}

export default Dumpster;