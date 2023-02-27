export default (
    onNextPageClick,
    onPrevPageClick, 
    nextName = 'next',
    prevName = 'prev',
) => {
    const nextPageButton = document.createElement('button');
    const prevPageButton = document.createElement('button');

    nextPageButton.innerText = nextName;
    nextPageButton.classList.add('pagingButtons')
    prevPageButton.innerText = prevName;
    prevPageButton.classList.add('pagingButtons')
    

    nextPageButton.addEventListener('click', onNextPageClick);
    prevPageButton.addEventListener('click', onPrevPageClick);

    return [nextPageButton, prevPageButton];
};