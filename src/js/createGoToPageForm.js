export const createGoToPageForm = (chars) => {
    const goToPageForm = document.createElement('div'); // form
    goToPageForm.id = "goToPageForm"

    const goToPageFormBody = document.createElement('form');
    goToPageFormBody.action = '?';
    goToPageFormBody.method = 'GET';

    const inputField = document.createElement('input'); // input
    inputField.id = "inputFieldGoToPage"
    inputField.type = 'number';
    inputField.max = chars.info.pages
    inputField.name = 'page';
    const pageNumber = new URLSearchParams(window.location.search).get('page')
    if(pageNumber !== null){
        inputField.placeholder = `page ${pageNumber} of ${chars.info.pages}`
    }
    else{
        inputField.placeholder = `page 1 of ${chars.info.pages}`
    }
   




    // const goToPageButton = document.createElement('button'); //button
    // goToPageButton.innerText = 'go'

    goToPageFormBody.appendChild(inputField);
    //goToPageFormBody.appendChild(goToPageButton);

    goToPageForm.appendChild(goToPageFormBody);
    document.body.append(goToPageForm)
}