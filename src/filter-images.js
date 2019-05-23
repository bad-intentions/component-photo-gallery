function filterImages(images, filter) {
    console.log(filter);
    const lowerCaseTextFilter = filter.text.toLowerCase();
    return images.filter(image => {
        const lowerCaseTitle = image.title.toLowerCase();
        const lowerCaseDescription = image.description.toLowerCase();
        const lowerCaseKeyword = image.keyword.toLowerCase();

        const hasText = !lowerCaseTextFilter || 
            lowerCaseTitle.includes(lowerCaseTextFilter) ||
            lowerCaseDescription.includes(lowerCaseTextFilter) || 
            lowerCaseKeyword.includes(lowerCaseTextFilter);
        const hasHorns = !filter.horns || image.horns === filter.horns;

        return hasText && hasHorns;
    });
}

export default filterImages;