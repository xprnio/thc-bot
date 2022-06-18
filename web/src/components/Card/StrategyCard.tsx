import { useMemo } from 'react';
import * as Styled from './Card.styled';

type StrategyCardProps = {
  label: string;
  profit: number;
  total: number;
  margin: number;
};

const StrategyCard = (item: StrategyCardProps) => {
  const sign = useMemo(
    () => item.profit > 0 ? '+' : '-',
    [item.profit],
  );
  const currency = '$';
  return (
    <Styled.Container>
      <Styled.Header>
        <h1>{item.label}</h1>
        <Styled.MarginTicker margin={item.margin}>{item.margin}%</Styled.MarginTicker>
      </Styled.Header>
      <Styled.Content>
        <h1>{sign}&nbsp;{item.profit}{currency}</h1>
        <h3>{item.total}{currency}</h3>
      </Styled.Content>
    </Styled.Container>
  );
};
export default StrategyCard;
