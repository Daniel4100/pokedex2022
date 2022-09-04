import React, { useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const GaleryPoke = () => {
  // galeria pokemon con pokeapi y framer motion
  const [pokeGalery, setPokeGalery] = useState()

  const {name} = useParams()

  useEffect(() => { 
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then(res => setPokeGalery(res.data.sprites))
    .catch(err => console.log(err))
  }, [name])

  console.log(pokeGalery)

  
  return (
    <motion.div
      className="galery"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
    >
      {pokeGalery && (
        <div className="galery__container">
          <div className="galery__container__img">
            <img src={pokeGalery.versions['generation-v']['black-white'].animated.front_default} alt="" />
            <p></p>
          </div>
          <div className="galery__container__img">
          <img src={pokeGalery.versions['generation-v']['black-white'].animated.back_default} alt="" />
          </div>
          <div className="galery__container__img">
          <img src={pokeGalery.versions['generation-v']['black-white'].animated.front_shiny} alt="" />
          </div>
          <div className="galery__container__img">
          <img src={pokeGalery.versions['generation-v']['black-white'].animated.back_shiny} alt="" />
          </div>
          <div className="galery__container__img">
            <img src={pokeGalery.other.dream_world.front_default} alt="" />
          </div>
          <div className="galery__container__img">
            <img src={pokeGalery.other.home.front_default} alt="" />
          </div>
          <div className="galery__container__img">
            <img src={pokeGalery.other.home.front_shiny} alt="" />
          </div>


        </div>
      )}
    </motion.div>
  );
};

export default GaleryPoke;
