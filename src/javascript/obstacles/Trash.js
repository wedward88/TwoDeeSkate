

class Trash {
    constructor(options) {
        this.type = 'notGap';
        this.ctx = options.ctx;
        this.canvas = options.canvas;
        this.posX = options.posX;
        this.posY = 475;
        this.trash = new Image();
        this.trash.src = './src/skateAssets/trash.png';

        //Dimensions
        this.width = 125;
        this.height = 125;

        //Edges
        this.top = this.posY
        this.leftEdge = this.posX;
        this.rightEdge = this.posX + this.width;
    }

    update () {
        this.leftEdge = this.posX;
        this.rightEdge = this.posX + this.width;
    }


    render () {
        this.update();
        // this.ctx.beginPath();
        // this.ctx.rect(this.posX, this.posY, this.width, this.height);
        // this.ctx.fillStyle = "red";
        // this.ctx.fill();
        // this.ctx.closePath();
        this.ctx.shadowBlur = 5;
        this.ctx.drawImage(this.trash, this.posX, this.posY, this.width, this.height)
        this.ctx.shadowBlur = 0;
        
    }

}

export default Trash;