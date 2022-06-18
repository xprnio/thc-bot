import styled from 'styled-components/macro';


export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const NavItem = styled.button`
  width: 100%;
  padding: 12px 0;

  color: #41658A;
  border: none;
  border-top: 1px solid #303030;
  background: transparent;

  &:active {
    color: #79E2E2;
  }
`;
