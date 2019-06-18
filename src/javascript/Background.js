class Background {
    constructor(options) {
        this.ctx = options.ctx;
        this.canvas = options.canvas;
        this.keyMap = options.keyMap;

        this.bg1 = new Image();
        this.bg2 = new Image();
        this.bg3 = new Image();

        this.bg1.src = './src/skateAssets/bg1.png';
        this.bg2.src = './src/skateAssets/bg2.png';
        this.bg3.src = './src/skateAssets/bg3.png';

        // Dimensions //
        this.width = this.canvas.width / 2;
        this.height = 550

        // Location //
        this.imgPosY = 50;

        this.first = { posX: 0, img: this.bg1 }
        this.second = { posX: this.canvas.width * .5, img: this.bg2 }
        this.third = { posX: this.canvas.width, img: this.bg3 }

        // Images Array //
        this.bgImages = [
            this.first,
            this.second,
            this.third
        ]


        // Movement //
        this.bgSpeed = 0

        // Context Binds //
        this.update = this.update.bind(this);
        // this.backgroundAccelerate = this.backgroundAccelerate.bind(this);

    }

    update () {
        if (this.keyMap[68]) {
            this.bgSpeed += -.5;
        }
        this.backgroundSpeed();
    }


    backgroundSpeed () {
        this.bgSpeed *= .7
        this.first.posX += this.bgSpeed;
        this.second.posX += this.bgSpeed;
        this.third.posX += this.bgSpeed;
    }

    shiftBackground () {
        
        let imgRightEdge = this.bgImages[0].posX + this.width

        if (imgRightEdge < 0) {
            this.bgImages.push(this.bgImages.shift());
            this.bgImages[2].posX = this.canvas.width
        }

        for (let i = 0; i < this.bgImages.length; i++) {
            this.ctx.drawImage(this.bgImages[i].img, this.bgImages[i].posX, this.imgPosY, this.width, this.height)
        }
        

        // this.ctx.drawImage(this.bgImages[1].img, this.bgImages[1].posX, this.imgPosY, this.width, this.height)
        // this.ctx.drawImage(this.bgImages[2].img, this.bgImages[2].posX, this.imgPosY, this.width, this.height)
    }


    render () {
        this.update();
        this.shiftBackground();
        
    }
}

export default Background;