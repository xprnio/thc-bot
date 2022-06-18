import { AssetCard, ProfitCard } from "../../components/Card";
import { Scrollable } from "../../components/Scrollable";
import { DashboardContainer } from "./Dashboard.styled";


const profitCardsData = [
  {amount: 571, label: 'Total earning', timePeriod: 'All time', margin: 21},
  {amount: 231, label: 'Weekly earning', timePeriod: '7 Days', margin: 53},
  {amount: -231, label: 'Monthly earning', timePeriod: '7 Days', margin: -53},  
]


const Dashboard = () => 
    <DashboardContainer>
      <div>
        <h4>Total earnings</h4>
        <Scrollable>
          <ProfitCard label="Total" profit={420} margin={69} />
          <ProfitCard label="Total" profit={420} margin={69} />
          <ProfitCard label="Total" profit={420} margin={69} />
        </Scrollable>
        <h4>Assets</h4>
        <Scrollable>
          <AssetCard label="Bitcoin" profit={420} margin={69} total={1337} />
          <AssetCard label="Ethereum" profit={420} margin={69} total={1337} />
          <AssetCard label="Monero" profit={420} margin={69} total={1337} />
        </Scrollable>
      </div>
      <div>
        
      </div>
    </DashboardContainer>
;

export default Dashboard;