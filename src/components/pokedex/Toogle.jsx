import React from "react";
import Logout from "./Logout";
import SelecForm from "./SelecForm";

const Toogle = ({handleClickConfigurations, configurations, setPokemonsPerPage, getAllPokemon}) => {
  return (
    <>
      <button onClick={handleClickConfigurations} className="configurations">
        <img src="./media/slider.png" alt="" />
      </button>
      {configurations && (
        <article className="configurations__toggle">
          <SelecForm
            setPokemonsPerPage={setPokemonsPerPage}
            getAllPokemon={getAllPokemon}
            // setCurrentPage={setCurrentPage}
          />
          <Logout />
        </article>
      )}
    </>
  );
};

export default Toogle;
