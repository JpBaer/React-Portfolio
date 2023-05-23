import React,{useState, useEffect} from 'react'
import Lottie from 'lottie-react'
import navAnimation from "../assets/Astronaut - the basis (2).json"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './css/NavBar.css'
import githubLogo from '../assets/icons8-github-90.png'
import linkedinLogo from '../assets/icons8-linkedin-100.png'
import resume from '../assets/resume.pdf'

function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=> {
        const onScroll = ()=> {
            if(window.scrollY > 50){
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll",onScroll);
    },[])

  const style = {
    height: 110,
    width: 110,
  }

  return (
    <Navbar expand="lg" className = {scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#Hero">
         <Lottie animationData = {navAnimation} style = {style}/> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Skills" className ="navLink">Skills</Nav.Link>
            <Nav.Link href="#Projects" className ="navLink">Projects</Nav.Link>
            <Nav.Link href="#Contact" className ="navLink">Contact</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            
          </Nav>
          <span className = "nav-text">
          <div className = "social-icon">
            <a href = 'https://github.com/JpBaer' target = "_blank"><img src={githubLogo} alt = 'github logo'/></a>
            <a href = 'https://www.linkedin.com/in/jorgen-baertsch-8673b2142/' target = "_blank"><img src={linkedinLogo} alt = 'linkedin logo'/></a>
          </div>
          <a href = {resume} target = "_blank"><button className = 'nav-button'>Download CV</button></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}




 /* <Lottie animationData = {navAnimation} height={100} width={100}/> */
export default NavBar