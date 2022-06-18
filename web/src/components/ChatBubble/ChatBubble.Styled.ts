import styled from 'styled-components/macro';

interface Props {
    rightSide: boolean
}



export const ChatBubbleContainer = styled.div<Props>`
   // border: 2px solid  ${(props) => props.rightSide == true ? '#4168A' : '#79E2E2'};
    background-color: #f1f1f1;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
    align-self: ${(props) => props.rightSide === true ? 'start' : 'end'};
    border: 4px solid #00bfb6;
    color: #00bfb6;
    font-family: arial;
    position: relative;
    font-size: 14px;
    width: max-content;
`;

export const Text = styled.p`
    color: #000;
    margin: 0;
`;

