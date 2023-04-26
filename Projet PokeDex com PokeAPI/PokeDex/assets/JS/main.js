
const getPokemon = async () => {
  
  try{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    if(!response.ok) {
      throw new Error ('erro na requisição') 
    }

    const pokemonRequest = await response.json()
    console.log(await pokemonRequest.results)

    const pokemonList = pokemonRequest.results

    pokemonList.forEach(async pokemon => {
      console.log(pokemon.name)
      
      const responseUrlDetails = await fetch(pokemon.url)
      console.log(await responseUrlDetails.json())
    })

  } catch (error) {
    alert(error) 
  }
}

getPokemon()