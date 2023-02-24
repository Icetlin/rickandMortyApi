import createCharInfoTable from "./createCharInfoTable"
import fetchCharsFromApiUrl from '../api/fetchCharsFromApi.js'
export const renderClicksOnChars = async(page, charId) => {
    
    let chars = await fetchCharsFromApiUrl(page);

    document.body.querySelector('table')?.remove();
    document.body.querySelectorAll('button').forEach(element => element.remove());
    document.getElementById('goToPageForm')?.remove()



    const table = createCharInfoTable(chars, charId, page);
    
    document.body.appendChild(table); 
    
    
    
}