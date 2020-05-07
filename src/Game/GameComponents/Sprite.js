import GameComponent from "./GameComponent";
import * as PIXI from "pixi.js";
export default class Sprite extends GameComponent {
    constructor(game, parent, name, subTexture){
        super();

        this.game = game;
        this.name = name;
        this.subTexture = subTexture
        this.parent = parent;
    }

    init() {
        if (this.name && this.name !== "") {
            if (this.subTexture) {
                this.sprite = new PIXI.Sprite(this.game.app.loader.resources[this.name].textures[this.subTexture]);
            }
            else {
                this.sprite = new PIXI.Sprite(this.game.app.loader.resources[this.name].texture);

            }
        }
        else {
            this.sprite = new PIXI.Sprite();
        }
        this.game.viewport.addChild(this.sprite);
        this.sprite.x = this.parent.components.transform.pos.x;
        this.sprite.y = this.parent.components.transform.pos.y;
        this.sprite.scale.x = 0.5 ;
        this.sprite.scale.y = 0.5 ;
        this.sprite.anchor.set(0.5, 0.5);
        this.sprite.rotation = this.parent.components.transform.rotation;
    };

    update() {
        //console.log(this.avatar.x);
        //console.log(this.avatar.y);
        this.sprite.x = this.parent.components.transform.pos.x;
        this.sprite.y = this.parent.components.transform.pos.y;
        this.sprite.rotation = this.parent.components.transform.rotation + 3.1415 / 2;
    };
}