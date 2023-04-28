
const pokeApi = {}

const convertPokeApiDetailToPokemon = (pokemonDetail) => {
  const pokemon = new Pokemon()
  pokemon.number = pokemonDetail.id
  pokemon.name = pokemonDetail.name

  const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name)
  const [type] = types

  pokemon.types = types
  pokemon.type = type

  pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default

  convertPokemonToLi(pokemon)
  return pokemon

}


pokeApi.getPokemonDetail = async (pokemons) => {
  console.log(pokemons)
  pokemons.forEach(async pokemon => {
    const response = await fetch(pokemon.url)
    const dataDetails = await response.json()
    convertPokeApiDetailToPokemon(dataDetails)
    console.log(dataDetails)
  })
}


pokeApi.getPokemons = async (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('não foi possível fazer a requisição!')
    }
    const data = await response.json()
    const pokemonsData = await data.results

    pokeApi.getPokemonDetail(pokemonsData)
    
  } catch (error) {
    alert(error)
  }
}
pokeApi.getPokemons()

