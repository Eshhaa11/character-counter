import { useState } from "react";
import "./Character.css";

function Character() {
  const [character, setCharacter] = useState("");
  return (
    <div className="cont">
        <h1>LIVE CHARACTER COUNTER</h1>
      <textarea
        value={character}
        onChange={(e) => setCharacter(e.target.value)}
        placeholder="Enter something"
        rows="15"
      />
      <p>Character Count: {character.length}</p>
    </div>
  );
}

export default Character;
