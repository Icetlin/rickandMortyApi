import fetchCharsFromApiUrl from './api/fetchCharsFromApi.js'
import createPagingButtons from './js/createPagingButtons.js'
import createCharsTable from './js/createCharsTable.js'
import {onClickOrigin} from './js/charsOriginOnClick.js'
import {renderClicksOnChars} from './js/renderClicksOnChars.js'
(async () => {

    let chars = {};
    
    const render = async(page) => {
        chars = await fetchCharsFromApiUrl(page);

        const table = createCharsTable(chars, onClickOrigin);

        document.body.querySelector('table')?.remove();
        document.body.append(table)
        
        history.replaceState(null, '', `/?page=${document.body.querySelector('table').dataset.originApiPage}`)
    }

    const [nextPageButton, prevPageButton] = createPagingButtons(() => {
        render(chars.info.next);
        //changePageNumber('next')
    }, () => {
        render(chars.info.prev);
        //changePageNumber('prev')
    })

    document.body.appendChild(prevPageButton);
    document.body.appendChild(nextPageButton); 
    
         
    if (window.location.toString() === 'http://localhost:7777/page1' && !window.location.toString().includes('id') || window.location.toString() === 'http://localhost:7777/'){ // render main page
    render('https://rickandmortyapi.com/api/character'); 
    } // main page render


    if (window.location.toString().includes('page') && !window.location.toString().includes('id') && !window.location.toString().includes('page1')){ 
        render(`https://rickandmortyapi.com/api/character${window.location.search}`);     
    } // others pages render


    if (window.location.toString().includes('id')){ 

        const currentCharPage = new URLSearchParams(window.location.toString()).get('http://localhost:7777/?page')
        const currentCharId = new URLSearchParams(window.location.toString()).get('id');
        
        


        renderClicksOnChars(`https://rickandmortyapi.com/api/character?page=${currentCharPage}`, currentCharId)
    } // render characters
    
})()