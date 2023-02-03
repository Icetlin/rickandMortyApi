import fetchCharsFromApiUrl from '../api/fetchCharsFromApi.js'
import { charsPageRender } from "./charsPageRender.js"
import createPagingButtons from './createPagingButtons.js'
export const backButtonAction = async (page) => {
    document.getElementById('backButton')?.remove()
    history.back()

    const [nextPageButton, prevPageButton] = createPagingButtons(async() => {
        chars = await fetchCharsFromApiUrl(chars.info.next)
        document.body.querySelector('button')?.remove()
        document.body.querySelector('button')?.remove()
        document.body.appendChild(prevPageButton);
        console.log(Number((new URLSearchParams(window.location.search)).get('page')))
        if(Number((new URLSearchParams(window.location.search)).get('page')) !== chars.info.pages){
            document.body.appendChild(nextPageButton); 
        }
        charsPageRender(chars);
    }, async() => {
        chars = await fetchCharsFromApiUrl(chars.info.prev);
        document.body.querySelector('button')?.remove()
        document.body.querySelector('button')?.remove()

        // if(Number((new URLSearchParams(window.location.search)).get('page')) !== 1){
        //     document.body.appendChild(prevPageButton); 
        // }
        document.body.appendChild(nextPageButton); 
        charsPageRender(chars);
    })

    

    let chars = {};
    chars = await fetchCharsFromApiUrl(page);
    if(Number((new URLSearchParams(window.location.search)).get('page')) !== 1){
        document.body.appendChild(prevPageButton); 
    }
    if(Number((new URLSearchParams(window.location.search)).get('page')) !== chars.info.pages){
        document.body.appendChild(nextPageButton); 
    }
    charsPageRender(chars);
    
} 