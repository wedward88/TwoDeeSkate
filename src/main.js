import Skateboard from './javascript/skateboard'

document.addEventListener('DOMContentLoaded', ()=> {
    let canvas = document.getElementById('skateCanvas');

    // let boardImage = new Image(256, 64);
    // boardImage.src = "skateAssets/board1.png"

    let board1 = new Skateboard({
        context: canvas.getContext('2d'),
        // image: boardImage
    })

    board1.renderBoard();
});