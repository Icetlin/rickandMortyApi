const changeUrl = (url, page = 1) => {
    url = new URL(url)
    url.searchParams.set('page', page);
    console.log(url)
    debugger
}
changeUrl('https://rickandmortyapi.com/api/character')