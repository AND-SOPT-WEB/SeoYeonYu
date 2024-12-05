import instance from "./http";
import axios from "axios";

// POST : 로그인
export const PostLogin = async (name: string, password: string) => {
  try {
    const response = await instance.post("/login", {
      username: name,
      password: password,
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        alert("아이디 또는 비밀번호를 정확히 입력해주세요.");
      } else if (error.response?.status === 403) {
        alert("비밀번호가 올바르지 않습니다.");
      }
    } else {
      alert("로그인에 실패했습니다.");
    }
    throw error;
  }
};

// POST : 회원가입
export const PostSignUp = async (name: string, password: string, hobby: string) => {
  try {
    const response = await instance.post("/user", {
      username: name,
      password: password,
      hobby: hobby,
    });
    alert(`회원가입 성공! 회원 번호: ${response.data.result.no}`);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.status === 409) {
      alert("이미 존재하는 사용자 이름입니다.");
    } else {
      alert("회원가입에 실패했습니다.");
    }
    throw error;
  }
};

// GET: 내 취미 조회
export const GetMyHobby = async () => {
  try {
    const response = await instance.get(`/user/my-hobby`);
    return response.data.result.hobby;
  } catch (error) {
    throw error;
  }
};

// GET: 다른 사람의 취미 조회
export const GetUserHobby = async (userNo: string) => {
  try {
    const response = await instance.get(`/user/${userNo}/hobby`);
    return response.data.result.hobby;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data.code === "01") {
      alert("해당 번호의 회원이 존재하지 않습니다.");
    } else {
      alert("취미 조회에 실패했습니다.");
    }
    throw error;
  }
};

// PUT: 유저 정보 변경
export const PutUserInfo = async (hobby: string, password: string) => {
  try {
    const response = await instance.put(`/user`, {
      hobby: hobby,
      password: password,
    });
    alert("정보가 성공적으로 변경되었습니다.");
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400 && error.response?.data?.code === "00") {
        alert("취미 또는 비밀번호를 8자 이하로 입력해주세요.");
      }
    } else {
      alert("정보 변경에 실패했습니다.");
    }

    throw error;
  }
};
