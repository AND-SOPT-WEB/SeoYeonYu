import "./App.css";
import styled from "@emotion/styled";
import Card from "./components/Card";
import { members } from "./assets/data";

function App() {
  return (
    <Wrapper>
      <h1>React Practice</h1>
      {members.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  gap: 2.5rem;
`;
