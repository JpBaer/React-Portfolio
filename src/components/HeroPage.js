import React, {useState, useEffect} from 'react'
import Lottie from 'lottie-react'
import './css/HeroPage.css'
import heroAnimation from '../assets/2pKdiq4TuV.json'

//I want this page to start totally black and have my name fade in a gradiant and then as it fade outs the actual page
//Hero image same as previous site
//On the right side I want "Full Stack Software Engineer" to be animated as if typed out with the same gradiant text
//Once thats finished typing have a small blurb about me fade in under it
const HeroPage = () => {
  const[nameText, setNameText] = useState('');
  const [fullNameText, setFullNameText] = useState('Jorgen Baertsch')
  const [nameIndex, setNameIndex] = useState(0)

  const[headerText, setHeaderText] = useState('');
  const [fullHeaderText, setFullHeaderText] = useState('Full Stack Software Engineer')
  const [headerIndex, setHeaderIndex] = useState(0)


  useEffect(() =>{
    if (nameIndex < fullNameText.length){
      setTimeout(()=> {
        setNameText(nameText + fullNameText[nameIndex])
        setNameIndex(nameIndex + 1)
      }, 110)
    }
  },[nameIndex])

  useEffect(() =>{
    if (headerIndex < fullHeaderText.length){
      setTimeout(()=> {
        setHeaderText(headerText + fullHeaderText[headerIndex])
        setHeaderIndex(headerIndex + 1)
      }, 90)
    }
  },[headerIndex])

  const style = {
    height: 175,
    width: 175,
  }

  return (
    <div className = "Hero" id = "Hero">
        <div className='heroTextContainer'>
            <h1 className='heroTitle fade-in'>{nameText}</h1>
            <h1 className='heroTitle fade-in'>{headerText}</h1>
            <p className ='heroText fade-in'>When I get passionate about something I go all in, and when I have a question I always seek an answer.  As someone with a degree and work experience as an Aerospace Engineer and as a self-taught Musician and Audio Engineer I have found web development to be the perfect blend of technical and creative.  I have a focus on Javascript and the MERN stack and a love for the backend but am always open to exploring new technologies. </p>
           
        </div>
        {/* <div className = "animation">
            <Lottie animationData = {heroAnimation} style = {style}/> 
        </div> */}
    </div>
  )
}

export default HeroPage