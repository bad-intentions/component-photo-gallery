import Component from "./Component.js";
import Header from "./Header.js";
import images from "../../data/images-data.js";
import ImageList from "./ImageList.js";

class App extends Component {
    render() {
        const dom = this.renderDOM();
        
        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const imageList = new ImageList({ images });
        console.log(imageList);
        

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