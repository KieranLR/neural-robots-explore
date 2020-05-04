import GameComponent from "./GameComponent";
import * as PIXI from "pixi.js";
export default class Sprite extends GameComponent {
    constructor(game, parent, name){
        super();

        this.game = game;
        this.name = name;
        this.parent = parent;

    }

    init() {
        if (this.name && this.name !== "") {
            this.sprite = new PIXI.Sprite(this.game.app.loader.resources[this.name].texture);
        }
        else {
            this.sprite = new PIXI.Sprite();
        }
        this.game.viewport.addChild(this.sprite);
        this.sprite.x = this.parent.components.transform.pos.x;
        this.sprite.y = this.parent.components.transform.pos.y;
        this.sprite.scale.x = .5;
        this.sprite.scale.y = .5;
    };

    update() {
        //console.log(this.avatar.x);
        //console.log(this.avatar.y);
        this.sprite.x = this.parent.components.transform.pos.x;
        this.sprite.y = this.parent.components.transform.pos.y;
    };
}