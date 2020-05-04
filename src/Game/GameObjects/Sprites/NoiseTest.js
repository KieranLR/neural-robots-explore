import GameObject from "./../GameObject";
import NoiseHelper from "../../../utilities/NoiseUtilities";
import Transform from "../../GameComponents/Transform";
import Sprite from "../../GameComponents/Sprite";
import FilteredSprite from "../../GameComponents/FilteredSprite";
import {simplexFilter} from "../../Filters/simplexNoise";

export default class Actor extends GameObject {
    constructor(game){
        super();
        this.game = game;
    }

    init() {
        this.components = {};
        this.components.transform = new Transform();
        this.components.transform.pos.y = -1;
        this.components.filteredSprite = new FilteredSprite(this.game, this, "", [simplexFilter({})]);
        super.init();
    }

    update() {
        //console.log("Got Called");
        super.update();
    }
}