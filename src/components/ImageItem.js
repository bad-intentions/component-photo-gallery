import Component from './Component.js';

class ImageItem extends Component {
    render() {
        const listItem = this.renderDOM();
        //const image = this.props.image;

        return listItem;
    }

    renderTemplate() {
        const image = this.props.image;

        return /*html*/ `
            <li>
                <h2>${image.title}</h2>
                <img src="${image.url}">
            </li>
        `;
    }
}

export default ImageItem;