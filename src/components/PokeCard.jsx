import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router"
import {motion} from 'framer-motion'

const PokeCard = ({ url, item, name }) => {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate()

  

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPokemon(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClicks = () => {
    navigate(`/pokedex/${pokemon.id}/about`)
    console.log(pokemon.id)
  }
  // console.log(pokemon)
  return (
    <motion.div layout variants={item} whileHover={{scale: 1.06}} onClick={handleClicks} className={`container ${pokemon?.id == name && 'pokeEvolution'}`}>
      <span className={`pokemon-id ${pokemon?.types[0].type.name}`}>
            #<b>{pokemon?.id}</b>
          </span>
      <motion.div  className="card">
        <div className={`card__head`}>
          
          
          <div className='card__headimagecontainer'>
            
            <div className={`bg bg${pokemon?.types[0].type.name}`}></div>
            {loading ? (
              <img
                src={`./media/pokeball.png`}
                className="loader"
                alt="loader"
              />
            ) : (
              <motion.img
                layout
                src={pokemon?.sprites.other["official-artwork"].front_default ? (pokemon?.sprites.other["official-artwork"].front_default) : './media/imageNotFound.png' }
                className="pokemon-img"
                alt="logo"
              />
            )}
          </div>
        </div>
        <div className="card-body">
          <div className="pokemon-title">
            <h4>{pokemon?.name}</h4>
          </div>
          <div className="pokemon-properties">
              
            <div className="product-stats">
              <h4>stats</h4>
              <div className="stats-container">
                <div className="card__stats">
                  <p className="card__number">{pokemon?.stats[0].base_stat}</p>
                  <p className="card__text">HP</p>
                </div>
                <div className="card__stats">
                  <p className="card__number">{pokemon?.stats[1].base_stat}</p>
                  <p className="card__text">ATTACK</p>
                </div>
                <div className="card__stats">
                  <p className="card__number">{pokemon?.stats[2].base_stat}</p>
                  <p className="card__text">DEFENSE</p>
                </div>
                <div className="card__stats">
                  <p className="card__number">{pokemon?.stats[4].base_stat}</p>
                  <p className="card__text">SPEED</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-icons__padre">
            {pokemon?.types.map((type) => (
              <motion.div whileHover={{scale: 1.04 }} key={type.type.url} className="container-icons">
                <motion.div   className={`bgicon `}>
                  <img
                  src={`./media/${type.type.name}.svg`}
                  className={`icon ${type.type.name}`}
                  alt={type.type.name}
                />
                </motion.div>
                

                <div className="container-icons_span">
                  <span>{type.type.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PokeCard;
