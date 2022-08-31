import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState();

  const navigate = useNavigate()

  const { name } = useParams();
  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    axios
      .get(URL)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {name}
      <button onClick={() => navigate(-1)}> voler</button>
    </div>
  );
};

export default PokemonDetails;
