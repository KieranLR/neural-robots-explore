import Sprite from "./Sprite";
import * as PIXI from "pixi.js";

export default class FilteredSprite extends Sprite {
    constructor(...args){
        super(...args);
        this.filters = args[3];
    }

    init() {
        super.init();
        this.sprite.filterArea = new PIXI.Rectangle(0, 0, this.game.app.screen.width, this.game.app.screen.height);
        this.sprite.filters = this.filters;

    };

    update() {
        super.update();
    };
}