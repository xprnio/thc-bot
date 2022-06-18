export enum StrategyRiskLevel {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
}

export type StrategyUserRating = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type Strategy = {
  id: string;
  name: string;
  description: string;
  risk_level: StrategyRiskLevel;
  user_rating: StrategyUserRating;
  average_profit: number;
};
