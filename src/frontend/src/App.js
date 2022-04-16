import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom'
import TeamPage from './pages/TeamPage';
import MatchPage from './pages/MatchPage';


function App() {
  return (
    <div className="App">
      
        Main
        <Routes>
        <Route path="/teams/:teamName"  element={<TeamPage />}   />
        <Route path="/teams/:teamName/matches/:year" element={<MatchPage />} />
        </Routes>

  
      
    </div>
  );
}

export default App;
