
import World from './World';
import Background from './Background';

class Game {
    constructor(options) {
        this.canvas = document.getElementById('skateCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.scoreBar = new Image();
        this.scoreBar.src = './src/skateAssets/scoreBar.png'
        
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

        this.background = new Background({
            canvas: this.canvas,
            ctx: this.ctx
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
        this.ctx.shadowColor = 'black';
        this.ctx.shadowBlur = 15;
        this.ctx.drawImage(this.scoreBar, 940, 50, 200, 100)
        this.ctx.shadowBlur = 0;
        this.ctx.font = '30px Arial'
        this.ctx.fillStyle = "black"
        this.ctx.fillText(`Score: ${this.state.score}`, 980, 80)
    }
    


    renderGame () {
        
        if (this.state.reset) {
            this.state.reset = false;
            this.resetGame();
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.background.render();
        this.world.render();
        this.drawScore();
        
    
    }
}

export default Game;