import { useState, ChangeEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Title, Label, Input, Button, Container } from "../../styles/common";

import { PostSignUp } from "../../apis/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hobby, setHobby] = useState("");

  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [hobbyError, setHobbyError] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  // 회원가입 입력값 관리 함수
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    // 이름 입력
    if (id === "name") {
      setName(value);
      setNameError(value.length > 8);
    }

    // 비밀번호 입력
    if (id === "password") {
      setPassword(value);
      setPasswordError(value.length > 8);
    }

    // 비밀번호 확인
    if (id === "confirmPassword") {
      setConfirmPassword(value);
      setConfirmPasswordError(value !== password);
    }

    // 취미 입력
    if (id === "hobby") {
      setHobby(value);
      setHobbyError(value.length > 8);
    }
  };

  // 회원가입 단계 관리 함수
  const handleStep = () => {
    if (step === 1 && name) {
      setStep(2);
    } else if (step === 2 && !passwordError && !confirmPasswordError) {
      setStep(3);
    }
  };

  // 회원가입 함수
  const signUp = async (e: React.FormEvent) => {
    e.preventDefault();
    await PostSignUp(name, password, hobby);
    navigate("/");
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <SignUpForm onSubmit={signUp}>
        {(() => {
          switch (step) {
            case 1:
              return (
                <>
                  <Label htmlFor="name">이름</Label>
                  <Input
                    id="name"
                    placeholder="사용자 이름을 입력해주세요"
                    type="text"
                    value={name}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {nameError && <Error>이름을 8자 이하로 입력해주세요.</Error>}
                  <Button onClick={handleStep} disabled={!name || nameError}>
                    다음
                  </Button>
                </>
              );

            case 2:
              return (
                <>
                  <Label htmlFor="password">비밀번호</Label>
                  <InputContainer>
                    <input
                      id="password"
                      placeholder="비밀번호를 입력해주세요"
                      type={isVisible ? "text" : "password"}
                      value={password}
                      onChange={handleChange}
                    />
                    <ShowIcon onClick={() => setIsVisible(!isVisible)}>
                      {isVisible ? (
                        <i className="fa-regular fa-eye"></i>
                      ) : (
                        <i className="fa-regular fa-eye-slash"></i>
                      )}
                    </ShowIcon>
                  </InputContainer>
                  <Label htmlFor="confirmPassword">비밀번호 확인</Label>
                  <Input
                    id="confirmPassword"
                    placeholder="비밀번호 확인"
                    type="password"
                    value={confirmPassword}
                    onChange={handleChange}
                  />
                  {passwordError && <Error>비밀번호는 8자 이하로 입력해주세요.</Error>}
                  {confirmPasswordError && <Error>비밀번호가 일치하지 않습니다.</Error>}
                  <Button
                    onClick={handleStep}
                    disabled={
                      !password || !confirmPassword || passwordError || confirmPasswordError
                    }
                  >
                    다음
                  </Button>
                </>
              );

            case 3:
              return (
                <>
                  <Label htmlFor="hobby">취미</Label>
                  <Input
                    id="hobby"
                    placeholder="취미를 입력해주세요"
                    type="text"
                    value={hobby}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {hobbyError && <Error>취미는 8자 이하로 입력해주세요.</Error>}
                  <Button onClick={signUp} disabled={!hobby || hobbyError}>
                    회원가입
                  </Button>
                </>
              );

            default:
              return null;
          }
        })()}
      </SignUpForm>

      <LoginLink>
        이미 회원이신가요? <Link to="/">로그인</Link>
      </LoginLink>
    </Container>
  );
};

export default SignUp;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Error = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  text-align: start;
  color: ${({ theme }) => theme.color.error};
`;

const LoginLink = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.black};

  a {
    color: ${({ theme }) => theme.color.green};
    cursor: pointer;
  }
`;

const InputContainer = styled.div`
  padding: 0.8rem;
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.green};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.medium};

  input {
    width: 100%;
  }
`;

const ShowIcon = styled.div`
  color: ${({ theme }) => theme.color.gray};
  cursor: pointer;
`;
