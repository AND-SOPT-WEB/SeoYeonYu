import { useState } from "react";

import TopBar from "./components/TopBar";
import Game from "./components/Game";
import Ranking from "./components/Ranking";

function App() {
  const [selectedButton, setSelectedButton] = useState("게임");
  const [level, setLevel] = useState(1);
  const [gameState, setGameState] = useState({ start: false, reset: false });

  const startGame = () => {
    setGameState({ start: true, reset: false });
  };

  const endGame = () => {
    setGameState({ start: false, reset: false });
  };

  const resetGame = () => {
    setGameState({ start: false, reset: true });
  };

  return (
    <>
      <TopBar {...{ selectedButton, setSelectedButton, level, setLevel, resetGame, gameState }} />
      {selectedButton === "게임" ? (
        <Game {...{ level, startGame, endGame, gameState }} />
      ) : (
        <Ranking />
      )}
    </>
  );
}

export default App;
