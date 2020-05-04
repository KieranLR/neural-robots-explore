import * as PIXI from "pixi.js";
import dogImage from "../assets/images/pKYvW2j.jpg"
import wash from "../assets/images/George-Washington--129326.jpg"
import hunter from "../assets/images/HunterChillah.png"
import nebula from "../assets/images/Nebula.jpg"
import snapChat from "../assets/images/Snapchat-1217206683[1].jpg"
import squad from "../assets/images/squad picture.png"
import Actor from "./GameObjects/Actor";
import NoiseTest from "./GameObjects/Sprites/NoiseTest";
import {noiseFrag} from "./Shaders/basicShader";
import {simpleNoise} from "./Shaders/simplexNoise";

class PixiController {
    constructor(controller, updateController) {
        this.app = new PIXI.Application({ width: 800, height: 600, backgroundColor: 0x1099bb });
        this.gameObjects = [new Actor(this.app), new NoiseTest(this.app)];
        this.updateController = updateController;
        this.controller = controller;
    }

    getApp() {
        return this.app;
    }

    setController(newController) {
        this.controller = newController;
    }

    updatePixiController(element) {
        // the element is the DOM object that we will use as container to add pixi stage(canvas)
        this.updateController(element);
        this.setController(element);
        //now we are adding the application to the DOM element which we got from the Ref.
        //This is called once
        if(this.controller && this.controller.children && this.controller.children.length<=0) {
            this.controller.appendChild(this.app.view);
            //The setup function is a custom function that we created to add the sprites. We will this below
            this.setup();
        }
    }

    setup() {
        this.app.loader
            .add("dog", dogImage)
            .add("wash", wash)
            .add("hunter", hunter)
            .add("nebula", nebula)
            .add("snap", snapChat)
            .add("squad", squad)
            .load(() => this.initialize());
    };

    initialize() {

        this.gameObjects.forEach((gameObject) => {
            gameObject.init();
        });

        const container = new PIXI.Sprite();
        container.filterArea = new PIXI.Rectangle(0, 0, this.app.screen.width, this.app.screen.height);
        this.app.stage.addChild(container);
        const filter = new PIXI.Filter(null, simpleNoise, {
            amount: 10,
        });
        container.filters = [filter];


        this.app.ticker.add(() => {
            this.update();
        });
    };

    update() {
        this.gameObjects.forEach((gameObject) => {
            gameObject.update();
        });
    }
}

export default PixiController;