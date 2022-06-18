import './App.css'
import MainView from './views/MainView/MainView'
import { Routes, Route } from "react-router-dom";
import Dashboard from './views/Dashboard/Dashboard';
import isAuthenticated from './hooks/api/useAuthentication'
import Navigation from './components/Navigation/Navigation';
import styled from 'styled-components/macro';
import { ConverstationTest } from './features/conversation/ConversationTest';


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
        <Route path="/test" element={<ConverstationTest/>} />
      </Routes>
      { !!isAuthenticated && (
        <Navigation />
      )}
    </Layout>
  )
}

export default App
