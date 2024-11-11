import styled from "@emotion/styled";
import Theme from "./theme";

export const Title = styled.h1`
  font-size: ${Theme.fontSize.large};
  font-weight: ${Theme.fontWeight.bold};
  color: ${Theme.color.black};
`;

export const Label = styled.label`
  font-size: ${Theme.fontSize.medium};
  font-weight: ${Theme.fontWeight.medium};
  text-align: start;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid ${Theme.color.green};
  border-radius: 4px;
  font-size: ${Theme.fontSize.medium};
`;

export const Button = styled.button`
  padding: 0.8rem;
  background-color: ${Theme.color.green};
  border: 1px solid ${Theme.color.green};
  border-radius: 4px;
  font-size: ${Theme.fontSize.medium};
  font-weight: ${Theme.fontWeight.medium};
  color: ${Theme.color.white};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${Theme.color.deepGreen};
  }

  &:disabled {
    border: 1px solid ${Theme.color.gray};
    background-color: ${Theme.color.gray};
  }
`;

export const Container = styled.div`
  margin-top: 40%;
  display: flex;
  flex-direction: column;
  width: 30rem;
  gap: 2rem;
  text-align: center;
`;
