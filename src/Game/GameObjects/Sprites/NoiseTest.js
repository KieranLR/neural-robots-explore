import GameObject from "./../GameObject";
import NoiseHelper from "../../../utilities/NoiseUtilities";
import Transform from "../../GameComponents/Transform";
import Sprite from "../../GameComponents/Sprite";
import * as PIXI from "pixi.js";
import FilteredSprite from "../../GameComponents/FilteredSprite";
import {simplexFilter, simpleNoise} from "../../Filters/simplexNoise";

export default class Actor extends GameObject {
    constructor(game){
        super();
        this.game = game;
        this.bone = 1;
    }

    init() {
        this.components = {};
        this.components.transform = new Transform();
        this.components.transform.pos.y = -1;
        this.filter = simplexFilter({
            position: new PIXI.Point(this.bone, this.bone),
        });
        this.components.filteredSprite = new FilteredSprite(this.game, this, "", [this.filter]);
        super.init();
        console.log(this.game.viewport);
    }

    update() {
        //console.log(this.game.viewport.lastViewport.x);
        super.update();
        this.bone++;
        this.filter.uniforms.position.x = -1 * this.game.viewport.lastViewport.x / 200;
        this.filter.uniforms.position.y = 1 * this.game.viewport.lastViewport.y / 200;
    }
}