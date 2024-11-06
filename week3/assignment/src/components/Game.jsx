import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Game = ({ level, startGame, endGame, resetState }) => {
  const gridNumber = level + 2;
  const halfNumber = gridNumber ** 2;
  const maxNumber = halfNumber * 2;
  const initialNumbers = Array.from({ length: halfNumber }, (_, i) => i + 1);
  const additionalNumbers = Array.from({ length: halfNumber }, (_, i) => i + halfNumber + 1);

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const [nextNumber, setNextNumber] = useState(1);
  const [numbers, setNumbers] = useState(() => shuffleArray(initialNumbers));
  const [newNumbers, setNewNumbers] = useState(() => shuffleArray(additionalNumbers));

  useEffect(() => {
    setNextNumber(1);
    setNumbers(shuffleArray(initialNumbers));
    setNewNumbers(shuffleArray(additionalNumbers));
    endGame();
  }, [level, resetState]);

  const handleNumberClick = (num, index) => {
    if (num === nextNumber) {
      if (num === 1) startGame();
      if (nextNumber === maxNumber) {
        endGame();
        return;
      }

      setNextNumber((prev) => prev + 1);
      const updatedNumber = newNumbers.length > 0 ? newNumbers.pop() : null;
      setNumbers((prev) => {
        const updatedNumbers = [...prev];
        updatedNumbers[index] = updatedNumber;
        return updatedNumbers;
      });
    }
  };

  return (
    <Container>
      <h2>다음 숫자 : {nextNumber}</h2>
      <Grid gridNumber={gridNumber}>
        {numbers.map((num, index) =>
          num ? (
            <NumberButton
              key={index}
              onClick={() => handleNumberClick(num, index)}
              {...{ num, halfNumber }}
            >
              {num}
            </NumberButton>
          ) : (
            <DefaultButton key={index} />
          )
        )}
      </Grid>
    </Container>
  );
};

export default Game;

const Container = styled.section`
  margin: 8rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: fit-content;

  h2 {
    font-size: 1.6rem;
    color: black;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ gridNumber }) => gridNumber}, 1fr);
  gap: 1rem;
`;

const DefaultButton = styled.button`
  width: 6rem;
  height: 6rem;
  background-color: transparent;
`;

const NumberButton = styled(DefaultButton)`
  font-size: 2rem;
  background-color: ${({ num, halfNumber }) => (num > halfNumber ? "var(--red)" : "var(--orange)")};
  color: white;
  cursor: pointer;

  &:active {
    opacity: 0.3;
  }
`;
