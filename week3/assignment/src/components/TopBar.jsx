import styled from "@emotion/styled";
import Timer from "./Timer";

const TopBar = ({ selectedButton, handleButton, level, handleLevel, gameState, resetGame }) => {
  const buttons = ["게임", "랭킹"];
  const levels = [1, 2, 3];

  return (
    <Container>
      <h1>1 to 50</h1>
      <SectionContainer>
        <Section>
          {buttons.map((text) => (
            <Button
              key={text}
              isSelected={selectedButton === text}
              onClick={() => handleButton(text)}
            >
              {text}
            </Button>
          ))}
        </Section>

        {selectedButton === "게임" && (
          <Section>
            <LevelSelect value={level} onChange={handleLevel}>
              {levels.map((num) => (
                <option key={num} value={num}>
                  Level {num}
                </option>
              ))}
            </LevelSelect>
            <Timer {...{ level, gameState, resetGame }} />
          </Section>
        )}
      </SectionContainer>
    </Container>
  );
};

export default TopBar;

const Container = styled.header`
  padding: 0 4rem;
  display: flex;
  align-items: center;
  gap: 4rem;
  height: 5rem;
  background-color: var(--red);

  h1 {
    font-size: 2rem;
    font-weight: 800;
    flex-shrink: 0;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 1.2rem;
  background-color: ${({ isSelected }) => (isSelected ? "var(--orange)" : "transparent")};
  color: white;
  font-weight: 600;
  border-radius: 0.8rem;
  cursor: pointer;
`;

const LevelSelect = styled.select`
  padding: 0.5rem;
  border-radius: 0.8rem;
`;
