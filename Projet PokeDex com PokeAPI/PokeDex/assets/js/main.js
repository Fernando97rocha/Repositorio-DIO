const pokemonsOlList = document.querySelector('.pokemons')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

const convertPokemonToLi = (pokemonDetails) => {
  console.log(pokemonDetails)

  const newHtml = `
      <li class="pokemon ${pokemonDetails.type}">
        <span class="number">#${pokemonDetails.number}</span>
        <span class="name">${pokemonDetails.name}</span>

        <div class="detail">
          <ol class="types">
          ${pokemonDetails.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
          </ol>

          <img src="${pokemonDetails.photo}"
            alt="${pokemonDetails.name}">
        </div>
      </li>
    `
    pokemonsOlList.innerHTML += newHtml

}

// const loadPokemonItems = (offset, limit) => {
//   pokeApi.getPokemons(offset, limit)

//   convertPokeApiDetailToPokemon(() => {
//     console.log('funcionou')
//   })
// }

// loadPokemonItems(offset, limit)