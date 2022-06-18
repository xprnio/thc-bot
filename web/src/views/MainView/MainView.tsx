import ConversationControls from '../../components/ConversationControls/ConversationControls';
import MessageGroup from '../../components/MessageGroup/MessageGroup';
import useConversation from '../../hooks/useConversation';
import * as Styled from './MainView.styled';

const MainView = () => {
  const { messages, isTyping } = useConversation();

  return (
    <Styled.Container>
      <MessageGroup messages={messages}  isTyping={isTyping} />
      <ConversationControls />
    </Styled.Container>
  );
};

export default MainView;
