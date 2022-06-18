import { ReactPropTypes } from 'react';
import styled from 'styled-components/macro';

type ButtonProps = { toggled: boolean };
const buttonBackgroundColor = ({ toggled }: ButtonProps) => {
  if (toggled) return 'white';
  return 'black';
}

const buttonColor = ({ toggled }: ButtonProps) => {
  if (toggled) return 'black';
  return 'white';
}
export const Button = styled.button<ButtonProps>`
  background-color: ${buttonBackgroundColor};
  color: ${buttonColor};
  width: 100%;
    background-color:#0a0a23;
    color: #fff;
    border:none; 
    border-radius:10px; 
    padding:15px;
    min-height:30px; 
`;
