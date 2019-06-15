import Skateboard from './Skateboard';
import Ground from './Ground';
import generateRandomObstacle from './obstacles/ObstacleGenerator';

class World {
    constructor(options) {
          /////////////////////
         //Initialize World //
        /////////////////////
        this.ctx = options.ctx;
        this.canvas = options.canvas;
        this.reset = options.reset
        this.keyMap = {};
        this.skateboard = null;
        this.ground = null;
        this.level = null;
        
        this.gap = null;
        this.generateRandomObstacle = generateRandomObstacle;
        
        this.load();
        this.currentGround = this.level[0];
        this.handleKeyMap = (e) => {
            this.keyMap[e.keyCode] = e.type == 'keydown';
        }
        
        // Context Binds //
        this.load = this.load.bind(this);
        this.update = this.update.bind(this);

        // Event Listeners //
        document.addEventListener('keydown', this.handleKeyMap, false);
        document.addEventListener('keyup', this.handleKeyMap, false);
        // document.addEventListener('keypress', this.skateboard.landBoard, false);
            
    }

    load () {
        
    
        // this.gap = new Gap({
        //     ctx: this.ctx,
        //     canvas: this.canvas,
        //     posX: 800,
        //     posY: 600,
        // });

        this.level = [
            new Ground({
                ctx: this.ctx,
                canvas: this.canvas,
                skateboard: this.skateboard,
                keyMap: this.keyMap,
                reset: this.reset,
                color: "#a8ada6",
                startPos: 0,
                index: 0,
                currentObstacle: this.generateRandomObstacle({
                    ctx: this.ctx,
                    canvas: this.canvas,
                    posX: 800
                })
            }),
            new Ground({
                ctx: this.ctx,
                canvas: this.canvas,
                skateboard: this.skateboard,
                keyMap: this.keyMap,
                reset: this.reset,
                color: "black",
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
        });
        debugger
        
    }

    update () {
        // console.log(this.currentGround.color)
        // this.currentGround = this.level[0]
        // console.log(this.currentGround.posX)
        // console.log(this.currentGround.rightEdge)
        if (this.currentGround.rightEdge < 0 ) {
            // debugger
            this.level.push(this.level.shift());
            // this.currentGround.currentObstacle = null;
            this.currentGround = this.level[0];
            // debugger
            this.level[0].posX = 0
            this.level[1].posX = this.canvas.width * 2
            this.level[1].currentObstacle = this.generateRandomObstacle({
                ctx: this.ctx,
                canvas: this.canvas,
                posX: this.level[1].posX + 1000
            });
            this.skateboard.currentGround = this.level[0];
            console.log(this.currentGround.currentObstacle);
        }
        
    }
 

    render () {
        this.update();
        for (let i = 0; i < this.level.length; i++) {
            this.level[i].render();
        }
        
        // this.gap.render();
        this.skateboard.render();
    }
}

export default World;