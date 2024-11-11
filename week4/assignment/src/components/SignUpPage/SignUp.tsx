import { useState, ChangeEvent } from "react";
import styled from "@emotion/styled";
import Theme from "../../styles/theme";
import { Title, Label, Input, Button, Container } from "../../styles/common";

const SignUp = () => {
  const [step, setStep] = useState<number>(1);

  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [hobby, setHobby] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>(false);

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
    }
  };

  const handleStep = () => {
    if (step === 1 && name) {
      setStep(2);
    } else if (step === 2 && !passwordError && !confirmPasswordError) {
      setStep(3);
    }
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <SignUpForm>
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
            <Input
              id="password"
              placeholder="비밀번호를 입력해주세요"
              type="password"
              value={password}
              onChange={handleChange}
            />
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
              disabled={!password || passwordError || confirmPasswordError}
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
            <Button disabled={!hobby}>회원가입</Button>
          </>
        )}
      </SignUpForm>

      <LoginLink>
        이미 회원이신가요? <b>로그인</b>
      </LoginLink>
    </Container>
  );
};

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

const LoginLink = styled.a`
  font-size: ${Theme.fontSize.small};
  font-weight: ${Theme.fontWeight.medium};
  color: ${Theme.color.black};

  b {
    color: ${Theme.color.green};
    cursor: pointer;
  }
`;

export default SignUp;
