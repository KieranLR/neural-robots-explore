import * as PIXI from "pixi.js";
import {Viewport} from "pixi-viewport";
import dogImage from "../assets/images/pKYvW2j.jpg"
import wash from "../assets/images/George-Washington--129326.jpg"
import hunter from "../assets/images/HunterChillah.png"
import nebula from "../assets/images/Nebula.jpg"
import snapChat from "../assets/images/Snapchat-1217206683[1].jpg"
import squad from "../assets/images/squad picture.png"
import Actor from "./GameObjects/Actor";
import NoiseTest from "./GameObjects/Sprites/NoiseTest";

function noScroll() {
    window.scrollTo(0, 0);
}

// add listener to disable scroll
window.addEventListener('scroll', noScroll);

class PixiController {
    constructor(controller, updateController) {
        this.game = {};
        this.game.app = new PIXI.Application({ width: 800, height: 600, backgroundColor: 0x1099bb });
        // create viewport
        this.game.viewport = new Viewport({
            screenWidth: 800,
            screenHeight: 600,
            worldWidth: 800,
            worldHeight: 600,
            interaction: this.game.app.renderer.plugins.interaction // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
        });

        this.gameObjects = [new NoiseTest(this.game), new Actor(this.game)];
        this.updateController = updateController;
        this.controller = controller;
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
            this.controller.appendChild(this.game.app.view);
            //The setup function is a custom function that we created to add the sprites. We will this below
            this.setup();
        }
    }

    //Load Images
    setup() {
        this.game.app.loader
            .add("dog", dogImage)
            .add("wash", wash)
            .add("hunter", hunter)
            .add("nebula", nebula)
            .add("snap", snapChat)
            .add("squad", squad)
            .load(() => this.initialize());
        this.game.app.stage.addChild(this.game.viewport);
        this.game.viewport.drag({wheel: false})
            .decelerate()
            .pinch()
        ;

        const sprite = this.game.viewport.addChild(new PIXI.Sprite(PIXI.Texture.WHITE))
        sprite.tint = 0xff0000;
        sprite.width = sprite.height = 100;
        sprite.position.set(100, 100)

    };

    initialize() {
        //Initialize every Object
        this.gameObjects.forEach((gameObject) => {
            gameObject.init();
        });

        //Initialize App Ticker. This calls Update every frame.
        this.game.app.ticker.add(() => {
            this.update();
        });
    };

    update() {
        //Update Every Object.
        this.gameObjects.forEach((gameObject) => {
            gameObject.update();
        });
    }
}

export default PixiController;