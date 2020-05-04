import GameObject from "./GameObject";
import Transform from "../GameComponents/Transform";
import Sprite from "../GameComponents/Sprite"
import KeyBoardController from "../GameComponents/KeyboardController";

export default class Actor extends GameObject {
    constructor(game){
        super();
        this.game = game;
        this.components = {};
        this.banana = "Hey!";
    }

    init() {
        this.components.transform = new Transform();
        this.components.transform.pos.y = -1;
        this.components.sprite = new Sprite(this.game, this, "wash");
        this.components.keyBoardController = new KeyBoardController(this.game, this);
        super.init();
    }

    update() {
        //console.log("Got Called");
        super.update();
    }
}