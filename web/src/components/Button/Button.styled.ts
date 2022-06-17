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
`;
