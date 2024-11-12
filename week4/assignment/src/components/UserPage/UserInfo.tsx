import { useState, ChangeEvent } from "react";
import { Title, Label, Input, Button, Container } from "../../styles/common";

import { PutUserInfo } from "../../apis/auth";

const UserInfo = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [newHobby, setNewHobby] = useState<string>("");

  // 변경할 비밀번호 & 취미 입력값 관리 함수
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleHobbyChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewHobby(event.target.value);
  };

  // 정보 변경 함수
  const updateInfo = async () => {
    if (!newPassword && !newHobby) {
      alert("변경할 정보를 입력해주세요.");
      return;
    }

    await PutUserInfo(newHobby, newPassword);
    setNewPassword("");
    setNewHobby("");
  };

  return (
    <Container>
      <Title>내 정보 수정하기</Title>
      <Label htmlFor="newPassword">새 비밀번호</Label>
      <Input id="newPassword" type="password" value={newPassword} onChange={handlePasswordChange} />
      <Label htmlFor="newHobby">새 취미</Label>
      <Input
        id="newHobby"
        type="text"
        value={newHobby}
        onChange={handleHobbyChange}
        autoComplete="off"
      />
      <Button onClick={updateInfo}>수정하기</Button>
    </Container>
  );
};

export default UserInfo;
