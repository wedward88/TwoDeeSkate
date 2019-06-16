class Background {
    constructor(options) {
        this.ctx = options.ctx;
        this.canvas = options.canvas;

        this.bg1 = new Image();
        this.bg2 = new Image();
        this.bg3 = new Image();
        this.bg1.src = './src/skateAssets/bg1.png';
        this.bg2.src = './src/skateAssets/bg2.png';
        this.bg3.src = './src/skateAssets/bg3.png';

        // Dimensions //
        this.width = this.canvas.width / 3;
        this.height = 600

        // Location //
        this.bg1posX = 0;
        this.bg1posY = 0;

        this.bg2posX = this.canvas.width * .333;
        this.bg2posY = 0;

        this.bg3posX = this.canvas.width * .66;
        this.bg3posY = 0;

    }

    render () {

        this.ctx.drawImage(this.bg1, this.bg1posX, this.bg1posY, this.width, this.height)
        this.ctx.drawImage(this.bg2, this.bg2posX, this.bg2posY, this.width, this.height)
        this.ctx.drawImage(this.bg3, this.bg3posX, this.bg3posY, this.width, this.height)
    }
}

export default Background;