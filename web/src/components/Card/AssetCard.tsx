import { useMemo } from 'react';
import * as Styled from './Card.styled';

type AssetCardProps = {
  profit: number,
  label: string,
  value: number,
  margin: number
};

const AssetCard = (item: AssetCardProps) => {
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
        <h3>{item.value}{currency}</h3>
      </Styled.Content>
    </Styled.Container>
  );
};
export default AssetCard;
