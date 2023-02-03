export const createOriginApiPage = (nextPage, lastPage) => {
    let nextPageUrl
    let nextPageNumber
    let currentPageNumber
    if(nextPage !== null){
        nextPageUrl = new URL(nextPage);
        nextPageNumber = new URLSearchParams(nextPageUrl.search).get('page');
        currentPageNumber = (Number(nextPageNumber) - 1).toString();
    }
    if(nextPage === null){
        nextPageUrl = new URL(window.location.toString());
        nextPageNumber = new URLSearchParams(nextPageUrl.search).get('page');
        if(nextPageNumber !== lastPage.toString()){
            currentPageNumber = (Number(nextPageNumber) + 1).toString();
        }
        if(nextPageNumber === lastPage.toString()){
            currentPageNumber = nextPageNumber.toString();
        }
    }

    return currentPageNumber
}