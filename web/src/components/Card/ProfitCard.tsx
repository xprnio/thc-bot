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
    return (
        <Styled.Container>
            <Styled.Header>
                <label>{item.label}</label>
                <small>{item.margin}%</small>
            </Styled.Header>
            <Styled.Content>
                <h1>{sign}&nbsp;{item.profit}&nbsp;&#36;</h1>
            </Styled.Content>
        </Styled.Container>
    );
};
export default ProfitCard;
