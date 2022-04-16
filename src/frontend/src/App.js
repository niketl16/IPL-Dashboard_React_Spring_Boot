import logo from './logo.svg';
import './App.scss';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom'
import TeamPage from './pages/TeamPage';
import MatchPage from './pages/MatchPage';
import { HomePage } from './pages/Homepage';


function App() {
  return (
    <div className="App">
      
        Main
        <Routes>
          <Route path="/" element ={<HomePage />} />
        <Route path="/teams/:teamName"  element={<TeamPage />}   />
        <Route path="/teams/:teamName/matches/:year" element={<MatchPage />} />
        </Routes>

  
      
    </div>
  );
}

export default App;
