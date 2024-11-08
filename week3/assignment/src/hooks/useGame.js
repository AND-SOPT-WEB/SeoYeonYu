import { useState, useEffect } from "react";

const useGame = (level, startGame, endGame, resetState) => {
  const gridNumber = level + 2;
  const halfNumber = gridNumber ** 2;
  const maxNumber = halfNumber * 2;

  // 첫 화면에 띄워질 숫자 배열 생성
  const initialNumbers = Array.from({ length: halfNumber }, (_, i) => i + 1);
  // 다음 화면에 띄워질 숫자 배열 생성
  const additionalNumbers = Array.from({ length: halfNumber }, (_, i) => i + halfNumber + 1);

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const [nextNumber, setNextNumber] = useState(1);
  const [numbers, setNumbers] = useState(shuffleArray(initialNumbers));
  const [newNumbers, setNewNumbers] = useState(shuffleArray(additionalNumbers));

  const [isModalOpen, setIsModalOpen] = useState(false);

  // 게임 초기화 함수
  const initGame = () => {
    setNextNumber(1);
    setNumbers(shuffleArray(initialNumbers));
    setNewNumbers(shuffleArray(additionalNumbers));
  };

  // gamestate.reset 상태가 변화하면 게임 초기화
  useEffect(() => {
    initGame();
    endGame();
  }, [resetState]);

  // 숫자 버튼 클릭 관리 함수
  const handleNumberClick = (num, index) => {
    if (num === nextNumber) {
      if (num === 1) startGame();
      if (nextNumber === maxNumber) {
        endGame();
        setIsModalOpen(true);
        return;
      }

      setNextNumber((prev) => prev + 1);

      const updatedNewNumbers = [...newNumbers];
      const updatedNum = updatedNewNumbers.length > 0 ? updatedNewNumbers.pop() : null;
      setNewNumbers(updatedNewNumbers);
      setNumbers((prev) => {
        const updatedNumbers = [...prev];
        updatedNumbers[index] = updatedNum;
        return updatedNumbers;
      });
    }
  };

  return {
    gridNumber,
    halfNumber,
    numbers,
    nextNumber,
    isModalOpen,
    setIsModalOpen,
    handleNumberClick,
    initGame,
  };
};

export default useGame;
