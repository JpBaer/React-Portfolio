import React from 'react'
import '../components/css/ProjectRight.css'
import JamSessionPic from '../assets/JamSession/JamSessionWebImage.png'
import BlockPartyPic from '../assets/HousingProject/BlockPartyWebImage.png'
import PokedexPic from '../assets/Pokedex/PokedexWebImage.png'
import BloomPic from '../assets/Bloom/BloomWebImage.png'
import Fade from 'react-reveal/Fade'

const ProjectRight = (props) => {
    const {name, description, skills, photo, link, github} = props
    const photos = [JamSessionPic, BlockPartyPic, PokedexPic, BloomPic]
   

  return (
    <div className='ProjectRight'>
      <div className = 'projectRow'>
        <Fade left>
        <div className = 'ProjectTextRight'>
        <h4>{name}</h4>
        <p>{description}</p>
        <h6>Tools Used: {skills}</h6>
        {/* <div className = "projectLinks"> */}
        <a href = {link} target = "_blank"><button className = 'ProjectButton'>Visit</button></a>
        <a href = {github} target = "_blank">  <button className='githubButton'>
                  <span className='githubLogo' />
                </button></a>
                {/* </div> */}
        </div>
        </Fade>
        <Fade right>
        <div className='RightImage'>
        <img src = {photos[photo]} alt = "Jam Session Website"/>
        </div>
        </Fade>
        </div>
    </div>
  )
}

export default ProjectRight