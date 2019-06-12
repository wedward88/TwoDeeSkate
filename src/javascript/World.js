import Skateboard from './Skateboard';

class World {
    constructor(options) {
        this.ctx = options.ctx;
        this.canvas = options.canvas;
        this.skateboard = new Skateboard({
            ctx: this.ctx,
            canvas: this.canvas
        })


       
        
    }

   

    renderWorld () {
        this.skateboard.renderBoard();
    }
}

export default World;