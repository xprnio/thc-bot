import { Controller, Get, NotImplementedException, UseInterceptors } from '@nestjs/common';
import { EnvelopeInterceptor } from '../interceptors/envelope.interceptor';
import { Asset } from '../types/asset';
import { Profit } from '../types/profit';

@Controller('dashboard')
@UseInterceptors(EnvelopeInterceptor)
export class DashboardController {
  @Get('profits')
  async getProfits(): Promise<Profit[]> {
    return [
      { id: 'total', name: 'Total', profit: 420, change: 69 },
      { id: 'daily', name: 'Today', profit: 420, change: 69 },
      { id: 'weekly', name: 'This week', profit: 420, change: 69 },
    ];
  }

  @Get('assets')
  async getAssets(): Promise<Asset[]> {
    return [
      { id: 'BTC', name: 'Bitcoin', profit: 420, value: 1337, change: 69 },
      { id: 'ETH', name: 'Ethereum', profit: 420, value: 1337, change: 69 },
      { id: 'XMR', name: 'Monero', profit: 420, value: 1337, change: 69 },
    ];
  }

  @Get('strategies')
  async getStrategies(): Promise<any> {
    throw new NotImplementedException();
  }
}
