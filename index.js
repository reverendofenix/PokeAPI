const pokedex = document.querySelector('#pokedex');

const fetchPokemon = () => {
    const promises = [];
    const url = 'https://pokeapi.co/api/v2/pokemon/gengar';
    promises.push(fetch(url).then((res) => res.json()));

    Promise.all(promises).then(results => {
        const pokemon = results.map(data => ({
            name: data.name,
            id: data.id,
            hp: data.stats[0].base_stat,
            atk: data.stats[1].base_stat,
            def: data.stats[2].base_stat,
            spa: data.stats[3].base_stat,
            spd: data.stats[4].base_stat,
            spe: data.stats[5].base_stat,
            tipo1: data.types[0].type.name
        }))
        
        displayPokemon(pokemon)
    })
};

const displayPokemon = (pokemon) => {
    const pokemonHTMLSting = pokemon.map(pokemon => `
    <div id="todos">
        <div class="pokemon-todos" id="listaPokemon">
            <div class="pokemon">
                <h2 class="pokemon-nombre">${pokemon.name}</h2>
                <div class="contenedor-imagenes">
                    <div class="pokemon-imagen1">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png">
                    </div>
                    <div class="pokemon-imagen2">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokemon.id}.png"> 
                    </div>
                </div>
                <div class="pokemon-tipos">
                    <p class=${pokemon.tipo1}>${pokemon.tipo1}</p>
                    <p class=${pokemon.tipo1}>${pokemon.tipo1}</p>
                </div>
                <div class="pokemon-estadisticas">
                    <div class="estadistica">
                        <p style="width: 100px; color: antiquewhite;">Attack</p><p style="width: 50px; color: antiquewhite;">${pokemon.atk}</p><p class="attack" style="width: ${pokemon.atk}px;"></p>
                    </div>
                    <div class="estadistica">
                        <p style="width: 100px; color: antiquewhite;">Defense</p><p style="width: 50px; color: antiquewhite;">${pokemon.def}</p><p class="defense" style="width: ${pokemon.def}px;"></p>
                    </div>
                    <div class="estadistica">
                        <p style="width: 100px; color: antiquewhite;">Sp. Attack</p><p style="width: 50px; color: antiquewhite;">${pokemon.spa}</p><p class="specialattack" style="width: ${pokemon.spa}px;"></p>
                    </div>
                    <div class="estadistica">
                        <p style="width: 100px; color: antiquewhite;">sp. Defense</p><p style="width: 50px; color: antiquewhite;">${pokemon.spd}</p><p class="specialdefense" style="width: ${pokemon.spd}px;"></p>
                    </div>
                    <div class="estadistica">
                        <p style="width: 100px; color: antiquewhite;">HP</p><p style="width: 50px; color: antiquewhite;">${pokemon.hp}</p><p class="hp"  style="width: ${pokemon.hp}px;"></p>
                    </div>
                    <div class="estadistica">
                        <p style="width: 100px; color: antiquewhite;">Speed</p><p style="width: 50px; color: antiquewhite;">${pokemon.spe}</p><p class="speed"  style="width: ${pokemon.spe}px;"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `)
    pokedex.innerHTML = pokemonHTMLSting
}

fetchPokemon();