import React, { useMemo } from 'react';
import * as Styled from './StrategyInformation.styled';

type StrategyInformationProps = {
  name: string;
  riskLevel: 'low' | 'medium' | 'high';
  userRating: number;
  averageProfit: number;
};
const StrategyInformation: React.FC<StrategyInformationProps> = (props) => {
  const { name, userRating, averageProfit } = props;

  const riskLevel = useMemo(() => {
    switch (props.riskLevel) {
      case 'low':
        return 'Low Risk';
      case 'medium':
        return 'Medium Risk';
      case 'high':
        return 'High Risk';
      default: return '';
    }
  }, [props]);


  return (
    <Styled.Container>
      <Styled.Row>
        <Styled.Name>{name}</Styled.Name>
        <Styled.RiskLevel>{riskLevel}</Styled.RiskLevel>
      </Styled.Row>
      <Styled.Row>
        <Styled.UserRating>Rating: {userRating}/10</Styled.UserRating>
        <Styled.Profit>{averageProfit}$</Styled.Profit>
      </Styled.Row>
    </Styled.Container>
  );
};
export default StrategyInformation;
