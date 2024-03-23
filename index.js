const pokedex = document.getElementById('pokedex');

const fetchPokemon = () => {
    const promises = [];
    const PokemonInput = document.getElementById('pkemonInput').value;
    const PokemonArray = PokemonInput.split(',')
    for (const value of PokemonArray) {
        const url = `https://pokeapi.co/api/v2/pokemon/${value}`;
        promises.push(fetch(url).then((res) => res.json()));
    }

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
            tipos: data.types.map(type => type.type.name).join(", ")
        }));
        
        displayPokemon(pokemon)
    })
};

const displayPokemon = (pokemon) => {
    const pokemonHTMLString = pokemon.map(pokemon => {
        let tiposHTMLString = '';

        if (pokemon.tipos.includes(",")) { 
            if (pokemon.tipos.includes("grass")) {
                tiposHTMLString += `<p class="grass">grass</p>`;
            } if (pokemon.tipos.includes("poison")) {
                tiposHTMLString += `<p class="poison">poison</p>`;
            } if (pokemon.tipos.includes("normal")) {
                tiposHTMLString += `<p class="normal">normal</p>`;
            } if (pokemon.tipos.includes("fire")) {
                tiposHTMLString += `<p class="fire">fire</p>`;
            } if (pokemon.tipos.includes("water")) {
                tiposHTMLString += `<p class="water">water</p>`;
            } if (pokemon.tipos.includes("electric")) {
                tiposHTMLString += `<p class="electric">electric</p>`;
            } if (pokemon.tipos.includes("fighting")) {
                tiposHTMLString += `<p class="fighting">fighting</p>`;
            } if (pokemon.tipos.includes("ice")) {
                tiposHTMLString += `<p class="ice">ice</p>`;
            } if (pokemon.tipos.includes("ground")) {
                tiposHTMLString += `<p class="ground">ground</p>`;
            } if (pokemon.tipos.includes("flying")) {
                tiposHTMLString += `<p class="flying">flying</p>`;
            } if (pokemon.tipos.includes("psychic")) {
                tiposHTMLString += `<p class="psychic">psychic</p>`;
            } if (pokemon.tipos.includes("bug")) {
                tiposHTMLString += `<p class="bug">bug</p>`;
            } if (pokemon.tipos.includes("rock")) {
                tiposHTMLString += `<p class="rock">rock</p>`;
            } if (pokemon.tipos.includes("ghost")) {
                tiposHTMLString += `<p class="ghost">ghost</p>`;
            } if (pokemon.tipos.includes("dark")) {
                tiposHTMLString += `<p class="dark">dark</p>`;
            } if (pokemon.tipos.includes("metal")) {
                tiposHTMLString += `<p class="metal">metal</p>`;
            } if (pokemon.tipos.includes("fairy")) {
                tiposHTMLString += `<p class="fairy">fairy</p>`;
            } if (pokemon.tipos.includes("dragon")) {
                tiposHTMLString += `<p class="dragon">dragon</p>`;
            }
        }
        else {
            tiposHTMLString = `<p class=${pokemon.tipos}>${pokemon.tipos}</p>`;
        }

    return `
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
                        ${tiposHTMLString}
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
    `;
    }).join('');
    pokedex.innerHTML = pokemonHTMLString
}

document.getElementById('myForm').addEventListener('submit', (event) => {
    event.preventDefault();
    fetchPokemon();
});