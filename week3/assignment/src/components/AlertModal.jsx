import styled from "@emotion/styled";

const AlertModal = ({ time, onClose }) => {
  return (
    <Background>
      <Modal>
        <span>게임 끝!</span>
        <span>기록 {time}초</span>
        <button onClick={onClose}>닫기</button>
      </Modal>
    </Background>
  );
};

export default AlertModal;

const Background = styled.dialog`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  background: transparent;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 16rem;
  height: 12rem;
  border-radius: 5px;
  background: white;

  span {
    font-size: 1.5rem;
  }

  button {
    font-size: 1.2rem;
    padding: 0.6rem 1.2rem;
    border-radius: 5px;
    background-color: var(--red);
    color: white;
  }
`;
