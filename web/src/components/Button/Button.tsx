import React, { useState } from 'react';
import * as Styled from './Button.styled';

const Button: React.FC<React.PropsWithChildren> = (props) => {
  const [toggled, setToggled] = useState(false);

  return (
    <Styled.Button toggled={toggled}>
      { props.children }
    </Styled.Button>
  )
}

export default Button;
