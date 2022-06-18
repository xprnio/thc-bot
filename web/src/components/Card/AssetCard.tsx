import { useMemo } from 'react';
import * as Styled from './Card.styled';

type AssetCardProps = {
    profit: number,
    label: string,
    total: number,
    margin: number
};

const AssetCard = (item: AssetCardProps) => {
    const sign = useMemo(
        () => item.profit > 0 ? '+' : '-',
        [item],
    );
    return (
        <Styled.Container>
            <Styled.Header>
                <label>{ item.label }</label>
                <small>{ item.margin }%</small>
            </Styled.Header>
            <Styled.Content>
                <h2>{sign}&nbsp;{item.profit}&nbsp;&#36;</h2>
                <h3>{item.total}</h3>
            </Styled.Content>
        </Styled.Container>
        );
};
export default AssetCard;
