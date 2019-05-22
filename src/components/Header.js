import Component from './Component.js';
//header
class Header extends Component {

    renderTemplate() {
        return /*html*/ `
            <header>
                <h1>Foto Gallery</h1>
            </header>
        `;
    }
}

export default Header;