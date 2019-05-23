import Component from './Component.js';
import Header from './Header.js';
import images from '../../data/images-data.js';
import ImageList from './ImageList.js';
import AddImage from './AddImage.js';
import Filter from './Filter.js';
import filterImages from '../filter-images.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        
        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const addImage = new AddImage({ 
            onAdd: (newImage) => {
                images.unshift(newImage);
                imageList.update({ images });
            }
        });
        
        const addImageDOM = addImage.render();
        main.appendChild(addImageDOM);

        const filter = new Filter({ 
            onFilter: filter => {
                const filtered = filterImages(images, filter);
                imageList.update({ images: filtered });
            }
        });
        main.appendChild(filter.render());

        const imageList = new ImageList({ 
            images,
            onRemove: (imageToRemove) => {
                const index = images.indexOf(imageToRemove);
                images.splice(index, 1);
                imageList.update({ images });
            }
        });

        const imageListDOM = imageList.render();
        main.appendChild(imageListDOM);

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <!-- header -->
                <main>
                <!-- image list goes here --> 
                </main>
            </div>
        `;
    }

}

export default App;