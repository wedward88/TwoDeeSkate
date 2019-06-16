///this game///

class Trash {
    constructor(options) {
        this.type = 'trash';
        this.ctx = options.ctx;
        this.canvas = options.canvas;
        this.posX = options.posX;
        this.posY = 450;

        //Dimensions
        this.width = 75;
        this.height = 150;

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
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.closePath();
    }

}

export default Trash;