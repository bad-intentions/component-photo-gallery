import filterImages from '../src/filter-images.js';

const test = QUnit.test;

QUnit.module('filter images');

const images = [
    {
        'url': 'https://cdn.modernfarmer.com/wp-content/uploads/2014/08/chameleon.jpg',
        'title': 'Happy Jackson\'s Chameleon',
        'description': 'These are really common in Hawaii',
        'keyword': 'chameleon',
        'horns': 2
    },
    {
        'url': 'https://imgc.allpostersimages.com/img/print/posters/dlillc-jackson-s-chameleon_a-G-13448768-14258384.jpg',
        'title': 'Serious Jackson\'s Chameleon',
        'description': 'This one is very serious.',
        'keyword': 'chameleon',
        'horns': 3
    },
    {
        'url': 'https://www.nps.gov/band/learn/nature/images/short-horned-lizard-open-mouth-18.jpg?maxwidth=650&autorotate=false',
        'title': 'Horned Lizard',
        'description': 'Fave whale: ants',
        'keyword': 'lizard abc',
        'horns': 100
    },
];

test('filters on title', assert => {
    const filter = { text: 'horned' };

    const filtered = filterImages(images, filter);

    assert.deepEqual(filtered, [{ 
        url: 'https://www.nps.gov/band/learn/nature/images/short-horned-lizard-open-mouth-18.jpg?maxwidth=650&autorotate=false',
        title: 'Horned Lizard',
        description: 'Fave whale: ants',
        keyword: 'lizard abc',
        horns: 100
    }]);

});

test('filters on name case insensitive', assert => {
    const filter = { text: 'lIZ' };

    const filtered = filterImages(images, filter);

    assert.deepEqual(filtered, [{
        url: 'https://www.nps.gov/band/learn/nature/images/short-horned-lizard-open-mouth-18.jpg?maxwidth=650&autorotate=false',
        title: 'Horned Lizard',
        description: 'Fave whale: ants',
        keyword: 'lizard abc',
        horns: 100
    }]);
});

test('return all on no filter', assert => {
    const filter = { text: '' };

    const filtered = filterImages(images, filter);

    assert.deepEqual(filtered, images);
});

test('matches horns as well as title', assert => {
    const filter = { 
        text: 'w',
        horns: 100 
    };

    const filtered = filterImages(images, filter);
    
    assert.deepEqual(filtered, [{
        url: 'https://www.nps.gov/band/learn/nature/images/short-horned-lizard-open-mouth-18.jpg?maxwidth=650&autorotate=false',
        title: 'Horned Lizard',
        description: 'Fave whale: ants',
        keyword: 'lizard abc',
        horns: 100
    }]);
});

test('text in input matches description', assert => {
    const filter = {
        text: 'whale'
    };

    const filtered = filterImages(images, filter);

    assert.deepEqual(filtered, [{
        url: 'https://www.nps.gov/band/learn/nature/images/short-horned-lizard-open-mouth-18.jpg?maxwidth=650&autorotate=false',
        title: 'Horned Lizard',
        description: 'Fave whale: ants',
        keyword: 'lizard abc',
        horns: 100
    }]);
});

test ('text in input matches keywords', assert => {
    const filter = {
        text: 'abc'
    };

    const filtered = filterImages(images, filter);

    assert.deepEqual(filtered, [{
        url: 'https://www.nps.gov/band/learn/nature/images/short-horned-lizard-open-mouth-18.jpg?maxwidth=650&autorotate=false',
        title: 'Horned Lizard',
        description: 'Fave whale: ants',
        keyword: 'lizard abc',
        horns: 100
    }]);
});