import { BadRequestException, Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { EnvelopeInterceptor } from '../interceptors/envelope.interceptor';
import { Asset } from '../types/asset.type';
import { Profit } from '../types/profit.type';
import { UserStrategy } from '../types/user-strategy.type';
import { StrategiesController } from './strategies.controller';

const random = (min: number, max: number) => Math.floor(min + Math.random() * (max - min));

@Controller('dashboard')
@UseInterceptors(EnvelopeInterceptor)
export class DashboardController {
  public static readonly profits: Profit[] = [
    {
      id: 'total',
      name: 'Total',
      profit: random(-300, 1000),
      margin: random(-100, 100),
    },
    {
      id: 'daily',
      name: 'Today',
      profit: random(-300, 1000),
      margin: random(-100, 100),
    },
    {
      id: 'weekly',
      name: 'This week',
      profit: random(-300, 1000),
      margin: random(-100, 100),
    },
  ];
  public static readonly assets: Asset[] = [
    {
      id: 'BTC',
      name: 'Bitcoin',
      profit: random(-300, 1000),
      value: random(1, 5000),
      margin: random(-100, 100),
    },
    {
      id: 'ETH',
      name: 'Ethereum',
      profit: random(-300, 1000),
      value: random(1, 5000),
      margin: random(-100, 100),
    },
    {
      id: 'XMR',
      name: 'Monero',
      profit: random(-300, 1000),
      value: random(1, 5000),
      margin: random(-100, 100),
    },
  ];
  public static readonly strategies: UserStrategy[] = StrategiesController.Strategies.map((strategy) => {
    return {
      ...strategy,
      profit: random(-300, 1000),
      value: random(1, 5000),
      margin: random(-100, 100),
    };
  });

  @Get('profits')
  async getProfits(): Promise<Profit[]> {
    return DashboardController.profits;
  }

  @Get('assets')
  async getAssets(): Promise<Asset[]> {
    return DashboardController.assets;
  }

  @Get('strategies')
  async getStrategies(): Promise<UserStrategy[]> {
    return DashboardController.strategies;
  }

  @Get('strategies/:strategy_id')
  async getStrategyById(@Param('strategy_id') strategyId: string): Promise<UserStrategy> {
    const strategy = DashboardController.strategies.find((strategy) => strategy.id === strategyId);
    if (!strategy) throw new BadRequestException('Strategy not found');

    return strategy;
  }
}
