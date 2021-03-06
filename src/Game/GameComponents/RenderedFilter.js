import Sprite from "./Sprite";
import * as PIXI from "pixi.js";
import {testModel} from "../../utilities/TensorFlowUtilities";
import GameComponent from "./GameComponent";

export default class RenderedFilter extends GameComponent {
    constructor(...args){
        super(...args);
        this.game = args[0];
        this.parent = args[1];
        this.filters = args[3];

        this.width = args[4] ? args[4] : this.game.app.screen.width;
        this.height = args[5] ? args[5] : this.game.app.screen.height;
        this.pos = args[6] ? args[6] : {x: 0, y: 0};
        this.wait = 1;
    }

    init() {
        this.r = new PIXI.RenderTexture.create({width: 32, height: 32});
        this.rSprite = new PIXI.Sprite(this.r);
        this.rSprite.filterArea = new PIXI.Rectangle(0, 0, 32, 32);
        this.rSprite.filters = this.filters;
        this.rSprite.width = 32;
        this.rSprite.height = 32;
        this.rSprite.x = 1000;
        this.rSprite.y = 1000;
        this.rSprite.scale.x = 1;
        this.rSprite.scale.y = 1;
        //this.rSprite.anchor.set(0.5, 0.5);
        //this.game.app.renderer.render(this.rSprite, this.r);
        //const image = this.game.app.renderer.plugins.extract.image(this.r);
        //document.body.appendChild(image);
        //console.log(image);
        //testModel(image);
        this.game.app.stage.addChild(this.rSprite);

    };

    update() {
        super.update();
        this.wait++;
        if (this.wait % 2 === 0) {
            //const imgElement = document.getElementById('image');
            //const image = this.game.app.renderer.plugins.extract.image(this.rSprite);
            //console.log(image);
            //image.style.width = "100px";
            //const oldImage = imgElement.firstChild;
            //imgElement.replaceChild(image, oldImage);
            const tensorImage = this.game.app.renderer.plugins.extract.pixels(this.rSprite);
            const roboInstructions = this.parent.testModel(tensorImage);
            if (roboInstructions) {
                this.parent.robot.updateInstructions(roboInstructions.arraySync());
            }//document.body.appendChild(image);
            //console.log(this.rSprite);
        }

    };
}