import React from "react";
import PokemonCard from "./PokemonCard";

function Search({ pkmnList, setUpdated }) {

  function handleSearch(e) {
    const filteredPkmn = pkmnList.filter((pokemon) => pokemon.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setUpdated(filteredPkmn)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleSearch} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
