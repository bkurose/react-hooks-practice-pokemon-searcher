import React, { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pkmnList, setPkmnList] = useState([])
  const [updatedPkmnList, setUpdated] = useState(pkmnList)

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pkmnList={pkmnList} setPkmnList={setPkmnList} setUpdated={setUpdated} />
      <br />
      <Search pkmnList={pkmnList} setUpdated={setUpdated} />
      <br />
      <PokemonCollection setUpdated={setUpdated} setPkmnList={setPkmnList} updatedPkmnList={updatedPkmnList} />
    </Container>
  );
}

export default PokemonPage;
