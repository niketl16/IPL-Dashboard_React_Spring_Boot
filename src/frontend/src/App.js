import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import TeamPage from './pages/TeamPage';


function App() {
  return (
    <div className="App">
      
        Main
        <Routes>
        <Route path="/teams/:teamName"  element={<TeamPage />}   />
        </Routes>
      
    </div>
  );
}

export default App;
