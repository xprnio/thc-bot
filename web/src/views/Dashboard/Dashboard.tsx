import { AssetCard, ProfitCard } from '../../components/Card';
import { Label } from '../../components/Label/Label';
import { Scrollable } from '../../components/Scrollable';
import { DashboardContainer } from './Dashboard.styled';

const Dashboard = () => {
  // TODO: Implement data
  return (
    <DashboardContainer>
      <Label type="heading">Dashboard</Label>
      <Label type="title">Profit</Label>
      <Scrollable>
        <ProfitCard label="Total" profit={420} margin={69} />
        <ProfitCard label="Today" profit={420} margin={69} />
        <ProfitCard label="This week" profit={420} margin={69} />
      </Scrollable>
      <Label type="title">Assets</Label>
      <Scrollable>
        <AssetCard label="Bitcoin" profit={420} margin={69} total={1337} />
        <AssetCard label="Ethereum" profit={420} margin={69} total={1337} />
        <AssetCard label="Monero" profit={420} margin={69} total={1337} />
      </Scrollable>
    </DashboardContainer>
  );
};

export default Dashboard;
