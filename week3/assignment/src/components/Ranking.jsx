import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Ranking = () => {
  const [rankings, setRankings] = useState([]);

  // 게임 랭킹 데이터 설정 (로컬스토리지에서 게임 결과 가져와서 정렬 후 띄우기)
  useEffect(() => {
    const rankingData = JSON.parse(localStorage.getItem("rankingData")) || [];
    rankingData.sort((a, b) => {
      return b.level === a.level ? parseFloat(a.time) - parseFloat(b.time) : b.level - a.level;
    });
    setRankings(rankingData);
  }, []);

  // 게임 랭킹 초기화
  const resetRankingData = () => {
    localStorage.removeItem("rankingData");
    setRankings([]);
  };

  return (
    <Container>
      <RankingHeader>
        <h2>랭킹</h2>
        <button onClick={resetRankingData}>초기화</button>
      </RankingHeader>

      <RankingTable>
        <thead>
          <RankingTableRow>
            <th>타임스탬프</th>
            <th>레벨</th>
            <th>플레이 시간</th>
          </RankingTableRow>
        </thead>
        <tbody>
          {rankings.map((data, index) => (
            <RankingTableRow key={index}>
              <td>{new Date(data.timestamp).toLocaleString()}</td>
              <td>Level {data.level}</td>
              <td>{data.time} 초</td>
            </RankingTableRow>
          ))}
        </tbody>
      </RankingTable>
    </Container>
  );
};

export default Ranking;

const Container = styled.section`
  margin: 8rem auto;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.05);
`;

const RankingHeader = styled.div`
  position: relative;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  h2 {
    font-size: 1.6rem;
    color: black;
  }

  button {
    position: absolute;
    right: 0;
    padding: 0.5rem 1rem;
    background-color: var(--red);
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const RankingTable = styled.table`
  width: 100%;
  font-size: 1.2rem;

  th {
    padding: 0.75rem;
    border: 1px solid whitesmoke;
    background-color: var(--red);
    font-weight: 700;
    text-align: start;
  }

  td {
    padding: 0.75rem;
    border: 1px solid whitesmoke;
    color: black;
  }
`;

const RankingTableRow = styled.tr`
  display: grid;
  grid-template-columns: 4fr 1fr 2fr;

  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;
