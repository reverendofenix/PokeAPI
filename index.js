const pokedex = document.querySelector('#pokedex');

const fetchPokemon = () => {
    const promises = [];
    const url = 'https://pokeapi.co/api/v2/pokemon/chansey';
    promises.push(fetch(url).then((res) => res.json()));

    Promise.all(promises).then(results => {
        const pokemon = results.map(data => ({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default']
        }))

        displayPokemon(pokemon)
    })
};

const displayPokemon = (pokemon) => {
    const pokemonHTMLSting = pokemon.map(pokemon => `
    <img src='${pokemon.image}'/>
    <h2 >${pokemon.name}</h2>
    <h3 >${pokemon.id}</h3>
    `)
    pokedex.innerHTML = pokemonHTMLSting
}

fetchPokemon();