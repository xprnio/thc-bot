import { ChatBubbleContainer, Text } from "./ChatBubble.Styled";

type ChatProps = {
    rightSide: boolean,
    text: string,
}

const ChatBubble = ({rightSide, text}: ChatProps) => 
    <ChatBubbleContainer rightSide={rightSide}>
        <Text>{text}</Text>
    </ChatBubbleContainer>
;

export default ChatBubble;