import { Controller, Get, NotFoundException, Param, UseInterceptors } from '@nestjs/common';
import { EnvelopeInterceptor } from '../interceptors/envelope.interceptor';
import { Strategy, StrategyRiskLevel } from '../types/strategy.type';

@Controller('strategies')
@UseInterceptors(EnvelopeInterceptor)
export class StrategiesController {
  public static readonly Strategies: Strategy[] = [
    {
      id: 'scalper',
      name: 'Scalper',
      description:
        'Scalping is also a popular trading strategy in the cryptocurrency market. This trading strategy allows traders to profit from little price movement at frequent intervals. The goal is to add up small profits each day to generate a substantial amount over time.',
      risk_level: StrategyRiskLevel.Low,
      user_rating: 3,
      average_profit: 15,
    },
    {
      id: 'day-trading',
      name: 'Day trading',
      description:
        'Day trading involves entering and exiting positions on the same day. As such, day traders aim to capitalize on intraday price movements, i.e., price moves that happen within one trading day. Day traders trade on timeframes higher than that scalpers but still close their positions within a day. The point of day trading cryptocurrency is to profit from tiny market movements and volatile bear and bull market activities.',
      risk_level: StrategyRiskLevel.Medium,
      user_rating: 7,
      average_profit: 19,
    },
    {
      id: 'swing-trading',
      name: 'Swing Trading',
      description:
        'Trades executed using this strategy usually span more than a day, but usually not longer than a few weeks or months. As a result, some people refer to this strategy as a medium-term trading strategy because it sits between the day trading and position trading strategies, giving traders more time to consider their decisions.',
      risk_level: StrategyRiskLevel.High,
      user_rating: 9,
      average_profit: 21,
    },
    {
      id: 'position-trading',
      name: 'Position Trading',
      description:
        'Position trading allows traders to hold trading positions for a long time. It could be months or even years. Traders using this strategy usually ignore short-term price movement and focus more on long-term trends. To make this type of trade, traders usually focus on the daily, weekly, and monthly timeframes. Position traders also use fundamental analysis to evaluate potential market price trends and consider other factors such as market trends and historical patterns.',
      risk_level: StrategyRiskLevel.High,
      user_rating: 9,
      average_profit: 21,
    },
    {
      id: 'arbitrage-trading',
      name: 'Arbitrage Trading',
      description:
        'The practice of buying cryptocurrencies from one market and selling them in another market to profit from price differences is known as arbitrage trading. The trader makes money by taking advantage of the low price correlation among crypto assets offered on two or more exchanges.',
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
