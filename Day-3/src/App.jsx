import { useState } from "react";
import "./App.css";
import StartGame from "./components/StartGame";
import PlayGame from "./components/PlayGame";

function App() {
    const [startGame, setStartGame] = useState(false);
    return (
        <div>
            {startGame ? (
                <PlayGame />
            ) : (
                <StartGame setStartGame={setStartGame} />
            )}
        </div>
    );
}

export default App;
