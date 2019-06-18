class Gap {
    constructor(options){
        this.type = 'gap';
        this.ctx = options.ctx;
        this.canvas = options.canvas;
        this.posX = options.posX;
        this.posY = 600;
        this.warning = new Image();
        this.warning.src = './src/skateAssets/dangerSign.png'

        //Dimensions
        this.width = 700;
        this.height = 200;

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
        this.ctx.drawImage(this.warning, this.posX - 300, this.posY - 200, 200, 200)
        this.ctx.beginPath();
        let gradient = this.ctx.createLinearGradient(this.width / 2, this.posY - 20, this.width / 2, this.posY + 100);
        gradient.addColorStop(0, "#afafaf");
        gradient.addColorStop(1, "black");
        this.ctx.fillStyle = gradient;
        this.ctx.rect(this.posX, this.posY, this.width, this.height);
        this.ctx.fill();
        this.ctx.closePath();

    
    }
}

export default Gap;