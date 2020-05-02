export default class GameObject {
    constructor(){
        this.components = [];
        this.init();
    }

    init() {
        this.components.forEach((component) => {
            component.init();
        });
    };

    update() {
        this.components.forEach((component) => {
            component.update();
        });
    };
}