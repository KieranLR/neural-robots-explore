import GameComponent from "./GameComponent";
import * as PIXI from "pixi.js";

//Moment of inertia for a 2D box with mass m, width w, and height h
const calcMomentOfInertia = (m, w, h) => {
    return m * (w * w + h * h) / 12;
};

export default class RigidBody extends GameComponent {
    constructor(game, parent, width, height, frictionCoefficient = 1){
        super();

        this.game = game;
        this.parent = parent;
        this.width = width;
        this.height = height;
        this.mass = 1;
        this.coeffictientOfFriction = frictionCoefficient;
        this.momentOfIntertia = calcMomentOfInertia(this.mass, this.width, this.height);
    }

    addForce(force, location) {
        this.parent.components.transform.acc.x += force.x / this.mass;
        this.parent.components.transform.acc.y += force.y / this.mass;

        //Giving location implies the force is Not added at the body's center of mass, and thus a torque must be applied
        if (location) {
            const rx = location.x - this.width / 2;
            const ry = location.y - this.height / 2;
            this.addTorque(rx * force.x - ry * force.y);
        }
    }

    reset() {
        this.resetForces();
        this.resetTorques();
    }

    resetForces() {
        this.parent.components.transform.acc.x = 0;
        this.parent.components.transform.acc.y = 0;
    }

    resetTorques() {
        this.parent.components.transform.angularAcceleration = 0;
    }

    addTorque(torque) {
        this.parent.components.transform.angularAcceleration += torque / this.momentOfIntertia;
    }

    init() {
    };

    update() {

        //Simple friction
        this.parent.components.transform.vel.x *= 0.9;
        this.parent.components.transform.vel.y *= 0.9;
        this.parent.components.transform.angularVelocity *= 0.9;
        //this.addForce({x: this.parent.components.transform.vel.x * -0.01, y: this.parent.components.transform.vel.y * -0.01});
        //Add a friction torque
        //this.addTorque(this.parent.components.transform.angularVelocity * -0.01);

    };



}