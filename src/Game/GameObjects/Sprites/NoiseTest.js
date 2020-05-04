import GameObject from "./../GameObject";
import NoiseHelper from "../../../utilities/NoiseUtilities";
export default class Actor extends GameObject {
    constructor(app){
        super();
        this.app = app;
        this.components = {};
        this.noise = new NoiseHelper(10, {perlinGridWidth: 32, perlinGridHeight: 32, cellGridWidth: 64, cellGridHeight: 64});
    }

    init() {
        super.init();
        console.log(this.noise.ridgedPerlin(1 * 0.5, 1 * 0.5));
    }

    update() {
        //console.log("Got Called");
        super.update();
    }
}