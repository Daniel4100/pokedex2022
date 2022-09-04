import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import "./pokemonDetails.css";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};



const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const { name } = useParams();

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    axios
      .get(URL)
      .then((res) => {
        setPokemon(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => console.log(err));
  }, [name]);

  console.log(pokemon);

  const handleClick = () => navigate("/pokedex");

  return (
    <motion.div layout  variants={variants} initial='hidden'  animate='visible'  className="container__details">
      {/* <span className="pokemon-id">
        #<b>{pokemon?.id}</b>
      </span> */}<div className="back-details">
          <button onClick={handleClick}>
            <i className="fas fa-chevron-left"></i>
          </button>
        </div>

      <div className="card__details">
        
        <motion.div  className={`card__head-details`}>
          <div className="pokemon-title-details">
            <h4>{pokemon?.name}</h4>
          </div>
          <div className="card__headimagecontainer-details">
            <div
              className={`bg__details bg${pokemon?.types[0].type.name}`}
            ></div>
            {loading ? (
              <img
                src={`./media/pokeball.png`}
                className="loader"
                alt="loader"
              />
            ) : (
              <motion.img
                
                initial={{ x: 100,
                  opacity: 0 }}
                animate={{ x: 0, 
                  opacity: 1 }}
                
                src={
                  pokemon?.sprites.other["official-artwork"].front_default
                    ? pokemon?.sprites.other["official-artwork"].front_default
                    : "./media/imageNotFound.png"
                }
                className="pokemon-img-details"
                alt="logo"
              />
            )}
          </div>
        </motion.div>
        <div  className="card__body-details">
          <nav className="navbar">
            <ul>
              <li>
                <NavLink to={`/pokedex/${name}/about`}>About</NavLink>
              </li>
              <li>
                <NavLink to={`/pokedex/${name}/stats`}>Stats</NavLink>
              </li>
              <li>
                <NavLink to={`/pokedex/${name}/moves`}>Moves</NavLink>
              </li>
              <li>
                <NavLink to={`/pokedex/${name}/evolutions`}>Evolutions</NavLink>
              </li>
              <li>
                <NavLink to={`/pokedex/${name}/galery`}>Galery</NavLink>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      </div>
    </motion.div>
  );
};

export default PokemonDetails;
