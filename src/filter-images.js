function filterImages(images, filter) {
    console.log(filter);
    const lowerCaseTitleFilter = filter.title.toLowerCase();
    return images.filter(image => {
        const lowerCaseTitle = image.title.toLowerCase();

        const hasTitle = !lowerCaseTitleFilter || lowerCaseTitle.includes(lowerCaseTitleFilter);
        const hasHorns = !filter.horns || image.horns === filter.horns;

        return hasTitle && hasHorns;
    });
}

export default filterImages;