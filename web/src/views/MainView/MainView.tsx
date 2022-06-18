import { useCallback } from 'react';
import { useAppDispatch } from '../../app/hooks';
import ConversationControls from '../../components/ConversationControls/ConversationControls';
import MessageGroup from '../../components/MessageGroup/MessageGroup';
import { getConversation } from '../../features/conversation/conversationSlice';
import useConversation from '../../hooks/useConversation';
import * as Styled from './MainView.styled';

const MainView = () => {
  const { conversation, messages, isTyping } = useConversation();
  const dispatch = useAppDispatch();
  const handleSubmit = useCallback((value: string | null) => {
    dispatch(getConversation({
      username: 'test',
      type: 'POST',
      payload: { value },
    }));
  }, [dispatch]);

  return (
    <Styled.Container>
      <MessageGroup messages={messages} isTyping={isTyping} />
      {conversation && (
        <ConversationControls
          options={conversation.options}
          type={conversation.type}
          onSubmit={handleSubmit}
          visible={true}
        />
      )}
    </Styled.Container>
  );
};

export default MainView;
