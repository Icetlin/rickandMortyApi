import {createOriginApiPage} from './createOriginApiPage.js'
export default (chars, clickAction) => {
    const charsTable = document.createElement('table');
    const charsTableBody = document.createElement('tbody');

    for(let i = 0; i <= chars.results.length - 1; i++){
        let charsTableRow = document.createElement('tr')
        charsTableRow.innerHTML = chars.results[i].name
        charsTableRow.dataset.charId = chars.results[i].id
        charsTableRow.addEventListener('click', clickAction)
        charsTableBody.append(charsTableRow)
    }

    const currentPageNumber = createOriginApiPage(chars.info.next, chars.info.pages);
    charsTable.dataset.originApiPage = currentPageNumber;

    charsTable.append(charsTableBody) 
    return charsTable
};