import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';

// AIzaSyDZO4-fjim18Q-HauZlwCvMCpZ_HUPjWA8

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
