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
        this.left = 0;
        this.right = 0;
        this.top = 0;
        this.leftForce = {x: 0, y: 0};
        this.rightForce = {x: 0, y: 0};
        this.topForce = {x: 0, y: 0};
        this.leftTorque = 0;
        this.rightTorque = 0;
        this.rng = new seedrandom(seed);
        this.speed = .2;
    }

    init() {
        this.components.transform = new Transform();
        this.components.transform.pos.x = 300;
        this.components.transform.pos.y = 400;
        this.components.transform.rotation = -3.1415 / 2;
        this.components.rigidBody = new RigidBody(this.game, this, 300, 400);
        this.components.sprite = new Sprite(this.game, this, "tanks", "Light.png");
        super.init();
        this.components.sprite.sprite.width = 90;
        this.components.sprite.sprite.height = 120;
        //this.game.viewport.follow(this.components.sprite.sprite, {});
    }

    update() {
        //console.log("Got Called");
        super.update();
         this.left = this.rng() * this.speed ;
         this.right = this.rng()  * this.speed;
         this.top = this.rng()  * this.speed;

         const headingx = this.components.transform.getHeading(1.0).x;
         const headingy = this.components.transform.getHeading(1.0).y;
        //
        //
         this.leftForce = {x: headingx * this.left, y: headingy * this.left * 0.25};
         this.rightForce =  {x: headingx * this.right, y: headingy * this.right * 0.25};
         this.topForce =  {x: headingx * this.top, y: headingy * this.top};
         this.leftTorque = this.left * 2000;
         this.rightTorque = this.right * -2000;

         //console.log(headingx);
         this.components.rigidBody.reset();
         this.components.rigidBody.addForce(this.leftForce);
         this.components.rigidBody.addForce(this.rightForce);
         this.components.rigidBody.addForce(this.topForce);
        //
         this.components.rigidBody.addTorque(this.leftTorque);
         this.components.rigidBody.addTorque(this.rightTorque);
    }

    updateInstructions(instructions) {
        this.top = instructions[0][0];
        this.left = instructions[0][1];
        this.right = instructions[0][2];
    }
}