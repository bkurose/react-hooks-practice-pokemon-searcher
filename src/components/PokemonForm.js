import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ setUpdated, setPkmnList, pkmnList }) {
  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [front, setFront] = useState("")
  const [back, setBack] = useState("")

  function handleChange(e) {
    if(e.target.name === "name") return setName(e.target.value)
    if(e.target.name === "hp") return setHp(e.target.value)
    if(e.target.name === "frontUrl") return setFront(e.target.value)
    if(e.target.name === "backUrl") return setBack(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newPkmn = {
      id: Date.now(), 
      name: name,
      hp: hp,
      sprites: {
        front: front,
        back: back,
      }
    }
    fetch(`http://localhost:3001/pokemon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPkmn)
    })
    .then(res => res.json())
    .then(pkmn => {
      setPkmnList([...pkmnList, pkmn])
      setUpdated([...pkmnList, pkmn])
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleChange} value={name} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={handleChange} value={hp} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            onChange={handleChange} 
            value={front} 
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={handleChange} 
            value={back} 
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
