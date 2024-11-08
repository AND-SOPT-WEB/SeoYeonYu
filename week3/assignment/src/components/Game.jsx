import styled from "@emotion/styled";
import ModalPortal from "./ModalPortal";
import AlertModal from "./AlertModal";
import useGame from "../hooks/useGame";

const Game = ({ level, startGame, endGame, finalTime, resetState }) => {
  const {
    gridNumber,
    halfNumber,
    numbers,
    nextNumber,
    isModalOpen,
    setIsModalOpen,
    handleNumberClick,
    initGame,
  } = useGame(level, startGame, endGame, resetState);

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

      {/* 게임 종료 모달 */}
      <ModalPortal>
        {isModalOpen && (
          <AlertModal
            time={finalTime}
            onClose={() => {
              setIsModalOpen(false);
              initGame();
            }}
          />
        )}
      </ModalPortal>
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
