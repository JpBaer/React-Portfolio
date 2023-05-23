
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import HeroPage from './components/HeroPage';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';


function App() {
  return (
    <div className="App">
    {/* <IntroPage/> */}
     <NavBar/> 
     <HeroPage/> 
     <SkillsPage/>
     <ProjectsPage/> 
     <ContactPage/>
    </div>
  );
}

export default App;
