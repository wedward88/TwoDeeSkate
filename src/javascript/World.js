import Skateboard from './Skateboard';
import Ground from './Ground';
import Gap from './obstacles/Gap';

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
        this.level = null;
        this.gap = null;
        
        this.load();
        
        this.handleKeyMap = (e) => {
            this.keyMap[e.keyCode] = e.type == 'keydown';
        }
        
        // Context Binds //
        this.load = this.load.bind(this);
        

        // Event Listeners //
        document.addEventListener('keydown', this.handleKeyMap, false);
        document.addEventListener('keyup', this.handleKeyMap, false);
        // document.addEventListener('keypress', this.skateboard.landBoard, false);
            
    }

    load () {
        
        this.skateboard = new Skateboard({
            ctx: this.ctx,
            canvas: this.canvas,
            keyMap: this.keyMap

        });

        this.gap = new Gap({
            ctx: this.ctx,
            canvas: this.canvas,
            posX: 800,
            posY: 600,
        });

        this.level = new Ground({
            ctx: this.ctx,
            canvas: this.canvas,
            skateboard: this.skateboard,
            keyMap: this.keyMap,
            currentObstacle: this.gap,
            reset: this.reset
        });

        
    }
 

    render () {
        this.level.render();
        this.gap.render();
        this.skateboard.render();
    }
}

export default World;