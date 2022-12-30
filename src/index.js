import fetchCharsFromApiUrl from './api/fetchCharsFromApi.js'
import createPagingButtons from './js/createPagingButtons.js'
import createCharsTable from './js/createCharsTable.js'

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