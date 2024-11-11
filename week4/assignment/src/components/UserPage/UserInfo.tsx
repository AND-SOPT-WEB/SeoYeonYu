import { Title, Label, Input, Button, Container } from "../../styles/common";

const UserInfo = () => {
  return (
    <Container>
      <Title>내 정보 수정하기</Title>
      <Label htmlFor="newPassword">새 비밀번호</Label>
      <Input id="newPassword" type="text" />
      <Label htmlFor="newHobby">새 취미</Label>
      <Input id="newHobby" type="text" />
      <Button>수정하기</Button>
    </Container>
  );
};

export default UserInfo;
