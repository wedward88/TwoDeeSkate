
import World from './World';


class Game {
    constructor(options) {
        this.canvas = document.getElementById('skateCanvas');
        this.ctx = this.canvas.getContext('2d');
        
        
        this.updateState = this.updateState.bind(this);
        this.renderGame = this.renderGame.bind(this);
        this.resetGame = this.resetGame.bind(this);

        this.world = new World({
            canvas: this.canvas,
            ctx: this.ctx,
            reset: this.updateState
        });

        this.state = {
            reset: false
        }
        
    }

    resetGame () {
        // debugger
        // this.state.render = true;
        this.world = new World({
            canvas: this.canvas,
            ctx: this.ctx,
            reset: this.updateState
        });
    }

    updateState() {
       
        this.state.reset = true;
    }
    


    renderGame () {
        
        if (this.state.reset) {
            this.state.reset = false;
            this.resetGame();
        }
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.world.render();
        
    }
}

export default Game;