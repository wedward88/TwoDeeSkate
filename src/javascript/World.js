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

        this.level = []
        this.initializeLevel();
        
        
        this.handleKeyMap = (e) => {
            this.keyMap[e.keyCode] = e.type == 'keydown';
            console.log(e);
        }
        
        // Context Binds //
        this.initializeLevel = this.initializeLevel.bind(this);
        

        // Event Listeners //
        document.addEventListener('keydown', this.handleKeyMap, false);
        document.addEventListener('keyup', this.handleKeyMap, false);
        // document.addEventListener('keypress', this.skateboard.landBoard, false);
            
    }

    initializeLevel () {
        let initialX = 0;
        
        for (let i = 0; i < 5; i++) {

            this.level.push(new Ground({
                ctx: this.ctx,
                canvas: this.canvas,
                skateboard: this.skateboard,
                mindTheGap: initialX,
                platformNo: i,
                keyMap: this.keyMap
            }));
            
            initialX += 200;
        }
    }

   

    render () {
        this.level.forEach((ground) => {
            ground.render();
        })
        // this.levelRender();
        
        this.skateboard.render();
    
    }
}

export default World;