
import World from './World';


class Game {
    constructor(options) {
        this.canvas = document.getElementById('skateCanvas');
        this.ctx = this.canvas.getContext('2d');
        
        
        this.updateState = this.updateState.bind(this);
        this.renderGame = this.renderGame.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.updateScore = this.updateScore.bind(this);

        this.world = new World({
            canvas: this.canvas,
            ctx: this.ctx,
            reset: this.updateState,
            updateScore: this.updateScore
        });

        this.state = {
            reset: false,
            score: 0
        }
        
    }

    resetGame () {
        // debugger
        // this.state.render = true;
        this.world = new World({
            canvas: this.canvas,
            ctx: this.ctx,
            reset: this.updateState,
            updateScore: this.updateScore
        });
    }

    updateState() {
        this.state.score = 0;
        this.state.reset = true;

    }

    updateScore () {
        this.state.score += 1
    }

    drawScore () {
        this.ctx.font = '30px Arial'
        this.ctx.fillText(`Score: ${this.state.score}`, 1000, 100)
    }
    


    renderGame () {
        
        if (this.state.reset) {
            this.state.reset = false;
            this.resetGame();
        }
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawScore();
        this.world.render();
        
    
    }
}

export default Game;