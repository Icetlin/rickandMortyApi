import fetchCharsFromApiUrl from './api/fetchCharsFromApi.js'
import createPagingButtons from './js/createPagingButtons.js'
import {renderClicksOnChars} from './js/renderClicksOnChars.js'
import {createBackButton} from './js/createBackButton.js'
import {charsPageRender} from './js/charsPageRender.js'
import {createGoToPageForm} from './js/createGoToPageForm.js'
import css from './css/style.css'

(async () => {
     
    let chars = {};
    let pageUrl = window.location;
    let pageLocation = pageUrl.toString();
    let pageSearch = pageUrl.search;
    
    const [nextPageButton, prevPageButton] = createPagingButtons(async() => {
        chars = await fetchCharsFromApiUrl(chars.info.next);
        charsPageRender(chars);
        let pageNumber = document.body.querySelector('table').dataset.originApiPage
        history.replaceState(null, '', `?page=${pageNumber}`)
        document.getElementById('inputFieldGoToPage').placeholder = `page ${pageNumber} of ${chars.info.pages}`
    }, async() => {
        chars = await fetchCharsFromApiUrl(chars.info.prev);
        charsPageRender(chars);
        let pageNumber = document.body.querySelector('table').dataset.originApiPage
        history.replaceState(null, '', `?page=${pageNumber}`)
        document.getElementById('inputFieldGoToPage').placeholder = `page ${pageNumber} of ${chars.info.pages}`
    }) //set buttons action

    const goToCharsList = async () => {
        chars = await fetchCharsFromApiUrl(`https://rickandmortyapi.com/api/character${pageSearch}`);
        document.body.appendChild(prevPageButton);
        document.body.appendChild(nextPageButton); 
        createGoToPageForm(chars);
        charsPageRender(chars); 
        history.replaceState(null, '', `?page=${document.body.querySelector('table').dataset.originApiPage}`)
    }

    const goToCharInfo = () => {
        let currentUrlSearchParams = new URLSearchParams(pageSearch);
        let currentCharPage = currentUrlSearchParams.get('page').toString();
        let currentCharId = currentUrlSearchParams.get('id').toString(); 
        let backButton = createBackButton(() => {
        window.history.back()
        }, 'back to list');
        document.body.append(backButton);
        renderClicksOnChars(`https://rickandmortyapi.com/api/character?page=${currentCharPage}`, currentCharId);
        document.getElementById('goToPageForm')?.remove()
    }

    window.addEventListener('popstate', async function (){
        let pageUrl = window.location;
        let pageSearch = pageUrl.search;
        let currentUrl = window.location.toString();
        if(!currentUrl.includes('id')){
        document.getElementById('backButton')?.remove();
        document.body.querySelector('table')?.remove();
        chars = await fetchCharsFromApiUrl(`https://rickandmortyapi.com/api/character${pageSearch}`);
        document.body.appendChild(prevPageButton); 
        document.body.appendChild(nextPageButton);
        createGoToPageForm(chars) 
        charsPageRender(chars); 
       }
    })


    if (!pageLocation.includes('id')){ 
        goToCharsList();
    } // render char pages
    else {
        goToCharInfo();
    } // render characters info pages
})()