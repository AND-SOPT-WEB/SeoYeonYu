import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import ModalPortal from "./ModalPortal";
import AlertModal from "./AlertModal";

const Timer = ({ level, gameState }) => {
  const [time, setTime] = useState(0);
  const [finalTime, setFinalTime] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const saveData = (time) => {
    const gameData = {
      timestamp: new Date().toISOString(),
      level: level,
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
      if (!gameState.reset) {
        setFinalTime(time);
        setIsModalOpen(true);
        saveData(time);
      }
      clearInterval(timerId);
      setTime(0);
    }

    return () => clearInterval(timerId);
  }, [gameState.start, gameState.reset, time]);

  return (
    <>
      <Time>{time.toFixed(2)}</Time>
      <ModalPortal>
        {isModalOpen && <AlertModal time={finalTime} onClose={() => setIsModalOpen(false)} />}
      </ModalPortal>
    </>
  );
};

export default Timer;

const Time = styled.span`
  width: 3.8rem;
  font-size: 1.5rem;
  font-weight: 600;
`;
