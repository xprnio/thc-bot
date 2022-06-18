import React from 'react';
import { Label } from '../../components/Label/Label';
import StrategyInformation from '../../components/StrategyInformation/StrategyInformation';
import * as Styled from './Strategies.styled';

const Strategies: React.FC = () => {
  return (
    <Styled.Container>
      <Label type="heading">Top Strategies</Label>
      <Styled.Content>
        <StrategyInformation
          name="My Strategy"
          userRating={7}
          riskLevel="low"
          averageProfit={1000}
        />
        <StrategyInformation
          name="My Strategy"
          userRating={7}
          riskLevel="low"
          averageProfit={1000}
        />
      </Styled.Content>
    </Styled.Container>
  );
};
export default Strategies;
