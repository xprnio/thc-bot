import './App.css'
import MainView from './views/MainView/MainView'
import { Routes, Route } from "react-router-dom";
import Dashboard from './views/Dashboard/Dashboard';
import isAuthenticated from './hooks/api/useAuthentication'
import Navigation from './components/Navigation/Navigation';
import styled from 'styled-components/macro';


const LayOut = styled.div`
  height: 100vh;
`;

function App() {

  return (
    <LayOut>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      { !!isAuthenticated && (
        <Navigation />
      )}
    </LayOut>
  )
}

export default App
