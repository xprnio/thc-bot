import styled from 'styled-components/macro';

export const Scrollable = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
