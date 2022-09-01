import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import {Routes, Route} from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokedex from './components/pokedex/Pokedex'
import PokemonDetails from './components/pokemonInfo/PokemonDetails'
import Home from "./components/home/Home";
import AbautPoke from "./components/pokemonInfo/AbautPoke";
import StatsPoke from "./components/pokemonInfo/StatsPoke";
import MovesPoke from "./components/pokemonInfo/MovesPoke";
import EvolutionPoke from "./components/pokemonInfo/EvolutionPoke";
import GaleryPoke from "./components/pokemonInfo/GaleryPoke";

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route element={<ProtectedRoutes/>}>
          <Route path="/pokedex" element={<Pokedex/>}/>
          <Route path="/pokedex/:name/" element={<PokemonDetails/>}>
            <Route path='about' element={<AbautPoke/>}/>
            <Route path='stats' element={<StatsPoke/>}/>
            <Route path='moves' element={<MovesPoke/>}/>
            <Route path='evolutions' element={<EvolutionPoke/>}/>
            <Route path='galery' element={<GaleryPoke/>}/>
          </Route>
        </Route>
        {/* <Route path="*" element={<h1>page not found</h1>}/> */}
      </Routes>
    </div>
  );
}

export default App;
