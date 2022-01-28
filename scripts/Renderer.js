import Component from "./Component";

const placeholderID = 'root';

class Renderer {
    constructor(items) {
        this.items = items;
    }

    render() {
        
        console.log(this.items);

        let rootContainer = document.getElementById(placeholderID);

        for (let item of this.items) {
            let itemComponent = new Component(item);
            rootContainer.append(itemComponent.render());
        }
    }
}

export default Renderer;