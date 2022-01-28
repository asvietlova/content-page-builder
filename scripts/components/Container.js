const containerStylesClass = 'container';
const headLineStyleClass = 'head-line-wrapper';
const deleteBtnStyleClass = 'delete-btn';
const sortBtnStyleClass = 'sort-btn';
const btnsWrapperStyleClass = 'head-btns-wrapper';
const deleteBtnText = 'delete';
const sortBtnText = 'sort';

class Container {
    constructor(item) {
        this.item = item;
    }

    render() {
        // Make buttons
        let btnsWrapper = this.renderWrapper();
        btnsWrapper.classList.add(btnsWrapperStyleClass);
        btnsWrapper.append(this.renderSortButton(), this.renderDeleteButton());

        // Make container head line
        let headLineWrapper = this.renderWrapper();
        headLineWrapper.classList.add(headLineStyleClass);
        headLineWrapper.append(this.renderTitle(), btnsWrapper);

        // Make container
        let container = this.renderWrapper();
        container.classList.add(containerStylesClass);
        container.append(headLineWrapper, document.createElement('hr'));

        return container;
    }

    renderWrapper() {
        return document.createElement('div');
    }

    renderDeleteButton() {
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add(deleteBtnStyleClass);
        deleteBtn.innerText = deleteBtnText;
        return deleteBtn;
    }

    renderSortButton() {
        let sortBtn = document.createElement('button');
        sortBtn.classList.add(sortBtnStyleClass);
        sortBtn.innerText = sortBtnText;
        return sortBtn;
    }

    renderTitle() {
        let title = document.createElement('h3');
        title.innerText = this.title; 
        return title;
    }
}

export default Container;
