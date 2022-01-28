import ActionButton from "./components/ActionButton";
import Gallery from "./components/Gallery";
import Image from "./components/Image";
import RichText from "./components/RichText";
import Title from "./components/Title";

class Component {
    constructor(item) {
        
        switch (item.type) {
            case 'TITLE':
                this.component = new Title(item);
                break;

            case 'RICH_TEXT':
                this.component = new RichText(item);
                break;

            case 'IMAGE':
                this.component = new Image(item);
                break;

            case 'GALLERY':
                this.component = new Gallery(item);
                break;

            case 'ACTION_BUTTON':
                this.component = new ActionButton(item);
                break;

            default:
                throw Error(`unsupported component type ${item.type}`);
        }
    }

    render() {
        console.log("in component");
     
        return this.component.render();
    }
}

export default Component;