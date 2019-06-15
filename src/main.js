import Game from './javascript/Game';


document.addEventListener('DOMContentLoaded', ()=> {

    let game = new Game();
    
    let animate =  () => {
        game.renderGame();
        requestAnimationFrame(animate);
    }


    requestAnimationFrame(animate);
    
});




