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
    
    const nextPageUrl = new URL(chars.info.next);
    const nextPageNumber = new URLSearchParams(nextPageUrl.search).get('page');
    const currentPageNumber = (Number(nextPageNumber) - 1).toString();
    charsTable.dataset.originApiPage = currentPageNumber

    charsTable.append(charsTableBody) 
    return charsTable
};