import React, { useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ setUpdated, updatedPkmnList, setPkmnList }) {
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(res => res.json())
    .then(pokemons =>{
      setUpdated(pokemons)
      setPkmnList(pokemons)
    })
  }, [])


  return (
    <Card.Group itemsPerRow={6}>
      {updatedPkmnList.map((pokemon) => <PokemonCard name={pokemon.name} hp={pokemon.hp} front={pokemon.sprites.front} back={pokemon.sprites.back} />)}
    </Card.Group>
  );
}

export default PokemonCollection;
