
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import HomePage from './components/HomePage';
import Bloom from './components/Bloom';
import JamSession from './components/JamSession';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    {/* <IntroPage/> */}

    {/* <Router>
        <NavBar />
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/bloom" element={<Bloom />} />
          <Route path="/jamsession" element={<JamSession />} />
        </Routes>
      </Router> */}

      <NavBar/>
      <HomePage/>
   
    </div>
  );
}

export default App;
