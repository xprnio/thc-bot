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
  background-color: rgba(65, 101, 138, .4);
  padding: 10px;
  color: #303030;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  justify-content: flex-start;
  align-items: flex-start;
  
  h1 {
    font-size: 16px;
  }
  small {
    font-size: 12px;
    font-weight: 300;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  flex-grow: 1;
  
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 36px;
  }
  h3 {
    font-size: 20px;
    font-weight: 300;
  }
  h4 {
    font-size: 14px;
    font-weight: 300;
  }
  h1, h2, h3, h4 {
    line-height: 1;
  }
`;

type MarginTickerProps = { margin: number };
const marginTickerContent = ({ margin }: MarginTickerProps) => {
  if (margin > 0) return '▲';
  if (margin < 0) return '▼';
  return '';
}
const marginTickerColor = ({ margin }: MarginTickerProps) => {
  if (margin > 0) return '#70AE6E';
  if (margin < 0) return '#F06543';
  return 'transparent';
}
export const MarginTicker = styled.small`
  vertical-align: middle;
  &::before {
    content: '${marginTickerContent}';
    color: ${marginTickerColor};
  }
`;
