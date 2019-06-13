import Skateboard from './Skateboard';
import Ground from './Ground';

class World {
    constructor(options) {
          /////////////////////
         //Initialize World //
        /////////////////////
        this.ctx = options.ctx;
        this.canvas = options.canvas;
        
        this.ground = new Ground({
            ctx: this.ctx,
            canvas: this.canvas
        });

        this.skateboard = new Skateboard({
            ctx: this.ctx,
            canvas: this.canvas,
            ground: this.ground
        })
        

        // Event Listeners //
        document.addEventListener('keydown', this.skateboard.popBoard, false);
        document.addEventListener('keyup', this.skateboard.landBoard, false);
        document.addEventListener('keydown', this.ground.handleMovement, false);

    
        // Context Binds //
        this.boardGravity = this.boardGravity.bind(this);
        this.hitGround = this.hitGround.bind(this);
        this.groundSpeed = this.groundSpeed.bind(this);
    }

    boardGravity() {
        this.skateboard.gravitySpeed += this.skateboard.gravity;
        this.skateboard.posY += this.skateboard.speedY + this.skateboard.gravitySpeed;

        this.hitGround();
    }

    hitGround() {
        //if the board is over an object, then check to see if the board is hitting the 'ground'
        if (this.skateboard.rightEdge > this.ground.leftEdge && this.skateboard.leftEdge < this.ground.rightEdge)  {
            let groundLevel = this.ground.top - this.skateboard.height;

            if (this.skateboard.posY > groundLevel) {
                this.skateboard.posY = groundLevel;
                this.skateboard.gravitySpeed = 0;
                
            }
        }
    }

    groundSpeed() {
        // If the bottom of the board is higher than the surface of the ground, then don't apply friction
        if (this.skateboard.bottom === this.ground.top) {
            this.ground.speedX *= this.ground.friction;
            this.ground.posX += this.ground.speedX;
        } else {
            this.ground.posX += this.ground.speedX;
        }
    }

   

    renderWorld () {
        this.boardGravity();
        this.groundSpeed();
        this.skateboard.render();
        this.ground.render();
    }
}

export default World;