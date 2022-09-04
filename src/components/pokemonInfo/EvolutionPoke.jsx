import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokeCard from "../PokeCard";
import './evolutionpoke.css';
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const EvolutionPoke = () => {
  const [evolutions, setEvolutions] = useState();
  
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
        console.log(res.data)
        if (res.data.chain['evolves_to'].length != 0){
          group.push(res.data.chain.evolves_to[0].species.name)
          if (res.data.chain.evolves_to[0].evolves_to.length != 0) {
            group.push(res.data.chain.evolves_to[0].evolves_to[0].species.name)
          }
        }
        
        
        setPokemonsGroup(group) })

      .catch((err) => console.log(err));
  }, [evolutions]);

  console.log(pokemonsGroup)
  console.log(evolutions)

  
  

  
  

  const handleClick = () => navigate("/pokedex");

  return (
    <motion.div initial={{opacity: 0, x: -100}}
    animate={{opacity: 1, x: 0,}}  className="evolutions__container"> 
    <div className="pokemons__container">
      {
        pokemonsGroup?.map((pokemon, index) => (
          <PokeCard key={index} url={`https://pokeapi.co/api/v2/pokemon/${pokemon}/`} />
        ))
      
      }
    </div>
    </motion.div>
  );
};

export default EvolutionPoke;
