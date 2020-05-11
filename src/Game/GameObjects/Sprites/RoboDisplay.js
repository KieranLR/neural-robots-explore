import GameObject from "./../GameObject";
import Transform from "../../GameComponents/Transform";
import * as PIXI from "pixi.js";
import FilteredSprite from "../../GameComponents/FilteredSprite";
import {simplexFilter} from "../../Filters/simplexNoise";
import {simplexFilterIndividual} from "../../Filters/simplexNoiseIndividual";
import Robot from "../Robot";
import Actor from "../Actor";
import RenderedFilter from "../../GameComponents/RenderedFilter";
import * as tf from '@tensorflow/tfjs'

export default class RoboDisplay extends GameObject {
    constructor(game, seed){
        super();
        this.game = game;
        this.robot = new Robot(game, seed);
    }

    init() {
        this.components = {};
        this.components.transform = new Transform();
        this.components.transform.pos.y = 0;
        this.components.transform.pos.x = 0;
        tf.loadLayersModel("./my-model.json").then(
            (model) => {
                this.model = model;
            }
        );



        this.filter = simplexFilterIndividual({
            res: new PIXI.Point(1, 1),
            position: new PIXI.Point(1, 1),
        });
        this.components.filteredSprite = new RenderedFilter(this.game, this, "", [this.filter], 32, 32, {x: 0, y: 0});
        super.init();
        this.robot.init();
        //this.game.viewport.follow(this.robot.components.sprite.sprite);
    }

    testModel(image) {
        if (!this.model) {
            console.log("Model hasn't loaded yet!");
            return;
        }
        const shape = [1, 32, 32, 4];
        const newPrediction = tf.mul(tf.tensor(image, shape), 0.003921);
        //newPrediction.mul(0.003921);

        //tf.print(newPrediction);
        //const prediction = tf.randomUniform([1, 32, 32, 4], 0, 1);
        //console.log(model);
        const newTen = this.model.predict(newPrediction);
        return newTen;
    }

    update() {
        super.update();
        this.robot.update();
        //this.filter.uniforms.position.x = 1 * (this.robot.components.transform.pos.x - 250) / 200;
        //this.filter.uniforms.position.y = -1 * (this.robot.components.transform.pos.y + 8750 ) / 200;


        this.filter.uniforms.position.x = 1 * (this.robot.components.transform.pos.x - 250) / 200;
        this.filter.uniforms.position.y = -1 * (this.robot.components.transform.pos.y - 350) / 200;
        this.filter.uniforms.res = {x: 1, y: 1}

        //console.log(this.game.viewport.lastViewport.y - 300 + this.robot.components.transform.pos.y);
    }
}