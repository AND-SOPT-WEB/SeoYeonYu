import styled from "@emotion/styled";
import Theme from "../../styles/theme";
import { Title, Input, Button } from "../../styles/common";

const Login = () => {
  return (
    <Container>
      <Title>로그인</Title>
      <LoginForm>
        <Input placeholder="아이디" type="text" />
        <Input placeholder="비밀번호" type="password" />
        <Button>로그인</Button>
      </LoginForm>
      <SignupLink>회원가입</SignupLink>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  width: 30rem;
  gap: 2rem;
  text-align: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SignupLink = styled.a`
  font-size: ${Theme.fontSize.small};
  text-decoration: underline;
  color: ${Theme.color.gray};
  cursor: pointer;

  &:hover {
    color: ${Theme.color.black};
  }
`;

export default Login;
