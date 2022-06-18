import React from 'react';
import InputField from '../InputField/InputField';
import * as Styled from './ConversationControls.styled'

const ConversationControls: React.FC = () => {
  return (
    <Styled.Container>
      <InputField />
    </Styled.Container>
  );
};
export default ConversationControls;
