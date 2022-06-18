import styled from 'styled-components/macro';

interface Props {
    rightSide: boolean
}



export const ChatBubbleContainer = styled.div<Props>`
    border: 2px solid #dedede;
    background-color: #f1f1f1;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
    text-align: ${(props) => props.rightSide === true ? 'left' : 'right'};
    border: 4px solid #00bfb6;
    color: #00bfb6;
    font-family: arial;
    position: relative;
    font-size: 14px;
    &:after {
       content: ${props => !!props.rightSide ? 'content' : " 🦄"};
        width: 0px;
        height: 0px;
        position: absolute;
        border-left: 10px solid #00bfb6;
        border-right: 10px solid transparent;
        border-top: 10px solid #00bfb6;
        border-bottom: 10px solid transparent;
        right: -20px;
        top: 6px;
            }
`;

export const Text = styled.p`
    color: #000;
`;

