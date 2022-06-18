import ScrollableCards from "../../components/ScrollableCards/ScrollableCards";
import { DashboardContainer } from "./Dashboard.styled";


const Dashboard = () => 
    <DashboardContainer>
      <div>
        <h4>title</h4>
        <ScrollableCards cards={['test', 'test2', 'test3']}></ScrollableCards>
      </div>
      <div>
        <h4>title2</h4>
        <ScrollableCards cards={['xd', 'xsxs', 'sdasda']}></ScrollableCards>
      </div>
    </DashboardContainer>
;

export default Dashboard;