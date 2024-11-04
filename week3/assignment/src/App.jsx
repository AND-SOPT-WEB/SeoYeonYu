import { useState } from "react";

import TopBar from "./components/TopBar";

function App() {
  const [selectedButton, setSelectedButton] = useState("게임");
  const [level, setLevel] = useState(1);

  return (
    <>
      <TopBar {...{ selectedButton, setSelectedButton, level, setLevel }} />
    </>
  );
}

export default App;
