import React from 'react'
import './css/ProjectsPage.css'
import Fade from 'react-reveal/Fade'
import BloomPic1 from '../assets/Bloom/BloomWebImage.png'
import BloomResolvers1 from '../assets/Bloom/BloomResolvers1.png'
import BloomResolvers2 from '../assets/Bloom/BloomResolvers2.png'
import BloomResolvers3 from '../assets/Bloom/BloomResolvers3.png'
import OpenAiAPI from '../assets/Bloom/OpenAiAPI.png'
import OpenAiAPI2 from '../assets/Bloom/OpenAIAPI2.png'
import BloomSeeds from '../assets/Bloom/BloomSeeds.png'

const Bloom = () => {
  return (
    <div >
      <div className = "projectBreakdownHeader"/>
      <div className = "projectBreakdown"> 
      <h1 className = "projectTitle">Bloom</h1>
      <div className = 'projectRow'>
        <Fade left>
        <div className = 'ProjectTextRight'>
        <h4>Overview</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        {/* <div className = "projectLinks"> */}
                {/* </div> */}
        </div>
        </Fade>
        <Fade right>
        <div className='RightImage'>
        <img src = {BloomPic1} alt = "Bloom Website"/>
        </div>
        </Fade>
        </div>

        <h1 className = "projectSubTitle">Successes</h1>
        <div className = 'projectRow'>
        <Fade left>
        <div className='LeftImage'>
        <img src = {BloomResolvers1} alt = "Bloom Website"/>
        </div>
        </Fade>
        <Fade right>
        <div className = 'ProjectTextLeft'>
        <h4>GraphQL TypeDefs and Resolvers</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        {/* <div className = "projectLinks"> */}
                {/* </div> */}
        </div>
        </Fade>

        </div>


        <div className = 'projectRow'>
        <Fade left>
        <div className = 'ProjectTextRight'>
        <h4>OpenAI API</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        {/* <div className = "projectLinks"> */}
                {/* </div> */}
        </div>
        </Fade>
        <Fade right>
        <div className='RightImage'>
        <img src = {OpenAiAPI} alt = "Bloom Website"/>
        </div>
        </Fade>
        </div>

        <h1 className = "projectSubTitle">Challenges and Lessons Learned</h1>

        <div className = 'projectRow'>
        <Fade left>
        <div className='LeftImage'>
        <img src = {BloomSeeds} alt = "Bloom Website"/>
        </div>
        </Fade>
        <Fade right>
        <div className = 'ProjectTextLeft'>
        <h4>Sourcing Carbon Data For Action Seeding</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        {/* <div className = "projectLinks"> */}
                {/* </div> */}
        </div>
        </Fade>

        </div>

      </div>
      
    </div>
  )
}

export default Bloom