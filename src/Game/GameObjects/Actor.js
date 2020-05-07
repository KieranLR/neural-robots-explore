import GameObject from "./GameObject";
import Transform from "../GameComponents/Transform";
import Sprite from "../GameComponents/Sprite"
import KeyBoardController from "../GameComponents/KeyboardController";
import RigidBody from "../GameComponents/RigidBody";

export default class Actor extends GameObject {
    constructor(game){
        super();
        this.game = game;
        this.components = {};
        this.banana = "Hey!";
        this.leftForce = {x: 0, y: 0};
        this.rightForce = {x: 0, y: 0};
        this.topForce = {x: 0, y: 0};
        this.leftTorque = 0;
        this.rightTorque = 0;
        this.speed = 2;
    }


    init() {
        this.components.transform = new Transform();
        this.components.transform.pos.x = 0;
        this.components.transform.pos.y = 0;
        this.components.transform.rotation = -3.1415 / 2;
        this.components.rigidBody = new RigidBody(this.game, this, 300, 400);
        this.components.sprite = new Sprite(this.game, this, "wash");
        this.components.keyBoardController = new KeyBoardController(this.game, this, {});
        super.init();
        this.components.sprite.sprite.width = 30;
        this.components.sprite.sprite.height = 40;
        //this.game.viewport.follow(this.components.sprite.sprite, {});
    }

    update() {
        //console.log("Got Called");
        super.update();

        //console.log(this.components.keyBoardController.keys);
        if (this.components.keyBoardController.keys.left) {
            this.leftForce = this.components.transform.getHeading(this.speed);
            this.leftTorque = 300;
        } else {
            this.leftForce = {x: 0, y: 0};
            this.leftTorque = 0;
        }
        if (this.components.keyBoardController.keys.right) {
            this.rightForce = this.components.transform.getHeading(this.speed);
            this.rightTorque = -300;
        } else {
            this.rightForce = {x: 0, y: 0};
            this.rightTorque = 0;
        }
        if (this.components.keyBoardController.keys.up) {
            this.topForce = this.components.transform.getHeading(this.speed)
        } else {
            this.topForce = {x: 0, y: 0};
        }

        this.components.rigidBody.reset();
        this.components.rigidBody.addForce(this.leftForce);
        this.components.rigidBody.addForce(this.rightForce);
        this.components.rigidBody.addForce(this.topForce);

        this.components.rigidBody.addTorque(this.leftTorque);
        this.components.rigidBody.addTorque(this.rightTorque);




    }
}