import { ChatBoxLocation, ChatLayout, ChatTextsArea } from './MainView.styled';
const MainView = () => 
    <ChatLayout>
      <ChatTextsArea>
        Here goes text bubbles
      </ChatTextsArea>
      <ChatBoxLocation>
        chat box here
      </ChatBoxLocation>
    </ChatLayout>
;

export default MainView;