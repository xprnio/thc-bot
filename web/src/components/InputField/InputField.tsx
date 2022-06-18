import React from 'react';
import { useCallback, useState } from 'react';
import { Icon } from 'react-icons-kit';
import { compass } from 'react-icons-kit/icomoon/compass';
import { SendButton, Input, TextAreaContainer } from './InputField.styled';

type InputFieldProps = {
  onSubmit: (value: string) => any
}

const InputField: React.FC<InputFieldProps> = ({onSubmit}) => {
  const [message, setMessage] = useState('');

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMessage(value);
  }, []);

  const chatMessageSend = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(message);
  }, [message, onSubmit]);

  return (
    <TextAreaContainer onSubmit={chatMessageSend}>
      <Input onChange={handleChange} />
      <SendButton type="submit">
        <Icon size='24' icon={compass} />
      </SendButton>
    </TextAreaContainer>
  );
};


export default InputField;
