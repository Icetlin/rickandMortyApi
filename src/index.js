import fetchCharsFromApiUrl from './api/fetchCharsFromApi.js'
import createPagingButtons from './js/createPagingButtons.js'
import {renderClicksOnChars} from './js/renderClicksOnChars.js'
import {createBackButton} from './js/createBackButton.js'
import {charsPageRender} from './js/charsPageRender.js'

(async () => {
     
    let chars = {};
    let pageUrl = window.location;
    let pageLocation = pageUrl.toString();
    let pageSearch = pageUrl.search;

    const [nextPageButton, prevPageButton] = createPagingButtons(async() => {
        chars = await fetchCharsFromApiUrl(chars.info.next);
        charsPageRender(chars);
    }, async() => {
        chars = await fetchCharsFromApiUrl(chars.info.prev);
        charsPageRender(chars);
    }) //set buttons action


    const goToCharList = async () => {
        chars = await fetchCharsFromApiUrl(`https://rickandmortyapi.com/api/character${pageSearch}`);
        document.body.appendChild(prevPageButton); 
        document.body.appendChild(nextPageButton);
        charsPageRender(chars); 
    }

    const goToCharInfo = () => {
        let currentUrlSearchParams = new URLSearchParams(pageSearch);
        let currentCharPage = currentUrlSearchParams.get('page').toString();
        let currentCharId = currentUrlSearchParams.get('id').toString(); 
        let backButton = createBackButton(() => {
        window.history.back()
        }, 
        'back to list');
        document.body.append(backButton);
        renderClicksOnChars(`https://rickandmortyapi.com/api/character?page=${currentCharPage}`, currentCharId);
    }


   


    window.addEventListener('popstate', async function (){
       const currentUrl = window.location.toString();
       if(!currentUrl.includes('id')){
        document.getElementById('backButton')?.remove();
        document.body.querySelector('table')?.remove();
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