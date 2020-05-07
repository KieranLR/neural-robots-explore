import Sprite from "./Sprite";
import * as PIXI from "pixi.js";

export default class FilteredSprite extends Sprite {
    constructor(...args){
        super(...args);
        this.filters = args[3];

        this.width = args[4] ? args[4] : this.game.app.screen.width;
        this.height = args[5] ? args[5] : this.game.app.screen.height;
        this.pos = args[6] ? args[6] : {x: 0, y: 0}
    }

    init() {
        super.init();
        this.sprite.filterArea = new PIXI.Rectangle(this.pos.x, this.pos.y, this.width, this.height);
        this.sprite.filters = this.filters;

    };

    update() {
        super.update();
    };
}