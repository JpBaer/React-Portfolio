import React from 'react'
import '../components/css/ProjectRight.css'
import JamSessionPic from '../assets/JamSession/JamSessionWebImage.png'
import BlockPartyPic from '../assets/HousingProject/BlockPartyWebImage.png'
import PokedexPic from '../assets/Pokedex/PokedexWebImage.png'
const ProjectRight = (props) => {
    const {name, description, skills, photo, link} = props
    const photos = [JamSessionPic, BlockPartyPic, PokedexPic]

  return (
    <div className='ProjectRight'>
      <div className = 'projectRow'>
        <div className = 'ProjectTextRight'>
        <h4>{name}</h4>
        <p>{description}</p>
        <h6>Tools Used: {skills}</h6>
        <a href = {link} target = "_blank"><button className = 'ProjectButton'>Visit</button></a>
        </div>
        <div className='RightImage'>
        <img src = {photos[photo]} alt = "Jam Session Website"/>
        </div>
        </div>
    </div>
  )
}

export default ProjectRight