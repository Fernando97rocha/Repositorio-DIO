
const fetchPokemonsUrls = async (urlList) => {
  const pokemons = urlList.map(async url => {
    const response = await fetch(url)
    return response.json()
  })

  Promise.all(pokemons)
    .then(pokemon => {
      console.log(pokemon);
      convertPokemonToLi(pokemon)
    })
}

const getPokemonData = async (offset, limit) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Erro na requisição')
    }
    const data = await response.json()
    const pokemonsData = await data.results

    const urlPokemonList = []
    pokemonsData.forEach(async pokemonData => {
      urlPokemonList.push(pokemonData.url)
    })
    fetchPokemonsUrls(urlPokemonList)
  } catch (error) {
    alert(error)
  }
}

