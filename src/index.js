import fetchCharsFromApiUrl from './api/fetchCharsFromApi.js'
import createPagingButtons from './js/createPagingButtons.js'
import {renderClicksOnChars} from './js/renderClicksOnChars.js'
import {createBackButton} from './js/createBackButton.js'
import {charsPageRender} from './js/charsPageRender.js'
import {backButtonAction} from './js/backButtonAction.js'

(async () => {
     
    let chars = {};

    const [nextPageButton, prevPageButton] = createPagingButtons(async() => {
        chars = await fetchCharsFromApiUrl(chars.info.next)
        document.body.querySelector('button')?.remove()
        document.body.querySelector('button')?.remove()
        document.body.appendChild(prevPageButton);
        if(Number((new URLSearchParams(window.location.search)).get('page')) !== (chars.info.pages)){
            document.body.appendChild(nextPageButton); 
        }
        charsPageRender(chars);
    }, async() => {
        chars = await fetchCharsFromApiUrl(chars.info.prev);
        document.body.querySelector('button')?.remove()
        document.body.querySelector('button')?.remove()
        if(Number((new URLSearchParams(window.location.search)).get('page')) !== 1){
            document.body.appendChild(prevPageButton); 
        }
        document.body.appendChild(nextPageButton); 
        charsPageRender(chars);
    })

    //document.body.appendChild(prevPageButton);
    
    
    // window.addEventListener('popstate', function (){
    //    if(!window.location.toString().includes('id')){
    //     console.log('no id')
    //    }
    // })

    if (window.location.toString() === 'http://localhost:7777/?page=1' && !window.location.toString().includes('id') || window.location.toString() === 'http://localhost:7777/'){ // render main page
        chars = await fetchCharsFromApiUrl('https://rickandmortyapi.com/api/character');
        document.body.appendChild(nextPageButton); 
        charsPageRender(chars);
    } // main page render


    if (window.location.toString().includes('page') && !window.location.toString().includes('id') && !window.location.toString().includes('?page=1')){ 
        chars = await fetchCharsFromApiUrl(`https://rickandmortyapi.com/api/character${window.location.search}`);
        document.body.appendChild(prevPageButton); 
        if(Number((new URLSearchParams(window.location.search)).get('page')) !== (chars.info.pages)){
            document.body.appendChild(nextPageButton); 
        }
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