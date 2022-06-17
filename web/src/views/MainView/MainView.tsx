import { ChatBoxLocation, ChatLayout, ChatTextsArea } from './MainView.styled';
import isAuthenticated from '../../hooks/api/useAuthentication'
import Navigation from '../../components/Navigation/Navigation';
import ChatBubble from '../../components/ChatBubble/ChatBubble';

const dummy = [
  {text: 'dqwiepqwoie', time: '11:00', name: 'sergei'},
  {text: 'xd21 nvsad 2e13123 dsadasdsa', time: '13:00', name: 'paul'},
  {text: 'dkjlasjdklkajdlk lsdjlaskjdlkas daskljdalksjdlka', time: '13:00', name: 'joss'},
  {text: 'daldlk;akd;lak;dlaks', time: '13:00', name: 'dex'},
]


const MainView = () => 
    <ChatLayout>
      <ChatTextsArea>
        {
          dummy.map((item, index) => {
            if (index % 2){
              return <ChatBubble rightSide={true} text={item.text} time={item.time} name={item.name}></ChatBubble>
            }else{
              return <ChatBubble rightSide={false} text={item.text} time={item.time} name={item.name}></ChatBubble>
            }
          })
        }

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