import Skateboard from './Skateboard';
import Ground from './Ground';

class World {
    constructor(options) {
          /////////////////////
         //Initialize World //
        /////////////////////
        this.ctx = options.ctx;
        this.canvas = options.canvas;
        this.keyMap = {};
        this.skateboard = new Skateboard({
            ctx: this.ctx,
            canvas: this.canvas,
            keyMap: this.keyMap
        
        });

        this.level = new Ground({
            ctx: this.ctx,
            canvas: this.canvas,
            skateboard: this.skateboard,
            keyMap: this.keyMap
        });
  
        
        this.handleKeyMap = (e) => {
            this.keyMap[e.keyCode] = e.type == 'keydown';
        }
        
        // Context Binds //
        // this.initializeLevel = this.initializeLevel.bind(this);
        

        // Event Listeners //
        document.addEventListener('keydown', this.handleKeyMap, false);
        document.addEventListener('keyup', this.handleKeyMap, false);
        // document.addEventListener('keypress', this.skateboard.landBoard, false);
            
    }
 

    render () {
        this.level.render();
        this.skateboard.render();
    
    }
}

export default World;