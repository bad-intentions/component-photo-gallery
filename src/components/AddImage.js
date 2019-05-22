import Component from './Component.js';

class AddImage extends Component {
    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;
    
        form.addEventListener('submit', event => {
            event.preventDefault();
    
            const formData = new FormData(form);

            const newImage = {
                title: formData.get('title'),
                url: formData.get('url')
            };
            console.log(newImage);

            onAdd(newImage);
        });

        return form;
    }

    renderTemplate() {
        return /*html*/ `
            <form class="add-photo">
                <label>Title: <input name="title"></label>
                <label>Image URL: <input name="url"></label>
                <button>Add Photo</button>
            </form>
        `;
    }

}

export default AddImage;