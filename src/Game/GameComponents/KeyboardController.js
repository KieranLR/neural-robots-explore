import GameComponent from "./GameComponent";
import keyboard from "../../utilities/Keyboard";
export default class KeyBoardController extends GameComponent {
    constructor(app, parent, callBacks){
        super();
        this.left = keyboard("ArrowLeft");
        this.right = keyboard("ArrowRight");
        this.up = keyboard("ArrowUp");
        this.down = keyboard("ArrowDown");
        this.keys = {up: false, down: false, left: false, right: false};
        this.callBacks = callBacks;
        this.parent = parent;
    }

    init() {
        //Left arrow key `press` method
        this.left.press = () => {
            if (this.callBacks.left) {
                this.callBacks.left();
            }
            this.keys.left = true;
        };
        //Left arrow key `release` method
        this.left.release = () => {
            this.keys.left = false;
        };

        //Right arrow key `press` method
        this.right.press = () => {
            if (this.callBacks.right) {
                this.callBacks.right();
            }
            this.keys.right = true;
        };
        //Right arrow key `release` method
        this.right.release = () => {
            this.keys.right = false;
        };

        //Up arrow key `press` method
        this.up.press = () => {
            if (this.callBacks.up) {
                this.callBacks.up();
            }
            this.keys.up = true;
        };
        //Up arrow key `release` method
        this.up.release = () => {
            this.keys.up = false;
        };

        //Down arrow key `press` method
        this.down.press = () => {
            if (this.callBacks.down) {
                this.callBacks.down();
            }
            this.keys.down = true;
        };
        //Down arrow key `release` method
        this.down.release = () => {
            this.keys.down = false;
        };

    };

    update() {
    };
}