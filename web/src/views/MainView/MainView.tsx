import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import ConversationControls from '../../components/ConversationControls/ConversationControls';
import MessageGroup from '../../components/MessageGroup/MessageGroup';
import { getConversation } from '../../features/conversation/conversationSlice';
import useConversation from '../../hooks/useConversation';
import * as Styled from './MainView.styled';

const MainView = () => {
  const navigate = useNavigate();
  const { conversation, messages, allowInput, isTyping, isLast } = useConversation();
  const dispatch = useAppDispatch();
  const handleSubmit = useCallback((value: string | null) => {
    if (isLast) {
      navigate('/dashboard');
      return;
    }

    dispatch(getConversation({
      username: 'George',
      type: 'POST',
      payload: { value },
    }));
  }, [isLast, navigate, dispatch]);

  return (
    <Styled.Container>
      <MessageGroup messages={messages} isTyping={isTyping} />
      {conversation && allowInput && (
        <ConversationControls
          options={conversation.options}
          type={conversation.type}
          onSubmit={handleSubmit}
          visible={true}
          buttonText={isLast ? 'Complete' : 'Continue'}
        />
      )}
    </Styled.Container>
  );
};

export default MainView;
