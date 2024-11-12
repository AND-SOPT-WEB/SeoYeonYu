import { useState, ChangeEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "@emotion/styled";
import Theme from "../../styles/theme";
import { Title, Label, Input, Button, Container } from "../../styles/common";

import { PostSignUp } from "../../apis/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);

  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [hobby, setHobby] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>(false);
  const [hobbyError, setHobbyError] = useState<boolean>(false);

  const [isVisible, setIsVisible] = useState<boolean>(false);

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
        {step === 1 && (
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
            {nameError && <Error>이름를 8자 이하로 입력해주세요.</Error>}
            <Button onClick={handleStep} disabled={!name || nameError}>
              다음
            </Button>
          </>
        )}

        {step === 2 && (
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
            {passwordError && <Error>비밀번호를 8자 이하로 입력해주세요.</Error>}
            {confirmPasswordError && <Error>비밀번호가 일치하지 않습니다.</Error>}
            <Button
              onClick={handleStep}
              disabled={!password || !confirmPassword || passwordError || confirmPasswordError}
            >
              다음
            </Button>
          </>
        )}

        {step === 3 && (
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
        )}
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
  font-size: ${Theme.fontSize.small};
  text-align: start;
  color: ${Theme.color.error};
`;

const LoginLink = styled.span`
  font-size: ${Theme.fontSize.small};
  font-weight: ${Theme.fontWeight.medium};
  color: ${Theme.color.black};

  a {
    color: ${Theme.color.green};
    cursor: pointer;
  }
`;

const InputContainer = styled.div`
  padding: 0.8rem;
  display: flex;
  width: 100%;
  background: ${Theme.color.white};
  border: 1px solid ${Theme.color.green};
  border-radius: 4px;
  font-size: ${Theme.fontSize.medium};

  input {
    width: 100%;
  }
`;

const ShowIcon = styled.div`
  color: ${Theme.color.gray};
  cursor: pointer;
`;
