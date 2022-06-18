import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    flex-grow: 0;
    flex-shrink: 0;
    margin: 5px;
    border: 1px solid black;
    height: 150px;
    width: 200px;
    background-color: #41658A;
    padding: 10px;
    color: white;
`;

export const Header = styled.div`
    display: flex;
    flex-grow: 0;
    justify-content: space-between;
    align-items: center;
    div{
        padding: 10px;
        p{
            margin: 0;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    flex-grow: 1;
    
    h1, h2, h3 { margin: 0 }
`;
