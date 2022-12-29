import fetchCharsFromApiUrl from './fetchCharsFromApi.js'


const createPagingButtons = (
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



const createCharsTable = (chars) => {
    const charsTable = document.createElement('table');
    const charsTableBody = document.createElement('tbody');

    for(let i = 0; i <= chars.results.length - 1; i++){
        let charsTableRow = document.createElement('tr')
        charsTableRow.innerHTML = chars.results[i].name
        charsTableBody.append(charsTableRow)
    }
    
    charsTable.append(charsTableBody)
    return charsTable
};



(async () => {
    let chars = {};

    const tablePlaceEl = document.querySelector('#table-place');
    const buttonsPlaceEl = document.querySelectorAll('.buttons-place');

    const render = async(page) => {
        chars = await fetchCharsFromApiUrl(page);
    
        const table = createCharsTable(chars);

        tablePlaceEl.querySelector('table')?.remove();
        tablePlaceEl.appendChild(table);
    }
     

    buttonsPlaceEl.forEach((place) => {
        const [nextPageButton, prevPageButton] = createPagingButtons(() => {
            render(chars.info.next);
        }, () => {
            render(chars.info.prev);
        });

        place.appendChild(prevPageButton);
        place.appendChild(nextPageButton);        
    })
    
    render('https://rickandmortyapi.com/api/character'); // render first page
})()