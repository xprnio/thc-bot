import { useMemo } from 'react';
import * as Styled from './Card.styled';

export type ProfitCardProps = {
  label: string;
  margin: number;
  profit: number;
}

const ProfitCard = (item: ProfitCardProps) => {
  const sign = useMemo(
    () => item.profit > 0 ? '+' : '-',
    [item],
  );
  const profit = Math.abs(item.profit);
  const currency = '$';
  return (
    <Styled.Container>
      <Styled.Header>
        <h1>{item.label}</h1>
        <Styled.MarginTicker margin={item.margin}>{item.margin}%</Styled.MarginTicker>
      </Styled.Header>
      <Styled.Content>
        <h1>{sign}&nbsp;{profit}{currency}</h1>
      </Styled.Content>
    </Styled.Container>
  );
};
export default ProfitCard;
