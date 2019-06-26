import Skateboard from './Skateboard';
import Ground from './Ground';
import Hydrant from './obstacles/Hydrant';
import generateRandomObstacle from './obstacles/ObstacleGenerator';

class World {
    constructor(options) {
          /////////////////////
         //Initialize World //
        /////////////////////
        this.ctx = options.ctx;
        this.canvas = options.canvas;
        this.reset = options.reset;
        this.updateScore = options.updateScore;
        this.keyMap = options.keyMap;
        this.keyActiveFalse = options.keyActiveFalse;
        this.skateboard = null;
        this.ground = null;
        this.level = null;
        
        this.gap = null;
        this.generateRandomObstacle = generateRandomObstacle;
        
        this.load();
        this.currentGround = this.level[0];
        
        
        // Context Binds //
        this.load = this.load.bind(this);
        this.update = this.update.bind(this);

            
    }

    load () {


        this.level = [
            new Ground({
                ctx: this.ctx,
                canvas: this.canvas,
                skateboard: this.skateboard,
                keyMap: this.keyMap,
                reset: this.reset,
                color: "#c7c7c7",
                startPos: 0,
                index: 0,
                currentObstacle: new Hydrant({
                    ctx: this.ctx,
                    canvas: this.canvas,
                    posX: 800,
                    keyMap: this.keyMap
                }),
            }),
            new Ground({
                ctx: this.ctx,
                canvas: this.canvas,
                skateboard: this.skateboard,
                keyMap: this.keyMap,
                reset: this.reset,
                color: "#c7c7c7",
                startPos: this.canvas.width * 2,
                index: 1,
                currentObstacle: this.generateRandomObstacle({
                    ctx: this.ctx,
                    canvas: this.canvas,
                    posX: (this.canvas.width * 2) + 500
                })
            })
        ]

        this.skateboard = new Skateboard({
            ctx: this.ctx,
            canvas: this.canvas,
            keyMap: this.keyMap,
            level: this.level,
            currentGround: this.level[0],
            keyActiveFalse: this.keyActiveFalse
        });
        // debugger
        
    }

    update () {
        
        if (this.currentGround.rightEdge < 0 ) {
            // debugger
            this.updateScore();
            this.level.push(this.level.shift());
            // this.currentGround.currentObstacle = null;
            this.currentGround = this.level[0];
            // debugger
            this.level[0].posX = 0
            this.level[1].posX = this.canvas.width * 2
            this.level[1].currentObstacle = this.generateRandomObstacle({
                ctx: this.ctx,
                canvas: this.canvas,
                posX: this.level[1].posX + 1000,
                keyMap: this.keyMap
            });
            this.skateboard.currentGround = this.level[0];
            
        }
        
    }
 

    render () {

        this.update();
        
        for (let i = 0; i < this.level.length; i++) {
            this.level[i].render();
        }
        // this.gap.render();
        this.ctx.shadowColor = 'black';
        this.ctx.shadowBlur = 5;
        this.skateboard.render();
        this.ctx.shadowBlur = 0;
        
    }
}

export default World;