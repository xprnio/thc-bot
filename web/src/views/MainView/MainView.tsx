import { ChatBoxLocation, ChatLayout, ChatTextsArea } from './MainView.styled';
import isAuthenticated from '../../hooks/api/useAuthentication'
import Navigation from '../../components/Navigation/Navigation';



const MainView = () => 
    <ChatLayout>
      <ChatTextsArea>
        Here goes text bubbles
      </ChatTextsArea>
      <ChatBoxLocation>
        chat box here
      </ChatBoxLocation>
      { !!isAuthenticated && (
        <Navigation />
      )}
    </ChatLayout>
;

export default MainView;