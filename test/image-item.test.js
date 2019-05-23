import ImageItem from '../src/components/ImageItem.js';

const test = QUnit.test;

QUnit.module('image item');

test('template', assert => {
    const image = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal'
    };

    const expected = /*html*/ `
        <li>
            <h2 class="name">UniWhal</h2>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
            <button class="remove-button">x</button>
        </li>
    `;

    const imageItem = new ImageItem({ image });
    const html = imageItem.renderTemplate();

    assert.htmlEqual(html, expected);
});