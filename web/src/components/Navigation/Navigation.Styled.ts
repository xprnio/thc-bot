import styled from 'styled-components/macro';


export const NavItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const NavItem = styled.button`
    width: 100%;
    height: 30px;
    background-color: #41658A;
    color: #f0f0f0;
    &:active{
        background-color: #79E2E2;
    }
`;
