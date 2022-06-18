import React from 'react';
import { ConversationOption } from '../../features/conversation/conversationSlice';
import { Button } from '../Button/Button.styled';
import InputField from '../InputField/InputField';
import { OptionGroup } from '../OptionGroup/OptionGroup';
import * as Styled from './ConversationControls.styled'

type Controls = {
  type: 'information' | 'prompt' | 'options'
  visible: boolean
  onSubmit: (response: string | null) => any;
  options?: ConversationOption[]
}

const ConversationControls: React.FC<Controls> = ({type, visible, onSubmit, options}) => {
  if (!visible) return null;
  switch(type) {
    case 'information': {
      return (
        <Button onClick={() => onSubmit(null)}>
          Next
        </Button>
      )
    }
    case 'prompt': {
      return (
        <Styled.Container>
          <InputField onSubmit={onSubmit} />
        </Styled.Container>
      );
    }
    case 'options': {
      if (!options) return null;
      return (
        <OptionGroup options={options} onSubmit={onSubmit} />
      )
    }
    default: {
      return null
    }
  }
  
};
export default ConversationControls;
