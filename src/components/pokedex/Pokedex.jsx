import axios from "axios";
import React, { useEffect, useState } from "react";
import PokeCard from "../PokeCard";
import Header from "./Header";
import Pagination from "./Pagination";
import PokedexForm from "./PokedexForm";
import Welcome from "./Welcome";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Toogle from "./Toogle";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState();
  const [types, setTypes] = useState();
  // const [filterType, setFilterType] = useState("All Pokemons");
  const [pokesearch, setPokesearch] = useState();
  const [filterPokeSearch, setFilterPokeSearch] = useState("");
  const [arrayPokemons, setArrayPokemons] = useState();
  //pagination
  const [arrayPokemonsPaged, setArrayPokemonsPaged] = useState([]);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(8);
  // const [currentPage, setCurrentPage] = useState(1);
  //configurations
  const [configurations, setConfigurations] = useState(false);

  const container = {
    hidden: { opacity: 0},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0,},
    show: { opacity: 1,},
  };

  const filterType = useSelector(state => state.typeSlice)

  const getAllPokemon = () => {
    if (filterType === "All Pokemons") {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
      axios
        .get(URL)
        .then((res) => setPokemons(res.data.results))
        .catch((err) => console.log(err));
    } else {
      const URL = `https://pokeapi.co/api/v2/type/${filterType}/`;
      axios
        .get(URL)
        .then((res) =>
          setPokemons(res.data.pokemon.map((poke) => poke.pokemon))
        )
        .catch((err) => console.log(err));
    }
  };
  console.log(filterType)

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
    // setPokesearch("");
  }, [filterType]);

  useEffect(() => {
    if (pokesearch) {
      setFilterPokeSearch(
        pokemons?.filter((pokemon) =>
          pokemon.name.includes(pokesearch?.toLowerCase())
        )
      );
    } else {
      // setArrayPokemons(pokemons) => aqui tambien funcionaba esta linea en vez de la siguiente, la siguiente es mas legible
      setFilterPokeSearch(undefined);
    }
  }, [pokesearch]);

  useEffect(() => {
    if (filterPokeSearch) {
      setArrayPokemons(filterPokeSearch);
    } else {
      setArrayPokemons(pokemons);
    }
  }, [pokemons, filterPokeSearch]);

  //pagination
  const currentPage = useSelector(state => state.currentPageSlice)

  let arrayPages = [];
  let quantityPages = Math.ceil(arrayPokemons?.length / pokemonsPerPage);
  const pagesPerBlock = 5;
  let currentBlock = Math.ceil(currentPage / pagesPerBlock);
  if (currentBlock * pagesPerBlock >= quantityPages) {
    for (
      let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
      i <= quantityPages;
      i++
    ) {
      arrayPages.push(i);
    }
  } else {
    for (
      let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
      i <= currentBlock * pagesPerBlock;
      i++
    ) {
      arrayPages.push(i);
    }
  }
  useEffect(() => {
    if (arrayPokemons?.length < pokemonsPerPage) {
      setArrayPokemonsPaged(arrayPokemons);
    } else {
      const lastPokemon = currentPage * pokemonsPerPage;
      setArrayPokemonsPaged(
        arrayPokemons?.slice(lastPokemon - pokemonsPerPage, lastPokemon)
      );
    }
  }, [currentPage, arrayPokemons]);

  const handleClickConfigurations = () => setConfigurations(!configurations);

  return (
    <div className="pokedex-father">
      <Header  />
      <Welcome />
      

      <PokedexForm
        types={types}
        // setFilterType={setFilterType}
        setPokesearch={setPokesearch}
        pokesearch={pokesearch}
        setFilterPokeSearch={setFilterPokeSearch}
      />
      <Pagination
        arrayPages={arrayPages}
        // currentPage={currentPage}
        // setCurrentPage={setCurrentPage}
        quantityPages={quantityPages}
      />
      <motion.div >
        {arrayPokemonsPaged && (
          <motion.div variants={container} initial="hidden"
          animate="show" className="pokemons__container">
            {arrayPokemonsPaged.map((pokemon) => (
              <PokeCard  item={item} key={pokemon.url} url={pokemon.url} />
            ))}
          </motion.div>
        )}
      </motion.div>
      <Toogle handleClickConfigurations={handleClickConfigurations} configurations={configurations} setPokemonsPerPage={setPokemonsPerPage} getAllPokemon={getAllPokemon} />
      
    </div>
  );
};

export default Pokedex;
