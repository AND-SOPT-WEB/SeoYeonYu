import { useState, useEffect } from "react";
import styled from "@emotion/styled";

const Timer = ({ gameState }) => {
  const [time, setTime] = useState(0);

  const saveData = (time) => {
    const gameData = {
      timestamp: new Date(),
      level: 1,
      time: time.toFixed(2),
    };

    const rankingData = JSON.parse(localStorage.getItem("rankingData")) || [];
    rankingData.push(gameData);
    localStorage.setItem("rankingData", JSON.stringify(rankingData));
  };

  useEffect(() => {
    let timerId;
    if (gameState.start) {
      timerId = setInterval(() => {
        setTime((prev) => prev + 0.01);
      }, 10);
    } else if (!gameState.start && time !== 0) {
      clearInterval(timerId);
      setTime(0);
      if (!gameState.reset) {
        alert(`게임 끝! 기록: ${time.toFixed(2)}초`);
        saveData(time);
      }
    }

    return () => clearInterval(timerId);
  }, [gameState.start, time]);

  return <Time>{time.toFixed(2)}</Time>;
};

export default Timer;

const Time = styled.span`
  width: 3.8rem;
  font-size: 1.5rem;
  font-weight: 600;
`;
