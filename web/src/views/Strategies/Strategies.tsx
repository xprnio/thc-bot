import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Label } from '../../components/Label/Label';
import StrategyInformation from '../../components/StrategyInformation/StrategyInformation';
import { getStrategyPreviews, selectStrategyPreviews } from '../../features/strategies/strategiesSlice';
import * as Styled from './Strategies.styled';

const Strategies: React.FC = () => {
  const strategies = useAppSelector(selectStrategyPreviews);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getStrategyPreviews());
  }, [dispatch]);

  return (
    <Styled.Container>
      <Label type="heading">Top Strategies</Label>
      <Styled.Content>
        {strategies && strategies.map(strategy => (
          <StrategyInformation
            key={strategy.id}
            name={strategy.name}
            userRating={strategy.user_rating}
            riskLevel={strategy.risk_level}
            averageProfit={strategy.average_profit}
          />
        ))}
      </Styled.Content>
    </Styled.Container>
  );
};
export default Strategies;
