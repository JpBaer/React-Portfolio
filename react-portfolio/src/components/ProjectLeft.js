import React from 'react'
import '../components/css/ProjectLeft.css'

const ProjectLeft = (props) => {
    const {name, description, skills} = props
  return (
    <div className='ProjectLeft'>
        <div className = "LeftImage">
        <h1>Image Here</h1>
        </div>
        <div className = "ProjectTextLeft">
        <h4>{name}</h4>
        <p>{description}</p>
        <h6>Tools Used: {skills}</h6>
        <button className = 'ProjectButton'>Link</button>
        </div>
        
        <div className = "LeftImage">

        </div>
    </div>
  )
}

export default ProjectLeft