import GameComponent from "./GameComponent";
import keyboard from "../../utilities/Keyboard";
export default class KeyBoardController extends GameComponent {
    constructor(app, parent){
        super();
        this.left = keyboard("ArrowLeft");
        this.right = keyboard("ArrowRight");
        this.up = keyboard("ArrowUp");
        this.down = keyboard("ArrowDown");
        this.parent = parent;
    }

    init() {
        //Left arrow key `press` method
        this.left.press = () => {
            //Change the velocity when the key is pressed
            this.parent.components.transform.vel.x = -2;
        };
        //Left arrow key `release` method
        this.left.release = () => {
            //If the left arrow has been released, and the right arrow isn't down,
            //Set horiz velocity to 0
            if (!this.right.isDown) {
                this.parent.components.transform.vel.x = 0;
            }
        };


        //Right arrow key `press` method
        this.right.press = () => {
            //Change the velocity when the key is pressed
            this.parent.components.transform.vel.x = 2;
        };

        //Right arrow key `release` method
        this.right.release = () => {
            //If the right arrow has been released, and the left arrow isn't down,
            //Set horiz velocity to 0
            if (!this.left.isDown) {
                this.parent.components.transform.vel.x = 0;
            }
        };

        //up arrow key `press` method
        this.up.press = () => {
            //Change the velocity when the key is pressed
            this.parent.components.transform.vel.y = -2;
        };

        //Up arrow key `release` method
        this.up.release = () => {
            //If the up arrow has been released, and the Down arrow isn't down,
            //Set horiz velocity to 0
            if (!this.down.isDown) {
                this.parent.components.transform.vel.y = 0;
            }
        };

        //down arrow key `press` method
        this.down.press = () => {
            //Change the velocity when the key is pressed
            this.parent.components.transform.vel.y = 2;
        };

        //Down arrow key `release` method
        this.down.release = () => {
            //If the Down arrow has been released, and the Up arrow isn't down,
            //Set horiz velocity to 0
            if (!this.up.isDown) {
                this.parent.components.transform.vel.y = 0;
            }
        };
    };

    update() {
    };
}