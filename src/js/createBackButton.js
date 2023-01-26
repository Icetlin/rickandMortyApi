export const createBackButton = (onClickAction, buttonName) => {

    const backButton = document.createElement('button');

    backButton.innerHTML = buttonName;

    backButton.addEventListener('click', onClickAction); 
    
    return backButton
}