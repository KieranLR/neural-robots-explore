import GameObject from "./GameObject";
import Transform from "../GameComponents/Transform";
import Sprite from "../GameComponents/Sprite"

export default class Actor extends GameObject {
    constructor(app){
        super();
        this.app = app;
        this.components = {};
        this.banana = "Hey!";
    }

    init() {
        this.components.transform = new Transform();
        this.components.transform.pos.y = -1;
        this.components.sprite = new Sprite(this.app, this, "squad");
        super.init();
    }

    update() {
        //console.log("Got Called");
        super.update();
    }
}