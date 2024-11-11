import styled from "@emotion/styled";
import Theme from "../../styles/theme";

const Header = () => {
  return (
    <Container>
      <Nav>
        <h1>마이페이지</h1>
        <span>취미</span>
        <span>내 정보</span>
      </Nav>

      <span>로그아웃</span>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 1.8rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: ${Theme.color.deepGreen};
  font-size: ${Theme.fontSize.medium};
  color: ${Theme.color.white};

  span {
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.8rem;

  h1 {
    font-weight: ${Theme.fontWeight.medium};
    cursor: pointer;
  }
`;
