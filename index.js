const fetchCharsFromApiUrl = async (url) => {
    const response = await fetch(url);
    return await response.json();
};
(async () => {
   const chars = await fetchCharsFromApiUrl('https://rickandmortyapi.com/api/character');
   console.log(chars.results[1].episode)
})()
    