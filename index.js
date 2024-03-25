const listaPokemon = document.querySelector("#listaPokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/";
for (let i = 1; i <= 151; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => displayPokemon(data))
}

function displayPokemon(pokemon) {
    let tiposHTMLString = pokemon.types.map((type) => `<p class=${type.type.name}>${type.type.name}</p>`);
    tiposHTMLString = tiposHTMLString.join('');

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
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
                <p style="width: 100px; color: antiquewhite;">Attack</p><p style="width: 50px; color: antiquewhite;">${pokemon.stats[1].base_stat}</p><p class="attack" style="width: ${pokemon.stats[1].base_stat}px;"></p>
            </div>
            <div class="estadistica">
                <p style="width: 100px; color: antiquewhite;">Defense</p><p style="width: 50px; color: antiquewhite;">${pokemon.stats[2].base_stat}</p><p class="defense" style="width: ${pokemon.stats[2].base_stat}px;"></p>
            </div>
            <div class="estadistica">
                <p style="width: 100px; color: antiquewhite;">Sp. Attack</p><p style="width: 50px; color: antiquewhite;">${pokemon.stats[3].base_stat}</p><p class="specialattack" style="width: ${pokemon.stats[3].base_stat}px;"></p>
            </div>
            <div class="estadistica">
                <p style="width: 100px; color: antiquewhite;">sp. Defense</p><p style="width: 50px; color: antiquewhite;">${pokemon.stats[4].base_stat}</p><p class="specialdefense" style="width: ${pokemon.stats[4].base_stat}px;"></p>
            </div>
            <div class="estadistica">
                <p style="width: 100px; color: antiquewhite;">HP</p><p style="width: 50px; color: antiquewhite;">${pokemon.stats[0].base_stat}</p><p class="hp"  style="width: ${pokemon.stats[0].base_stat}px;"></p>
            </div>
            <div class="estadistica">
                <p style="width: 100px; color: antiquewhite;">Speed</p><p style="width: 50px; color: antiquewhite;">${pokemon.stats[5].base_stat}</p><p class="speed"  style="width: ${pokemon.stats[5].base_stat}px;"></p>
            </div>
        </div>
    `;
    listaPokemon.append(div);
}

/*document.getElementById('myForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const PokemonInput = document.getElementById('pokemonInput').value;
    const PokemonArray = PokemonInput.split(',');
    for (const value of PokemonArray) {
        fetch(URL + value)
            .then((response) => response.json())
            .then(data => displayPokemon(data))
    }
});*/