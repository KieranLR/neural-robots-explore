import GameObject from "./GameObject";
import Transform from "../GameComponents/Transform";

export default class Actor extends GameObject {
    constructor(){
        super();
        this.components = [new Transform()];
    }
}