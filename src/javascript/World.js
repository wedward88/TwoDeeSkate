import Skateboard from './Skateboard';
import Ground from './Ground';

class World {
    constructor(options) {
          /////////////////////
         //Initialize World //
        /////////////////////
        this.ctx = options.ctx;
        this.canvas = options.canvas;

        this.skateboard = new Skateboard({
            ctx: this.ctx,
            canvas: this.canvas
        });

        this.level = [
            new Ground({
                ctx: this.ctx,
                canvas: this.canvas,
                skateboard: this.skateboard
            }),

            new Ground({
                ctx: this.ctx,
                canvas: this.canvas,
                skateboard: this.skateboard
            }),

            new Ground({
                ctx: this.ctx,
                canvas: this.canvas,
                skateboard: this.skateboard
            })
        ]
        this.initializeLevel();
        
        

        
        
        // Context Binds //
        this.initializeLevel = this.initializeLevel.bind(this);
        this.worldMovement = this.worldMovement.bind(this);
        // this.accelerate = this.accelerate.bind(this);
        this.boardGravity = this.boardGravity.bind(this);
        this.hitGround = this.hitGround.bind(this);
        this.groundSpeed = this.groundSpeed.bind(this);
        this.levelRender = this.levelRender.bind(this);

        // Event Listeners //
        document.addEventListener('keydown', this.skateboard.popBoard, false);
        document.addEventListener('keyup', this.skateboard.landBoard, false);
        document.addEventListener('keydown', this.worldMovement, false);

    
        
    }

    resetSkateboard () {
        this.skateboard = new Skateboard({
            ctx: this.ctx,
            canvas: this.canvas,
            level: this.level
        });
    }

    initializeLevel () {
        let initialX = 0;
        this.level.forEach((ground) => {
            
            ground.posX = initialX;
            initialX += ground.width + 200;
            
        })
    }

    levelRender () {
        this.level.forEach((ground)=>{
            this.boardGravity(ground);
            this.hitGround(ground);
            this.groundSpeed(ground);
            ground.render();
        })
    }

    worldMovement(e) {
        
        this.level.forEach((ground)=> {
           
            if (e.key === 'd') {
                ground.speedX += -1;
                ground.accelerate(-3);
            } else if (e.key === 'a') {
                ground.accelerate(3);
                ground.speedX += 1;

            }

            
        });
    }


    boardGravity(ground) {
        this.skateboard.gravitySpeed += this.skateboard.gravity;
        this.skateboard.posY += this.skateboard.speedY + this.skateboard.gravitySpeed;

        this.hitGround(ground);
    }

    hitGround(ground) {
        //if the board is over an object, then check to see if the board is hitting the 'ground'
        let onGround = (this.skateboard.rightEdge > ground.leftEdge) && (this.skateboard.leftEdge < ground.rightEdge)
        let groundLevel = ground.top - this.skateboard.height;

        if (onGround)  {
            if (this.skateboard.posY > groundLevel) {
                this.skateboard.posY = groundLevel;
                this.skateboard.gravitySpeed = 0;
                
            }
        }
        // } else if ((!onGround) && (this.skateboard.posY > groundLevel) ) {
        //     ground.speedX = 0;
            
        // }
    }

    groundSpeed(ground) {
        // If the bottom of the board is higher than the surface of the ground, then don't apply friction
        
        if (this.skateboard.bottom === ground.top) {
            ground.speedX *= ground.friction;
            ground.posX += ground.speedX;
        } else {
            ground.posX += ground.speedX;
        }
    }

   

    render () {
        this.levelRender();
        this.skateboard.render();
    
    }
}

export default World;