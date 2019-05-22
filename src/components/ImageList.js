import Component from './Component.js';
import ImageItem from './ImageItem.js';

class ImageList extends Component {
    render() {
        const list = this.renderDOM();
        const images = this.props.images;

        const onRemove = this.props.onRemove;
        images.forEach(image => {
            const imageItem = new ImageItem({ image, onRemove });
            const imageItemDOM = imageItem.render();
            list.appendChild(imageItemDOM);
        });
        return list;
    }

    renderTemplate() {
        return /*html*/ `
            <ul id="photos"></ul>
        `;
    }
}

export default ImageList;