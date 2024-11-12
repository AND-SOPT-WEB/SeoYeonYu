import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Theme from "../../styles/theme";

type HeaderProps = {
  handleSection: (text: "hobby" | "info") => void;
};

const Header = ({ handleSection }: HeaderProps) => {
  const navigate = useNavigate();

  // 로그아웃 함수
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Container>
      <Nav>
        <h1>마이페이지</h1>
        <span onClick={() => handleSection("hobby")}>취미</span>
        <span onClick={() => handleSection("info")}>내 정보</span>
      </Nav>
      <span onClick={logout}>로그아웃</span>
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
