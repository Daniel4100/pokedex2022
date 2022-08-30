import React from "react";

const SelecForm = ({ setPokemonsPerPage, getAllPokemon, setCurrentPage }) => {

  
  const onregister = (data) => {
    setPokemonsPerPage(data.target.value);
    setCurrentPage(1)
    getAllPokemon();
  };

  return (
    <form onChange={onregister}>
      <div>
        <input name="selected" id="4" type="radio" value="4" />
        <label htmlFor="4">4</label>
      </div>
      <div>
        <input name="selected" id="8" type="radio" value="8" />
        <label htmlFor="8">8</label>
      </div>
      <div>
        <input name="selected" id="12" type="radio" value="12" />
        <label htmlFor="12">12</label>
      </div>
      <div>
        <input name="selected" id="16" type="radio" value="16" />
        <label htmlFor="16">16</label>
      </div>
      <div>
        <input name="selected" id="20" type="radio" value="20" />
        <label htmlFor="20">20</label>
      </div>
    </form>
  );
};

export default SelecForm;
