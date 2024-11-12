import { useState, useEffect, ChangeEvent } from "react";
import styled from "@emotion/styled";
import Theme from "../../styles/theme";
import { Title, Label, Input, Button, Container } from "../../styles/common";

import { GetMyHobby, GetUserHobby } from "../../apis/auth";

const UserHobby = () => {
  const [myHobby, setMyHobby] = useState<string>("");
  const [userNo, setUserNo] = useState<string>("");
  const [searchResult, setSearchResult] = useState<{ userNo: string; hobby: string }>({
    userNo: "",
    hobby: "",
  });

  // 내 취미 가져오기
  useEffect(() => {
    const getMyHobby = async () => {
      const hobby = await GetMyHobby();
      setMyHobby(hobby);
    };

    getMyHobby();
  }, []);

  // 사용자 번호 입력 값 관리 함수
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserNo(e.target.value);
  };

  // 다른 사용자의 취미 검색 함수
  const searchUserHobby = async () => {
    if (!userNo) {
      alert("사용자 번호를 입력해주세요.");
      return;
    }

    const hobby = await GetUserHobby(userNo);
    setSearchResult({ userNo, hobby });
  };

  return (
    <Container>
      <Title>취미</Title>
      <Label>나의 취미</Label>
      <HobbyText>{myHobby}</HobbyText>
      <Label htmlFor="userNo">다른 사람들의 취미</Label>
      <Input
        id="userNo"
        placeholder="사용자 번호"
        type="text"
        value={userNo}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <Button onClick={searchUserHobby}>검색</Button>
      {searchResult.userNo && (
        <HobbyText>
          {searchResult.userNo}번 사용자의 취미 : {searchResult.hobby}
        </HobbyText>
      )}
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
