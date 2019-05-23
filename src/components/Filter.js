import Component from './Component.js';

class Filter extends Component {
    render() {
        const dom = this.renderDOM();
        const input = dom.querySelector('input');
        const select = dom.querySelector('select');
        input.addEventListener('input', () => {
            this.props.onFilter({
                text: input.value,
                horns: parseInt(select.value)
            });
        });

        select.addEventListener('change', () => {
            this.props.onFilter({
                text: input.value,
                horns: parseInt(select.value)
            });
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <section class="filter-section">
                <input class="filter" name="filter">
                <select id="horn-number" class="horns-input" name="filter">
                    <option value="0">All</option>
                    <option value="1">1 Horn</option>
                    <option value="2">2 Horns</option>
                    <option value="3">3 Horns</option>
                    <option value="100">100 Horns</option>
                </select>
                <span class="glass">🔍</span>
            </section>
        `;
    }
}

export default Filter;