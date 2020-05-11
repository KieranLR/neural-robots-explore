import GameObject from "./../GameObject";
import NoiseHelper from "../../../utilities/NoiseUtilities";
import Transform from "../../GameComponents/Transform";
import Sprite from "../../GameComponents/Sprite";
import * as PIXI from "pixi.js";
import FilteredSprite from "../../GameComponents/FilteredSprite";
import {simplexFilterIndividual} from "../../Filters/simplexNoiseIndividual";

export default class NoiseTest extends GameObject {
    constructor(game){
        super();
        this.game = game;
        this.bone = 1;
    }

    init() {
        this.components = {};
        this.components.transform = new Transform();
        this.components.transform.pos.y = -1;
        this.filter = simplexFilterIndividual({
            res: new PIXI.Point(1, 1),
            position: new PIXI.Point(this.bone, this.bone),
        });
        this.components.filteredSprite = new FilteredSprite(this.game, this, "", [this.filter]);
        super.init();
    }

    update() {
        //console.log(this.game.viewport.lastViewport.x);
        super.update();
        this.filter.uniforms.position.x = -1 * this.game.viewport.lastViewport.x / 200;
        this.filter.uniforms.position.y = 1 * this.game.viewport.lastViewport.y / 200;
        this.filter.uniforms.res = {x: 16, y: 1};
    }
}