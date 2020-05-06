import GameObject from "./GameObject";
import Transform from "../GameComponents/Transform";
import Sprite from "../GameComponents/Sprite"
import KeyBoardController from "../GameComponents/KeyboardController";
import RigidBody from "../GameComponents/RigidBody";
import seedrandom from "seedrandom";

export default class Robot extends GameObject {
    constructor(game, seed){
        super();
        this.game = game;
        this.components = {};
        this.leftForce = {x: 0, y: 0};
        this.rightForce = {x: 0, y: 0};
        this.topForce = {x: 0, y: 0};
        this.leftTorque = 0;
        this.rightTorque = 0;
        this.rng = new seedrandom(seed);
    }

    init() {
        this.components.transform = new Transform();
        this.components.transform.pos.x = 300;
        this.components.transform.pos.y = 400;
        this.components.transform.rotation = -3.1415 / 2;
        this.components.rigidBody = new RigidBody(this.game, this, 300, 400);
        this.components.sprite = new Sprite(this.game, this, "tanks", "Light.png");
        super.init();
        this.components.sprite.sprite.width = 300;
        this.components.sprite.sprite.height = 400;
        //this.game.viewport.follow(this.components.sprite.sprite, {});
    }

    update() {
        //console.log("Got Called");
        super.update();
        const left = this.rng();
        const right = this.rng();
        const top = this.rng();

        const headingx = this.components.transform.getHeading().x;
        const headingy = this.components.transform.getHeading().y;


        this.leftForce = {x: headingx * left, y: headingy * left};
        this.rightForce =  {x: headingx * right, y: headingy * right};
        this.topForce =  {x: headingx * top, y: headingy * top};
        this.leftTorque = left * 500;
        this.rightTorque = right * -500;
        this.components.rigidBody.reset();
        this.components.rigidBody.addForce(this.leftForce);
        this.components.rigidBody.addForce(this.rightForce);
        this.components.rigidBody.addForce(this.topForce);

        this.components.rigidBody.addTorque(this.leftTorque);
        this.components.rigidBody.addTorque(this.rightTorque);




    }
}