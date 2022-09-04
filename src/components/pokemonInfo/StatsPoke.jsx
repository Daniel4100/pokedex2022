import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./statsPoke.css";
import { motion } from "framer-motion";

const StatsPoke = () => {
  const [pokeStats, setPokeStats] = useState();

  const { name } = useParams();

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    axios
      .get(URL)
      .then((res) => setPokeStats(res.data))
      .catch((err) => console.log(err));
  }, [name]);
  console.log(pokeStats);

  return (
    <motion.div initial={{opacity: 0, x: -100}}
    animate={{opacity: 1, x: 0,}} className="stats-container__pokemon">
      <div className="stats-pokemon">
        {pokeStats &&
          pokeStats.stats.map((stat) => (
            <div key={stat.stat.name} className="stat">
              <div className="stat-name">{stat.stat.name}</div>
              <div className="stat-number">{stat.base_stat}</div>
              <div className="stat-bar-container">
                <div className="stat-bar">
                  <div
                    className={`stat-per ${
                      stat.base_stat > 50
                        ? `shadownone ${pokeStats.types[0].type.name}`
                        : "stat-minus"
                    }`}
                    style={{ width: stat.base_stat*100/255 + "%" }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </motion.div>
  );
};

export default StatsPoke;
