import Trash from './Trash';
import Gap from './Gap';
import Hydrant from './Hydrant';
import Dumpster from './Dumpster';

const generateRandomObstacle = (options) => {
    const posX = options.posX;
    const ctx = options.ctx;
    const canvas = options.canvas;

    const obstacles = [
        Trash,
        Gap,
        Hydrant,
        Dumpster
    ]

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }
    let obstacleNo = getRandomInt(obstacles.length)
    
    return new obstacles[obstacleNo]({
        ctx: ctx,
        canvas: canvas,
        posX: posX
    });
    
}
    


export default generateRandomObstacle;