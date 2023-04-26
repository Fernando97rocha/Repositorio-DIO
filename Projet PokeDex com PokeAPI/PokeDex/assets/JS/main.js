
const getPokemon = async () => {
  
  try{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    if(!response.ok) {
      throw new Error ('erro na requisição') 
    }

    const pokemonList = await response.json()
    console.log(await pokemonList)
  } catch (error) {
    alert(error) 
  }
}

getPokemon()