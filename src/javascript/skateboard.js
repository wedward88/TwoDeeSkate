
class Skateboard  {
    constructor(options) {
        this.context = options.context;
        this.image = options.image;
        this.skateboardHeight = 10;
        this.skateboardWidth = 150;
    }

    moveBoard () {
        document.addEventListener('keydown', keyDownHandler, false);
        document.addEventListener('keyup', keyUpHandler, false);

        
    }
    
    renderBoard () {
        // this.context.drawImage(this.image, 0, 0)
        this.context.beginPath();
        this.context.rect(20, 600, this.skateboardWidth, this.skateboardHeight);
        this.context.fillStyle = "#FF0000";
        this.context.fill();
        this.context.closePath();
    }
}


export default Skateboard;

