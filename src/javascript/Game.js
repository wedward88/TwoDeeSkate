
import World from './World';
import Background from './Background';

class Game {
    constructor(options) {
        this.canvas = document.getElementById('skateCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.scoreBar = new Image();
        this.scoreBar.src = './src/skateAssets/scoreBar.png'
        this.keyMap = {};
        this.startButton = document.getElementById('start-button');
        this.restartGameButton = document.getElementById('restart-button');
        this.helpButton = document.getElementById('help-button');
        this.muteButton  = document.getElementById('mute-button');

        // Background Music //
        this.music = document.createElement('audio');
        this.music.src = './src/skateAssets/misirlou.mp3';
        this.music.setAttribute("preload", "auto");
        this.music.setAttribute("controls", "none");
        this.music.style.display = "none";
        this.music.volume = .25;
        document.body.appendChild(this.music);

        //////////////////////
        
        this.triggerReset = this.triggerReset.bind(this);
        this.renderGame = this.renderGame.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.updateScore = this.updateScore.bind(this);
        this.startGame = this.startGame.bind(this);
        this.gameOver = this.gameOver.bind(this);
        this.muteMusic = this.muteMusic.bind(this);

        this.handleKeyMap = (e) => {
            this.keyMap[e.keyCode] = e.type == 'keydown';
        }

        // Event Listeners //
        document.addEventListener('keydown', this.handleKeyMap, false);
        document.addEventListener('keyup', this.handleKeyMap, false);
        this.startButton.addEventListener('click', this.startGame, false);
        this.restartGameButton.addEventListener('click', this.triggerReset, false);
        this.helpButton.addEventListener('click', this.help, false);
        this.muteButton.addEventListener('click', this.muteMusic, false)
        
        this.world = null;

        this.background = new Background({
            canvas: this.canvas,
            ctx: this.ctx,
            keyMap: this.keyMap

        });

        this.state = {
            reset: false,
            score: 0
        }
        
    }

    muteMusic () {
        if (this.music.paused) {
            this.music.play();
        } else {
            this.music.pause();
        }
    }

    startGame () {
        document.getElementById('start-modal').classList.add("hidden");
        this.triggerReset();
        this.music.play();
    }
    
    gameOver () {
        let ul = document.getElementById('score');
        let score = document.createElement('li');
        score.appendChild(document.createTextNode(`${this.state.score}`));
        ul.appendChild(score);
        document.getElementById('game-over-modal').classList.remove("hidden");
    }
    
    help () {
        document.getElementById('game-over-modal').classList.add("hidden");
        document.getElementById('start-modal').classList.remove("hidden");
    }

    resetGame () {
        if (!this.music.paused) {
            this.music.pause();
            this.music.currentTime = 0;
            this.music.play();
        }
        let score = document.getElementById('score');
        if (score.hasChildNodes()) {
            score.removeChild(score.childNodes[0]);
        }
        document.getElementById('game-over-modal').classList.add("hidden")
        

        this.world = new World({
            canvas: this.canvas,
            ctx: this.ctx,
            reset: this.gameOver,
            updateScore: this.updateScore,
            keyMap: this.keyMap
        });

        this.background = new Background({
            canvas: this.canvas,
            ctx: this.ctx,
            keyMap: this.keyMap

        });
    }

    triggerReset() {
        this.state.score = 0;
        this.state.reset = true;

    }

    updateScore () {
        this.state.score += 1
    }

    drawScore () {
        this.ctx.shadowColor = 'black';
        this.ctx.shadowBlur = 15;
        this.ctx.drawImage(this.scoreBar, 940, 18, 200, 100)
        this.ctx.shadowBlur = 0;
        this.ctx.font = '30px Nothing You Could Do'
        this.ctx.fillStyle = "black"
        this.ctx.fillText(`SCORE: ${this.state.score}`, 980, 50)
    }
    


    renderGame () {
        
        if (this.state.reset) {
            this.state.reset = false;
            this.resetGame();
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.background.render();
        if (this.world) this.world.render();
        this.drawScore();
        
    
    }
}

export default Game;