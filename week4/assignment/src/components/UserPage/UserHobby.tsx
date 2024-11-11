import styled from "@emotion/styled";
import Theme from "../../styles/theme";
import { Title, Label, Input, Button, Container } from "../../styles/common";

const UserHobby = () => {
  return (
    <Container>
      <Title>취미</Title>
      <Label>나의 취미</Label>
      <HobbyText>독서</HobbyText>
      <Label htmlFor="password">다른 사람들의 취미</Label>
      <Input id="password" placeholder="사용자 번호" type="text" />
      <Button>검색</Button>
      <HobbyText>1번 사용자의 취미 : 독서</HobbyText>
    </Container>
  );
};

export default UserHobby;

const HobbyText = styled.span`
  font-size: ${Theme.fontSize.medium};
  font-weight: ${Theme.fontWeight.medium};
  color: ${Theme.color.green};
  text-align: start;
`;
