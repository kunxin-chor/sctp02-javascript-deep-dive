async function getPokemon(searchTerms) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerms}`);
    return response.data;
}

document.addEventListener("DOMContentLoaded", async function(){
    // add event listeners here
    // because all HTML elements are created when the event happens

    document.querySelector("#searchBtn")
        .addEventListener("click", async function(){
            const searchTerms = document.querySelector("#searchTerms").value;
            const pokemon = await getPokemon(searchTerms);
            console.log(pokemon);
            document.querySelector("#output").innerHTML = `
            <h1>${pokemon.name}</h1>
            <img src="${pokemon.sprites.other["official-artwork"].front_default}"/>
            `
        })
})