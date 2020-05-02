import Component from "react";
export default class Transform extends Component {
    constructor(){
        super();
        this.pos = {x: 0, y: 0};
        this.vel = {x: 0, y: 0};
        this.acc = {x: 0, y: 0};
    }

    init() {
    };

    update() {
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
        this.vel.x += this.acc.x;
        this.vel.y += this.vel.y;
    };
}