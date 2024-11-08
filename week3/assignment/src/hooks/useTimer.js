import { useState, useEffect } from "react";

const useTimer = (level, gameState, saveFinalTime) => {
  const [time, setTime] = useState(0);

  // 게임 결과 로컬스토리지에 저장
  const saveData = (time) => {
    const gameData = {
      timestamp: new Date().toISOString(),
      level,
      time: time.toFixed(2),
    };

    const rankingData = JSON.parse(localStorage.getItem("rankingData")) || [];
    rankingData.push(gameData);
    localStorage.setItem("rankingData", JSON.stringify(rankingData));
  };

  // 타이머 시작 / 종료 관리
  useEffect(() => {
    let timerId;
    if (gameState.start) {
      timerId = setInterval(() => {
        setTime((prev) => prev + 0.01);
      }, 10);
    } else if (!gameState.start && time !== 0) {
      if (!gameState.reset) {
        saveFinalTime(time);
        saveData(time);
      }
      clearInterval(timerId);
      setTime(0);
    }

    return () => clearInterval(timerId);
  }, [gameState.start, time, gameState.reset, saveFinalTime]);

  return time.toFixed(2);
};

export default useTimer;
