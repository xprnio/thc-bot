import styled from 'styled-components/macro';

interface Props {
    rightSide: boolean
}

export const ChatBubbleContainer = styled.div<Props>`
    border: 2px solid #dedede;
    background-color: #f1f1f1;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    text-align: ${(props) => props.rightSide == true ? 'left' : 'right'};

`;

export const ChatPersonImage = styled.img`
    float: left;
    max-width: 60px;
    width: 100%;
    margin-right: 20px;
    border-radius: 50%;
`;

export const Time = styled.span`
    color: #000;
`;

export const Text = styled.p`
    color: #000;
`;

