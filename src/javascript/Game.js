
import World from './World';

class Game {
    constructor() {
        this.canvas = document.getElementById('skateCanvas');
        this.ctx = this.canvas.getContext('2d');
        
        this.world = new World({
            canvas: this.canvas,
            ctx: this.ctx
        });
        
        this.renderGame = this.renderGame.bind(this);
        
    }
    


    renderGame () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.world.renderWorld();
        
    }
}

export default Game;