import filterImages from '../src/filter-images.js';

const test = QUnit.test;

QUnit.module('filter images')

const images = [
    {
        'title': 'Serious Jackson\'s Chameleon',
        'horns': 1
    },
    {
        'title': 'Horned Lizard',
        'horns': 2
    },
    {
        'title': 'Smaug',
        'horns': 100
    }
]

test('filters on title', assert => {
    const filter = { title: 'Liz' };

    const filtered = filterImages(images, filter);

    assert.deepEqual(filtered, [{ 
        title: 'Horned Lizard',
        horns: 2
    }]);

});

test('filters on name case insensitive', assert => {
    const filter = { title: 'liz' };

    const filtered = filterImages(images, filter);

    assert.deepEqual(filtered, [{
        title: 'Horned Lizard',
        horns: 2
    }])
});
