import React from 'react';
import { useCallback, useState } from 'react';
import { Icon } from 'react-icons-kit';
import { compass } from 'react-icons-kit/icomoon/compass';
import { SendButton, Input, TextAreaContainer } from './InputField.styled';

const InputField: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMessage(value);
  }, []);

  const chatMessageSend = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(message);
  }, [message]);

  return (
    <TextAreaContainer onSubmit={chatMessageSend}>
      <Input onChange={handleChange}></Input>
      <SendButton type="submit">
        <Icon icon={compass} />
      </SendButton>
    </TextAreaContainer>
  );
};


export default InputField;
