import GameComponent from "./GameComponent";
import * as PIXI from "pixi.js";
export default class Sprite extends GameComponent {
    constructor(app, parent, name){
        super();

        this.app = app;
        this.name = name;
        this.parent = parent;

    }

    init() {
        console.log(this);
        this.avatar = new PIXI.Sprite(this.app.loader.resources[this.name].texture);
        this.app.stage.addChild(this.avatar);
        this.avatar.x = this.parent.components.transform.pos.x;
        this.avatar.y = this.parent.components.transform.pos.y;
        this.avatar.scale.x = .5;
        this.avatar.scale.y = .5;
    };

    update() {
        //console.log(this.avatar.x);
        //console.log(this.avatar.y);
        this.avatar.x = this.parent.components.transform.pos.x;
        this.avatar.y = this.parent.components.transform.pos.y;
    };
}