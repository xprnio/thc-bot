import { Controller, Get, NotFoundException, Param, UseInterceptors } from '@nestjs/common';
import { EnvelopeInterceptor } from '../interceptors/envelope.interceptor';
import { Strategy, StrategyRiskLevel } from '../types/strategy.type';

@Controller('strategies')
@UseInterceptors(EnvelopeInterceptor)
export class StrategiesController {
  public static readonly Strategies: Strategy[] = [
    {
      id: 'moon-men',
      name: 'Men on the Moon',
      description: 'Bacon ipsum dolor amet tri-tip rump ball tip shoulder.',
      risk_level: StrategyRiskLevel.Low,
      user_rating: 3,
      average_profit: 15,
    },
    {
      id: 'big-hodl',
      name: 'Door Hodler',
      description: 'Sirloin beef ribs salami, buffalo pig prosciutto short ribs rump leberkas burgdoggen.',
      risk_level: StrategyRiskLevel.Medium,
      user_rating: 7,
      average_profit: 19,
    },
    {
      id: 'moby-dick',
      name: 'Moby Dick',
      description: 'Frankfurter pork belly burgdoggen porchetta, ribeye tri-tip drumstick picanha tail.',
      risk_level: StrategyRiskLevel.High,
      user_rating: 9,
      average_profit: 21,
    },
  ];

  @Get()
  async listStrategies(): Promise<Strategy[]> {
    return StrategiesController.Strategies;
  }

  @Get(':strategy_id')
  async getStrategyById(@Param('strategy_id') strategyId: string): Promise<Strategy> {
    const strategy = StrategiesController.Strategies.find((strategy) => strategy.id === strategyId);
    if (!strategy) throw new NotFoundException('Strategy not found');

    return strategy;
  }
}
