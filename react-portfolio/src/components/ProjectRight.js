import React from 'react'
import '../components/css/ProjectRight.css'

const ProjectRight = (props) => {
    const {name, description, skills} = props

  return (
    <div className='ProjectRight'>
        <div className = 'ProjectTextRight'>
        <h4>{name}</h4>
        <p>{description}</p>
        <h6>Tools Used: {skills}</h6>
        <button className = 'ProjectButton'>Link</button>
        </div>
        <div className='RightImage'>
        <h1> Image Here</h1>
        </div>
    </div>
  )
}

export default ProjectRight