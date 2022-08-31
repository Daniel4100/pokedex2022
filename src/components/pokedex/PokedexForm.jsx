import React from 'react'

const PokedexForm = ({types, setFilterType, setPokesearch, pokesearch, setFilterPokeSearch, setCurrentPage}) => {
  

  const inputChangue = (e) => {
    e.preventDefault()
    setPokesearch(e.target.value)
  }

  const selectChangue = (e) =>{
    setFilterType(e.target.value)
    setPokesearch(undefined)
    setFilterPokeSearch(undefined)
    setCurrentPage(1)
  }

  
  return (
    <form className='pokedex__form' >
        <input id="input" value={pokesearch} type="text" onChange={inputChangue} />
        <select name="" id="" onChange={selectChangue}>
            {/* {
              types && types.map(type =>(
                <option key={type.name} value={type.name} >{type.name}</option>
              ))
            } */}
            <option value="All Pokemons">All Pokemons</option>

            {types?.map(type=>(
              <option key={type.name} value={type.name}>{type.name}</option>
            ))}
            
        </select>
    </form>
  )
}

export default PokedexForm