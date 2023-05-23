import React from 'react'
import '../components/css/ProjectLeft.css'
import JamSessionPic from '../assets/JamSession/JamSessionWebImage.png'
import BlockPartyPic from '../assets/HousingProject/BlockPartyWebImage.png'
import PokedexPic from '../assets/Pokedex/PokedexWebImage.png'
import Fade from 'react-reveal/Fade'

const ProjectLeft = (props) => {
    const {name, description, skills,photo, link} = props
    const photos = [JamSessionPic, BlockPartyPic, PokedexPic]
  return (
    <div className='ProjectLeft'>

        <div className = 'projectRow'>
        <Fade left>
        <div className = "LeftImage">
        <img src = {photos[photo]} alt = "Jam Session Website"/>
        </div>
        </Fade>
        <Fade right>
        <div className = "ProjectTextLeft">
        <h4>{name}</h4>
        <p>{description}</p>
        <h6>Tools Used: {skills}</h6>
        <div>
        <a href = {link} target = "_blank"><button className = 'ProjectButton'>Visit</button></a>
        {/* <h6>Learn More</h6> */}
        </div>
        
        
        </div>
        </Fade>
        </div>
    </div>
  )
}

export default ProjectLeft