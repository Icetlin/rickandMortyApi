import fetchCharsFromApiUrl from '../api/fetchCharsFromApi.js'
import { charsPageRender } from "./charsPageRender.js"
import createPagingButtons from './createPagingButtons.js'
export const backButtonAction = async (page) => {
    document.getElementById('backButton')?.remove()
    history.back()

    const [nextPageButton, prevPageButton] = createPagingButtons(async() => {
        chars = await fetchCharsFromApiUrl(chars.info.next)
        charsPageRender(chars);
    }, async() => {
        chars = await fetchCharsFromApiUrl(chars.info.prev);
        charsPageRender(chars);
    })

    document.body.appendChild(prevPageButton);
    document.body.appendChild(nextPageButton); 

    let chars = {};
    chars = await fetchCharsFromApiUrl(page);
    charsPageRender(chars);
} 