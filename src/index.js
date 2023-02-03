import fetchCharsFromApiUrl from './api/fetchCharsFromApi.js'
import createPagingButtons from './js/createPagingButtons.js'
import {renderClicksOnChars} from './js/renderClicksOnChars.js'
import {createBackButton} from './js/createBackButton.js'
import {charsPageRender} from './js/charsPageRender.js'

(async () => {
     
    let chars = {};
    const pageUrl = window.location;
    const pageLocation = pageUrl.toString();
    const pageSearch = pageUrl.search;

    const [nextPageButton, prevPageButton] = createPagingButtons(async() => {
        chars = await fetchCharsFromApiUrl(chars.info.next);
        charsPageRender(chars);
    }, async() => {
        chars = await fetchCharsFromApiUrl(chars.info.prev);
        charsPageRender(chars);
    }) //set buttons action


    const goToCharList = async () => {
        chars = await fetchCharsFromApiUrl(`https://rickandmortyapi.com/api/character${pageSearch}`);
        charsPageRender(chars);
    }

    const goToCharInfo = () => {
        const currentUrlSearchParams = new URLSearchParams(pageSearch);
        const currentCharPage = currentUrlSearchParams.get('page').toString();
        const currentCharId = currentUrlSearchParams.get('id').toString(); 
        const backButton = createBackButton(() => {
        window.history.back()
        }, 
        'back to list');
        document.body.append(backButton);
        renderClicksOnChars(`https://rickandmortyapi.com/api/character?page=${currentCharPage}`, currentCharId);
    }


    document.body.appendChild(prevPageButton); 
    document.body.appendChild(nextPageButton); 


    window.addEventListener('popstate', async function (){
       const currentUrl = window.location.toString();
       if(!currentUrl.includes('id')){
        document.getElementById('backButton')?.remove();
        document.body.querySelector('table')?.remove();
        document.body.appendChild(prevPageButton); 
        document.body.appendChild(nextPageButton); 
        goToCharList();
       }
    })


    if (!pageLocation.includes('id')){ 
        goToCharList();
    } // render char pages
    else {
        goToCharInfo();
    } // render characters info pages
})()