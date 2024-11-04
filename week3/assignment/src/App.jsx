import { useState } from "react";

import TopBar from "./components/TopBar";
import Game from "./components/Game";
import Ranking from "./components/Ranking";

function App() {
  const [selectedButton, setSelectedButton] = useState("게임");
  const [level, setLevel] = useState(1);

  return (
    <>
      <TopBar {...{ selectedButton, setSelectedButton, level, setLevel }} />
      {selectedButton === "게임" ? <Game level={level} /> : <Ranking />}
    </>
  );
}

export default App;
