import GameObject from "./../GameObject";
import Transform from "../../GameComponents/Transform";
import * as PIXI from "pixi.js";
import FilteredSprite from "../../GameComponents/FilteredSprite";
import {simplexFilter} from "../../Filters/simplexNoise";
import {simplexFilterIndividual} from "../../Filters/simplexNoiseIndividual";
import Robot from "../Robot";
import Actor from "../Actor";
import RenderedFilter from "../../GameComponents/RenderedFilter";

export default class RoboDisplay extends GameObject {
    constructor(game){
        super();
        this.game = game;
        this.robot = new Actor(game, 1);
    }

    init() {
        this.components = {};
        this.components.transform = new Transform();
        this.components.transform.pos.y = 0;
        this.components.transform.pos.x = 0;

        this.filter = simplexFilterIndividual({
            position: new PIXI.Point(1, 1),
        });
        this.components.filteredSprite = new RenderedFilter(this.game, this, "", [this.filter], 32, 32, {x: 0, y: 0});
        super.init();
        this.robot.init();
        this.game.viewport.follow(this.robot.components.sprite.sprite);
    }

    update() {
        super.update();
        this.robot.update();
        this.filter.uniforms.position.x = 1 * (this.robot.components.transform.pos.x - 250) / 200;
        this.filter.uniforms.position.y = -1 * (this.robot.components.transform.pos.y + 8750 ) / 200;
        //console.log(this.game.viewport.lastViewport.y - 300 + this.robot.components.transform.pos.y);
    }
}