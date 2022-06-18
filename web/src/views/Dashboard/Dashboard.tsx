import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AssetCard, ProfitCard } from '../../components/Card';
import { Label } from '../../components/Label/Label';
import { Scrollable } from '../../components/Scrollable';
import { Assets, getAssets, getProfits, Profits, selectAssets, selectProfits } from '../../features/dashboard/dashboardSlice';
import { DashboardContainer } from './Dashboard.styled';

const Dashboard = () => {
  // TODO: Implement data
  const profits = useAppSelector(selectProfits)
  const assets = useAppSelector(selectAssets)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProfits())
    dispatch(getAssets())
  }, [dispatch])
  return (
    <DashboardContainer>
      <Label type="heading">Dashboard</Label>
      <Label type="title">Profit</Label>
      <Scrollable>
        {
          profits && profits.map((profit) => <ProfitCard label={profit.name} profit={profit.profit} margin={profit.change} />)
        }
      </Scrollable>
      <Label type="title">Assets</Label>
      <Scrollable>
        {
          assets && assets.map((asset) => <ProfitCard label={asset.name} profit={asset.profit} margin={asset.change} />)
        }
      </Scrollable>
    </DashboardContainer>
  );
};

export default Dashboard;
