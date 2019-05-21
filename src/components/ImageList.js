import Component from './Component.js';
import ImageItem from './ImageItem.js';

class ImageList extends Component {
    render() {
        const list = this.renderDOM();
        const images = this.props.images();

        images.forEach(image => {
            const imageItem = new ImageItem({ image });
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