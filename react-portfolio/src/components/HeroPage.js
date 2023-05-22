import React from 'react'
import Lottie from 'lottie-react'
import './css/HeroPage.css'
import heroAnimation from '../assets/2pKdiq4TuV.json'

//I want this page to start totally black and have my name fade in a gradiant and then as it fade outs the actual page
//Hero image same as previous site
//On the right side I want "Full Stack Software Engineer" to be animated as if typed out with the same gradiant text
//Once thats finished typing have a small blurb about me fade in under it
const HeroPage = () => {

  const style = {
    height: 175,
    width: 175,
  }

  return (
    <div className = "Hero">
        <div className='heroTextContainer'>
            <h1 className='heroTitle'>Jorgen Baertsch</h1>
            <h1 className='heroTitle'>Full Stack Software Engineer</h1>
            <p className ='heroText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
           
        </div>
        {/* <div className = "animation">
            <Lottie animationData = {heroAnimation} style = {style}/> 
        </div> */}
    </div>
  )
}

export default HeroPage