import { ChatBubbleContainer, ChatPersonImage, Time, Text } from "./ChatBubble.Styled";

type ChatProps = {
    rightSide: boolean,
    time: string,
    text: string,
    name: string
}

const ChatBubble = ({rightSide, time, text, name}: ChatProps) => 
    <ChatBubbleContainer rightSide={rightSide}>
        <ChatPersonImage></ChatPersonImage>
        <p>{name}</p>
        <Text>{text}</Text>
        <Time>{time}</Time>

    </ChatBubbleContainer>
;

export default ChatBubble;