export const createPagingButtons = (
    onNextPageClick,
    onPrevPageClick, 
    nextName = 'next',
    prevName = 'prev',
) => {
    const nextPageButton = document.createElement('button');
    const prevPageButton = document.createElement('button');

    nextPageButton.innerText = nextName;
    prevPageButton.innerText = prevName;

    nextPageButton.addEventListener('click', onNextPageClick);
    prevPageButton.addEventListener('click', onPrevPageClick);

    return [nextPageButton, prevPageButton];
};