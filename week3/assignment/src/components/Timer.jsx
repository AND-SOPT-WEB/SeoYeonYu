import styled from "@emotion/styled";
import useTimer from "../hooks/useTimer";

const Timer = ({ level, gameState, saveFinalTime }) => {
  const time = useTimer(level, gameState, saveFinalTime);

  return <Time>{time}</Time>;
};

export default Timer;

const Time = styled.span`
  width: 3.8rem;
  font-size: 1.5rem;
  font-weight: 600;
`;
