import { useState } from "react";
import styled from "@emotion/styled";

const Card = ({ data }) => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <h2>{data.name}</h2>
      <p>{data.englishName}</p>
      <p>{data.github}</p>
      <div>
        <span>{count}</span>
        <button onClick={() => setCount((prev) => prev + 1)}>Like</button>
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  padding: 1rem;
  border: 1px solid black;
  border-radius: 5px;

  button {
    margin-left: 0.5rem;
  }
`;
