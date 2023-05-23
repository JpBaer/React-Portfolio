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
    <div className = "Hero" id = "Hero">
        <div className='heroTextContainer'>
            <h1 className='heroTitle'>Jorgen Baertsch</h1>
            <h1 className='heroTitle'>Full Stack Software Engineer</h1>
            <p className ='heroText'>When I get passionate about something I go all in, and when I have a question I always seek an answer.  As someone with a degree and work experience as an Aerospace Engineer and as a self-taught Musician and Audio Engineer I have found web development to be the perfect blend of technical and creative.  I have a focus on Javascript and the MERN stack and a love for the backend but am always open to exploring new technologies. </p>
           
        </div>
        {/* <div className = "animation">
            <Lottie animationData = {heroAnimation} style = {style}/> 
        </div> */}
    </div>
  )
}

export default HeroPage