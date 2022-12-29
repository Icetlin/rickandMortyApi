const createCharsTable = (chars) => {
    const charsTable = document.createElement('table');
    const charsTableBody = document.createElement('tbody');

    for(let i = 0; i <= chars.results.length - 1; i++){
        let charsTableRow = document.createElement('tr')
        charsTableRow.innerHTML = chars.results[i].name
        charsTableBody.append(charsTableRow)
    }
    
    charsTable.append(charsTableBody)
    return charsTable
};