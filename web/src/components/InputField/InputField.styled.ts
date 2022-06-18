import styled from 'styled-components/macro';


export const Input = styled.input`
  width: 100%;
  padding: 8px 16px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 36px;
  background-color: #f8f8f8;
  font-size: 14px;
  resize: none;
  outline: none;
`;

export const TextAreaContainer = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const SendButton = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  background: none;
  border: none;
  outline: none;
  transform: rotate(45deg)
`;
