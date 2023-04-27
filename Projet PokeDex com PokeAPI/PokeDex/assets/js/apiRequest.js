
const pokeApi = {}

pokeApi.getPokemonDetail = async (pokemon) => {
  console.log(pokemon)

  // const detailsResponse = await fetch(pokemon.url)
  // console.log(detailsResponse)
}


pokeApi.getPokemons = async (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

  try {
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error('não foi possível fazer a requisição!')
    }

    const data = await response.json()
    const pokemonList = await data.results

    pokeApi.getPokemonDetail(pokemonList)

    console.log(await pokemonList);
  } catch (error) {
    alert(error)
  }
}

pokeApi.getPokemons()
