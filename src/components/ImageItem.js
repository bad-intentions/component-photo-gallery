import Component from './Component.js';

class ImageItem extends Component {
    render() {
        const listItem = this.renderDOM();
        const image = this.props.image;
        const onRemove = this.props.onRemove;
        const removeButton = listItem.querySelector('button');
        removeButton.addEventListener('click', () => {
            onRemove(image);
        });

        return listItem;
    }

    renderTemplate() {
        const image = this.props.image;

        return /*html*/ `
            <li>
                <h2 class="name">${image.title}</h2>
                <img src="${image.url}">
                <button class="remove-button">x</button>
            </li>
        `;
    }
}

export default ImageItem;