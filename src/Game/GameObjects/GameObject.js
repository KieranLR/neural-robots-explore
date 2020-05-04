export default class GameObject {
    constructor(){
        this.components = {};
    }

    init() {
        Object.keys(this.components).forEach((componentKey) => {
            this.components[componentKey].init();
        });
    };

    update() {
        Object.keys(this.components).forEach((componentKey) => {
            this.components[componentKey].update();
        });
    };
}