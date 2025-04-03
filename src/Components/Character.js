import { useState } from "react";
import './Character.css'

function Character () {
    const [character, setCharacter] = useState("");
    return (
        <div>
           <textarea
             value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter something"
            rows="15"
           />
        </div>
    )
}

export default Character