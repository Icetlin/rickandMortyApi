import fetchCharsFromApiUrl from './api/fetchCharsFromApi.js'
import createPagingButtons from './js/createPagingButtons.js'
import {renderClicksOnChars} from './js/renderClicksOnChars.js'
import {createBackButton} from './js/createBackButton.js'
import {charsPageRender} from './js/charsPageRender.js'
(async () => {
     
    let chars = {};

    const [nextPageButton, prevPageButton] = createPagingButtons(async() => {
        chars = await fetchCharsFromApiUrl(chars.info.next)
        charsPageRender(chars);
    }, async() => {
        chars = await fetchCharsFromApiUrl(chars.info.prev);
        charsPageRender(chars);
    })

    document.body.appendChild(prevPageButton);
    document.body.appendChild(nextPageButton); 
    
         
    if (window.location.toString() === 'http://localhost:7777/page1' && !window.location.toString().includes('id') || window.location.toString() === 'http://localhost:7777/'){ // render main page
        chars = await fetchCharsFromApiUrl('https://rickandmortyapi.com/api/character');
        charsPageRender(chars); 
        

    } // main page render


    if (window.location.toString().includes('page') && !window.location.toString().includes('id') && !window.location.toString().includes('page1')){ 
        chars = await fetchCharsFromApiUrl(`https://rickandmortyapi.com/api/character${window.location.search}`);
        charsPageRender(chars); 
            

    } // others pages render


    if (window.location.toString().includes('id')){ 
        const currentCharPage = new URLSearchParams(window.location.toString()).get('http://localhost:7777/?page')
        const currentCharId = new URLSearchParams(window.location.toString()).get('id');
        
        const backButton = createBackButton(() => {
            backButtonAction((`https://rickandmortyapi.com/api/character${window.location.search}`))
        }, 'back to list')
        document.body.append(backButton);


        renderClicksOnChars(`https://rickandmortyapi.com/api/character?page=${currentCharPage}`, currentCharId)
    } // render characters
    
})()