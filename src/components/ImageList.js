import Component from './Component.js';
import ImageItem from './ImageItem.js';

class ImageList extends Component {
    renderTemplate() {
        return /*html*/ `
            <ul id="photos"></ul>
        `;
    }
}

export default ImageList;