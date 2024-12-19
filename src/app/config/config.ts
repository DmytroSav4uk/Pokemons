const baseUrl = 'https://pokeapi.co/api/v2/'


const urls = {
  initial:`${baseUrl}pokemon?offset=0&limit=9`,
  withParams:`${baseUrl}pokemon?`,
  byName:`${baseUrl}pokemon/`
}


export {baseUrl,urls}
