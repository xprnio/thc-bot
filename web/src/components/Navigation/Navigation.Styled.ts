import styled from 'styled-components/macro';


export const NavItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const NavItem = styled.button`
    width: 100%;
    height: 30px;
    padding-top: 5px;
    padding-bottom: 5px;

    color: #41658A;
    border: none;
    background: transparent;
    &:active{
        color: #79E2E2;
    }
`;
