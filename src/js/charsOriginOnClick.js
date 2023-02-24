import {renderClicksOnChars} from "./renderClicksOnChars.js";
export const onClickOrigin = (event) => {

    const charId = event.currentTarget.dataset.charId
    
    renderClicksOnChars(`https://rickandmortyapi.com/api/character${window.location.search}`, charId)
    history.pushState(null, '', `${window.location}&id=${charId}`);
}