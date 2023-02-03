import { createBackButton } from "./createBackButton";
export default (chars, charId, page) => {

    const charInfoTable = document.createElement('table');
    const charInfoTableBody = document.createElement('tbody');
    let currentCharObject;
    const backButton = createBackButton(() => {
        window.history.back()
    }, 
    'back to list')
    document.body.append(backButton);

    for(let objectId = 0; objectId <= chars.results.length - 1; objectId++){ //get clicked char info
        if((chars.results[objectId]).id === Number(charId)){
            currentCharObject = chars.results[objectId]
        }
    }

    for(const [key, value] of Object.entries(currentCharObject)){ // fill char info table

        let charInfoTableRow = document.createElement('tr');
        let tableKeys = document.createElement('td');
        let tableValues = document.createElement('td');

        tableKeys.style.fontWeight = "900";


        if(typeof(value) !== "object" && key !== 'image'){ // set string values
            tableKeys.innerHTML = `${key}:`;
            tableValues.innerHTML = value;
        }
        if(typeof(value) === 'object' && key !== 'image'){ // set object values
            tableKeys.innerHTML = `${key}:`;
            tableValues.innerHTML = `${(Object.values(value))[0]}`;
        }
        if(key === 'image'){ // set image values
            tableKeys.innerHTML = `${key}:`;
            const charImage = document.createElement('img');
            charImage.src = value;
            tableValues.append(charImage)
        }


        charInfoTableBody.append(tableKeys)
        charInfoTableBody.append(tableValues)
        charInfoTableBody.append(charInfoTableRow)
    }

    
    charInfoTable.append(charInfoTableBody) 
    return charInfoTable
};