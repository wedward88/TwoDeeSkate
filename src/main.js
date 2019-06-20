import Game from './javascript/Game';


document.addEventListener('DOMContentLoaded', ()=> {

    let game = new Game();

    
    let animate =  () => {
        setTimeout(()=> {
            game.renderGame();
            requestAnimationFrame(animate);
        }, 1000/60);
        
    }


    requestAnimationFrame(animate);
    
});




