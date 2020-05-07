import NoiseTest from "./GameObjects/Sprites/NoiseTest";
import Actor from "./GameObjects/Actor";
import Robot from "./GameObjects/Robot";
import RoboDisplay from "./GameObjects/Sprites/RoboDisplay";

export default class World {
    constructor(game){

        this.gameObjects = [
            //Background
            new NoiseTest(game),

            //Player
            //new Actor(game),

            //Robots
            new RoboDisplay(game)
            // new Robot(game, 1),
            // new Robot(game, 2),
            // new Robot(game, 3),
            // new Robot(game, 4),
            // new Robot(game, 5)
        ];
    }
}