import { useState } from "react";

import TopBar from "./components/TopBar";
import Game from "./components/Game";
import Ranking from "./components/Ranking";

function App() {
  const [selectedButton, setSelectedButton] = useState("게임");
  const [level, setLevel] = useState(1);

  // 게임 진행 상태 관리
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

  // 게임 / 랭킹 변경 함수
  const handleButton = (text) => {
    setSelectedButton(text);
  };

  // 레벨 변경 함수 (레벨 변경 시 게임 초기화)
  const handleLevel = (e) => {
    setLevel(Number(e.target.value));
    resetGame();
  };

  return (
    <>
      <TopBar {...{ selectedButton, handleButton, level, handleLevel, gameState, resetGame }} />
      {selectedButton === "게임" ? (
        <Game {...{ level, startGame, endGame }} resetState={gameState.reset} />
      ) : (
        <Ranking />
      )}
    </>
  );
}

export default App;
