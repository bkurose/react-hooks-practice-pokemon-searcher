import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, front, back }) {
  const [sprite, setSprite] = useState(true)

  function handleClick() {
    setSprite(!sprite)
  }

  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img src={sprite ? front : back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
