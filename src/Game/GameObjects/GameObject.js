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
        console.log("Got call")
        Object.keys(this.components).forEach((componentKey) => {
            this.components[componentKey].update();
        });
    };
}