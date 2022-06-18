import { ChatBoxLocation, ChatLayout, ChatTextsArea } from './MainView.styled';
import ChatBubble from '../../components/ChatBubble/ChatBubble';
import TextAreaInput from '../../components/TextArea/TextArea';
import { Button } from '../../components';

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
              return <ChatBubble key={index}  rightSide={true} text={item.text} ></ChatBubble>
            }else{
              return <ChatBubble  key={index} rightSide={false} text={item.text} ></ChatBubble>
            }
          })
        }

      </ChatTextsArea>
      <ChatBoxLocation>
        <Button>
           button 
        </Button>
        <TextAreaInput></TextAreaInput>
      </ChatBoxLocation>
      
    </ChatLayout>
;

export default MainView;