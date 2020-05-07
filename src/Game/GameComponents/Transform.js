import GameComponent from "./GameComponent";
export default class Transform extends GameComponent {
    constructor(){
        super();
        this.pos = {x: 0, y: 0};
        this.vel = {x: 0, y: 0};
        this.acc = {x: 0, y: 0};
        this.scale = {x: 0, y: 0};
        this.rotation = 0;
        this.angularVelocity = 0;
        this.angularAcceleration = 0;
    }

    getHeading(multiply) {
        return {x: Math.cos(this.rotation) * multiply, y: Math.sin(this.rotation) * multiply};
    }

    init() {
    };

    update() {
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
        this.vel.x += this.acc.x;
        this.vel.y += this.acc.y;
        this.rotation += this.angularVelocity;
        this.angularVelocity += this.angularAcceleration;
    };
}