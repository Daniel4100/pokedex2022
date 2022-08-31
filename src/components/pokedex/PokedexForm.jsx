import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getType } from '../../store/slices/type.slice'
import { getCurrent } from '../../store/slices/currentPage.slice'

const PokedexForm = ({types, setPokesearch, pokesearch, setFilterPokeSearch,}) => {
  
  const dispatch = useDispatch()

  const inputChangue = (e) => {
    e.preventDefault()
    setPokesearch(e.target.value)
    dispatch(getCurrent(1))
  }

  const selectChangue = (e) =>{
    dispatch(getType(e.target.value))
    setPokesearch('')
    setFilterPokeSearch(undefined)
    dispatch(getCurrent(1))
  }

  const filterType = useSelector(state => state.typeSlice)
  
  return (
    <form className='pokedex__form' >
        <input placeholder='Search pokemon' id="input" value={pokesearch} type="text" onChange={inputChangue} />
        <select name="" id="" onChange={selectChangue}>
            {/* {
              types && types.map(type =>(
                <option key={type.name} value={type.name} >{type.name}</option>
              ))
            } */}
            <option value={filterType}>{filterType}</option>
            {filterType != 'All Pokemons' ? <option value='All Pokemons'>all pokemons</option> : null}

            {types?.map(type=>
              (
                filterType === type.name ? null : (<option key={type.name} value={type.name}>{type.name}</option>)
            )
              
            )}
            
        </select>
    </form>
  )
}

export default PokedexForm