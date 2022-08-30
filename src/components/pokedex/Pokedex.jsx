import axios from "axios";
import React, { useEffect, useState } from "react";
import { useStore } from "react-redux";
import PokeCard from "../PokeCard";
import Pagination from "./Pagination";
import PokedexForm from "./PokedexForm";
import SelecForm from "./SelecForm";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState();
  const [types, setTypes] = useState();
  const [filterType, setFilterType] = useState("All Pokemons");
  const [pokesearch, setPokesearch] = useState()
  const [filterPokeSearch, setFilterPokeSearch] = useState('')
  const [arrayPokemons, setArrayPokemons] = useState()
  const [arrayPokemonsPaged, setArrayPokemonsPaged] = useState([])
  const [pokemonsPerPage, setPokemonsPerPage] = useState(8)
  const [currentPage, setCurrentPage] = useState(1)
  


  const getAllPokemon = () => {
    if (filterType === "All Pokemons") {
      const URL = "https://pokeapi.co/api/v2/pokemon";
      axios
        .get(URL)
        .then((res) => setPokemons(res.data.results))
        .catch((err) => console.log(err));
    } else {
      const URL = `https://pokeapi.co/api/v2/type/${filterType}/`;
      axios.get(URL)
      .then((res) => setPokemons(res.data.pokemon.map(poke =>(poke.pokemon))))
      .catch((err) => console.log(err))
    }
  };
  

  const getTypes = () => {
    const URL = "https://pokeapi.co/api/v2/type";
    axios
      .get(URL)
      .then((res) => setTypes(res.data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllPokemon();
    getTypes();
  }, []);

  useEffect(() => {
    getAllPokemon();
    setPokesearch('')

  }, [filterType])

  
  useEffect(() => {

    if (pokesearch) {
      setFilterPokeSearch(pokemons?.filter(pokemon => (pokemon.name.includes(pokesearch?.toLowerCase()))))
    }else{
      // setArrayPokemons(pokemons) => aqui tambien funcionaba esta linea en vez de la siguiente, la siguiente es mas legible 
      setFilterPokeSearch(undefined)
    }
}, [pokesearch])





useEffect(() => {
  if (filterPokeSearch) {
  setArrayPokemons(filterPokeSearch)
}else{
  setArrayPokemons(pokemons)
}
}, [pokemons, filterPokeSearch])

//pagination



let arrayPages = []
let quantityPages = Math.ceil(arrayPokemons?.length / pokemonsPerPage)
const pagesPerBlock = 5
let currentBlock = Math.ceil(currentPage / pagesPerBlock)
if (currentBlock * pagesPerBlock >= quantityPages) {
  for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;i <= quantityPages; i++) {
    arrayPages.push(i)
  }
}else{
  for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock; i++) {
    arrayPages.push(i)
  }
}
useEffect(() => {
  if (arrayPokemons?.length < pokemonsPerPage) {
  setArrayPokemonsPaged(arrayPokemons)
}else{
  const lastPokemon = currentPage * pokemonsPerPage
  setArrayPokemonsPaged(arrayPokemons?.slice(lastPokemon - pokemonsPerPage, lastPokemon))
}
}, [currentPage, arrayPokemons])


  return (
    <div className="pokemons__container">
      <PokedexForm types={types} setFilterType={setFilterType} setPokesearch={setPokesearch} pokesearch={pokesearch} setFilterPokeSearch={setFilterPokeSearch} setCurrentPage={setCurrentPage} />

      {arrayPokemonsPaged?.map((pokemon) => (
        <PokeCard key={pokemon.url} url={pokemon.url} />
      ))}
      <Pagination arrayPages={arrayPages} currentPage={currentPage} setCurrentPage={setCurrentPage} quantityPages={quantityPages} />

      <SelecForm setPokemonsPerPage={setPokemonsPerPage} getAllPokemon={getAllPokemon} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Pokedex;
