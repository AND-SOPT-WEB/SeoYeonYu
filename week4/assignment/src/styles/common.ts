import styled from "@emotion/styled";

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.black};
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  text-align: start;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.color.green};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const Button = styled.button`
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.color.green};
  border: 1px solid ${({ theme }) => theme.color.green};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.color.deepGreen};
  }

  &:disabled {
    border: 1px solid ${({ theme }) => theme.color.gray};
    background-color: ${({ theme }) => theme.color.gray};
  }
`;

export const Container = styled.section`
  margin-top: 40%;
  display: flex;
  flex-direction: column;
  width: 30rem;
  gap: 2rem;
  text-align: center;
`;
