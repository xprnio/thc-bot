import { ChatBoxLocation, ChatLayout, ChatTextsArea } from './MainView.styled';
import ChatBubble from '../../components/ChatBubble/ChatBubble';
import { TextArea } from '../../components/TextArea/TextArea.Styled';

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
              return <ChatBubble key={index}  rightSide={true} text={item.text} time={item.time} name={item.name}></ChatBubble>
            }else{
              return <ChatBubble  key={index} rightSide={false} text={item.text} time={item.time} name={item.name}></ChatBubble>
            }
          })
        }

      </ChatTextsArea>
      <ChatBoxLocation>
        <TextArea></TextArea>
      </ChatBoxLocation>
      
    </ChatLayout>
;

export default MainView;