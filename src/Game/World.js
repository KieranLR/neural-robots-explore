import NoiseTest from "./GameObjects/Sprites/NoiseTest";
import Actor from "./GameObjects/Actor";
import Robot from "./GameObjects/Robot";
import Note from "./GameObjects/Sprites/Note";
import RoboDisplay from "./GameObjects/Sprites/RoboDisplay";
import {setNotes} from "../Redux/actions";
import {setNote} from "../Redux/actions";

export default class World {
    constructor(game, objects, dispatch, gameData){
        console.log(gameData);
        this.gameObjects = [];

        this.gameObjects.push(new NoiseTest(game));
        this.dispatch = dispatch;
        this.gameData = gameData;
        const clickNote = (noteIndex) => {
            console.log("clicked: " + noteIndex);
            console.log(this.gameData);
            this.gameData.game.notesCollected[noteIndex].collected = true;
            this.dispatch(setNote(noteIndex));
        };
//Add Notes
        objects.messages.forEach((note, index) => {
            this.gameObjects.push(new Note(game, note, () => {clickNote(index)}));
        });

        //Add Robots
        for (let i = 0; i < 25; i++) {
            this.gameObjects.push(new RoboDisplay(game, i));
        }
    }
}