import { FC, ReactElement, useState } from "react";
import { SendButton, TextArea, TextAreaContainer } from "./TextArea.Styled";



const TextAreaInput: FC = (): ReactElement => {
    const [message, setMessage] = useState('')
    const chatMessageSend = (e: any) => {
        console.log(message)
        e.preventDefault()
    }
  
    return (
        <TextAreaContainer onSubmit={chatMessageSend}>
            <TextArea onChange={event => setMessage(event.target.value)}></TextArea>
            <SendButton>Send</SendButton>
        </TextAreaContainer>
    )
  };



export default TextAreaInput;