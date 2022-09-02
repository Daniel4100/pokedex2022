import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokeCard from "../PokeCard";
import './evolutionpoke.css';

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const EvolutionPoke = () => {
  const [evolutions, setEvolutions] = useState();
  // const [namepokemon, setNamePokemon] = useState();
  const [loading, setLoading] = useState(true);
  // const [pokemon, setPokemon] = useState()
  const [pokemonsGroup, setPokemonsGroup] = useState()

  const { name } = useParams();

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon-species/${name}/`;
    axios
      .get(URL)
      .then((res) => setEvolutions(res.data.evolution_chain.url))
      .catch((err) => console.log(err));
  }, [name]);

  useEffect(() => {
    
    axios
      .get(evolutions)
      .then((res) => {
        (res.data.chain)
        const group = []
        group.push(res.data.chain.species.name)
        group.push(res.data.chain.evolves_to[0].species.name)
        group.push(res.data.chain.evolves_to[0].evolves_to[0].species.name)
        setPokemonsGroup(group) })

      .catch((err) => console.log(err));
  }, [evolutions]);

  console.log(pokemonsGroup)

  
  

  
  

  const handleClick = () => navigate("/pokedex");

  return (
    <div className="evolutions__container"> 
    <div className="pokemons__container">
      {
        pokemonsGroup?.map((pokemon, index) => (
          <PokeCard key={index} url={`https://pokeapi.co/api/v2/pokemon/${pokemon}/`} />
        ))
      
      }
    </div>
    </div>
  );
};

export default EvolutionPoke;
