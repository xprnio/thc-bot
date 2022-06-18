import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AssetCard, ProfitCard } from '../../components/Card';
import StrategyCard from '../../components/Card/StrategyCard';
import { Label } from '../../components/Label/Label';
import { Scrollable } from '../../components/Scrollable';
import { getData, selectAssets, selectProfits } from '../../features/dashboard/dashboardSlice';
import { DashboardContainer } from './Dashboard.styled';

const Dashboard = () => {
  const profits = useAppSelector(selectProfits);
  const assets = useAppSelector(selectAssets);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getData('profits'));
    dispatch(getData('assets'));
  }, [dispatch]);

  return (
    <DashboardContainer>
      <Label type="heading">Dashboard</Label>
      <Label type="title">Profit</Label>
      <Scrollable>
        {profits && profits.map((profit) => (
          <ProfitCard
            name={profit.name}
            profit={profit.profit}
            margin={profit.change}
          />
        ))}
      </Scrollable>
      <Label type="title">Strategies</Label>
      <Scrollable>
        <StrategyCard
          name="My Strategy"
          profit={100}
          margin={42}
          value={1000}
        />
      </Scrollable>
      <Label type="title">Assets</Label>
      <Scrollable>
        {assets && assets.map((asset) => (
          <AssetCard
            name={asset.name}
            profit={asset.profit}
            margin={asset.change}
            value={asset.value}
          />
        ))}
      </Scrollable>
    </DashboardContainer>
  );
};

export default Dashboard;
