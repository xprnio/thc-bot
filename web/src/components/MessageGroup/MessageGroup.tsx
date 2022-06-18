import React from 'react';
import styled from 'styled-components/macro';
import MessageBubble from '../MessageBubble/MessageBubble';
import * as Styled from './MessageGroup.styled';

const TypingMessageBubble = styled(MessageBubble)``;

type MessageGroupProps = {
  messages: string[];
  isTyping: boolean;
};
const MessageGroup: React.FC<MessageGroupProps> = ({ messages, isTyping }) => {
  return (
    <Styled.MessageGroup>
      {messages.map((message, index) => (
        <MessageBubble key={index}>{message}</MessageBubble>
      ))}
      {isTyping && (
        <TypingMessageBubble>...</TypingMessageBubble>
      )}
    </Styled.MessageGroup>
  );
};
export default MessageGroup;
