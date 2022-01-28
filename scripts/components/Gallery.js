import Container from "./Container";

class Gallery extends Container {
    constructor(item) {
        super(item);
        this.title = item.title;
    }

    render() {
        let container = super.render();
        for (let field of this.item.fields) {
            let input = document.createElement('input');
            input.placeholder = field.label;
            input.type = 'file';
            input.name = field.property;
            input.classList = 'input-img';
            container.append(input);
        }
        return container;
    }
}

export default Gallery;