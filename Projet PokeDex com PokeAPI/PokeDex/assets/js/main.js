const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const content = document.querySelector('.content')
const body = document.querySelector('body')

const maxRecords = 151
const limit = 10
let offset = 0;

const convertPokemonToLi = (pokemon) => {
  const li = pokemon.map(value => {
    return `
      <li class="pokemon ${value.types[0].type.name}">
        <span class="number">#${value.id}</span>
        <span class="name">${value.name}</span>

        <div class="detail">
        <ol class="types">
            <li class="type ${value.types[0].type.name}">
              ${value.types[0].type.name}</li>

            <li class="type ${value.types[1] ? value.types[1].type.name : ''}"> 
              ${value.types[1] ? value.types[1].type.name : ''}</li> 
        </ol>

        <img src="${value.sprites.other.dream_world.front_default}"
            alt="${value.name}">
        </div>
      </li>
    `
  }).join('')
  pokemonList.innerHTML += li
}

function loadPokemonItens(offset, limit) {
  getPokemonData(offset, limit)
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
  offset += limit
  const qtdRecordsWithNexPage = offset + limit

  if (qtdRecordsWithNexPage >= maxRecords) {
    const newLimit = maxRecords - offset
    loadPokemonItens(offset, newLimit)

    loadMoreButton.parentElement.removeChild(loadMoreButton)
  } else {
    loadPokemonItens(offset, limit)
  }
})
