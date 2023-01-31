export const createBackButton = (onClickAction, buttonName) => {

    const backButton = document.createElement('button');
    backButton.setAttribute('id','backButton')

    backButton.innerHTML = buttonName;

    backButton.addEventListener('click', onClickAction); 

    return backButton
}