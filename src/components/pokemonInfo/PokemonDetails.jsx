import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom";
import AbautPoke from "./AbautPoke";
import "./pokemonDetails.css"

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
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(pokemon)

  const handleClick = () => navigate('/pokedex')

  return (
    <div className="container__details">
      {/* <span className="pokemon-id">
        #<b>{pokemon?.id}</b>
      </span> */}
      <div className="card__details">
        <div className={`card__head-details`}>
          <div className="back-details">
            <button onClick={handleClick}><i className="fas fa-chevron-left"></i></button>
          </div>
        <div className="pokemon-title-details">
            <h4>{pokemon?.name}</h4>
          </div>
          <div className="card__headimagecontainer-details">
            <div className={`bg__details bg${pokemon?.types[0].type.name}`}></div>
            {loading ? (
              <img
                src={`./media/pokeball.png`}
                className="loader"
                alt="loader"
              />
            ) : (
              <img
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
        </div>
        <div className="card__body-details">
          <nav className="navbar">
              <ul>
                <li><NavLink to={`/pokedex/${name}/about`}>About</NavLink></li>
                <li><NavLink to={`/pokedex/${name}/stats`}>Stats</NavLink></li>
                <li><NavLink to={`/pokedex/${name}/moves`}>Moves</NavLink></li>
                <li><NavLink to={`/pokedex/${name}/evolutions`}>Evolutions</NavLink></li>
                <li><NavLink to={`/pokedex/${name}/galery`}>Galery</NavLink></li>
              </ul>
          </nav>
          <Outlet/>


        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
