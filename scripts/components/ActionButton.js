import Container from "./Container";

class ActionButton extends Container {
    constructor(item) {
        super(item);
        this.title = item.title;
    }

    render() {
        let container = super.render();
        for (let field of this.item.fields) {
            let input = document.createElement('input');
            input.placeholder = field.label;
            input.type = field.type;
            input.name = field.property;
            input.classList = 'input-title';
            container.append(input);
        }
        return container;
    }
}

export default ActionButton;