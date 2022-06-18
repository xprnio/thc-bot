import React from 'react';
import { ConversationOption } from '../../features/conversation/conversationSlice';
import { Button } from '../Button/Button.styled';
import * as Styled from './OptionGroup.styled';

type OptionGroupProps = {
  options: ConversationOption[]
  onSubmit: (value: string) => any
}

export const OptionGroup: React.FC<OptionGroupProps> = ({ options, onSubmit }) => (
  <Styled.OptionGroup>
    {options.map(option => (
      <Button key={option.key} onClick={() => onSubmit(option.key)}>
        {option.label}
      </Button>
    ))}
  </Styled.OptionGroup>
);
