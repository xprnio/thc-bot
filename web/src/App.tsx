import './App.css'
import MainView from './views/MainView/MainView'
import { Routes, Route } from "react-router-dom";
import Dashboard from './views/Dashboard/Dashboard';
import Navigation from './components/Navigation/Navigation';
import styled from 'styled-components/macro';
import Strategies from './views/Strategies/Strategies';


const Layout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/strategies" element={<Strategies />} />
      </Routes>
      <Navigation />
    </Layout>
  )
}

export default App
