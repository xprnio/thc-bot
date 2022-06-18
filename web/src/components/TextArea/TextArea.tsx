import { FC, ReactElement, useState } from "react";
import { SendButton, TextArea, TextAreaContainer } from "./TextArea.Styled";
import { Icon } from 'react-icons-kit'
import { compass } from 'react-icons-kit/icomoon/compass'


const TextAreaInput: FC = (): ReactElement => {
    const [message, setMessage] = useState('')
    const chatMessageSend = (e: any) => {
        console.log(message)
        e.preventDefault()
    }
  
    return (
        <TextAreaContainer onSubmit={chatMessageSend}>
            <TextArea onChange={event => setMessage(event.target.value)}></TextArea>
            <SendButton>
                <Icon icon={compass}></Icon>
            </SendButton>
        </TextAreaContainer>
    )
  };



export default TextAreaInput;