import React from 'react'
import './css/ProjectsPage.css'
import Lottie from 'lottie-react'
import animation from '../assets/2pKdiq4TuV.json'
import ProjectLeft
from './ProjectLeft'
import ProjectRight from './ProjectRight'
import JamSessionPic from '../assets/JamSession/JamSessionWebImage.png'


const ProjectsPage = () => {

  const projects = [{
    name: "Bloom: Carbon Impact Calculator",
    description:"A MERN stack application that provides users with the ability to log their daily actions in order to see their carbon impact.  Users can see graphical breakdowns of their impact data, donate to multiple organizations to offset their impact, read the latest climate change news, and talk to our GPT chatbot. To view the website with data sign in with Email: ronswanson@gmail.com and Password: breakfast",
    skills: "React, Javascript, Node.JS, MongoDB, Apollo GraphQL, OpenAI API, Air Quality API, News API, Chart.js",
    photo: 3,
    link: 'https://bloom1.herokuapp.com/',
    github: 'https://github.com/andreaginn/bloom'
  },
    {
    name: "JamSession: Music Sharing App",
    description: "A music sharing social media app that connects to the Spotify API and allows users to display their most listened to songs and artists as well as all of their playlists on a personal profile and public feed. I lead the backend development of the project including all integrations with Spotify's API, database model creation, and RESTful API routes.  I also managed the overall project, setting milestones and delegating tasks to a team of 4.",
    skills: "JavaScript, Express.JS, MySQL, MVC, Handlebars.JS, RESTful API, Spotify API",
    photo: 0,
    link: 'https://calm-tor-47120.herokuapp.com/',
    github: 'https://github.com/JpBaer/Jam-Session-Music-Sharing-App'
  },
  {
    name: "React Pokedex",
    description: "A pokedex built in React that connects to the Pokemon API and displays all 1000+ pokemon with each card being color-coded based on type.  Clicking on a card produces a modal with unique information provided for each pokemon.  Users can search for a specific pokemon and the app implements an infinite scroll feature to dynamically render content.",
    skills: "React, JavaScript, CSS, Pokemon API",
    photo: 2,
    link: 'https://jpbaer.github.io/React-Pokedex/',
    github: 'https://github.com/JpBaer/React-Pokedex'
  },
  {
    name: "Block Party: Real Estate App",
    description: "A web app that allows users to search for houses for sale in any city and any relevant real estate trends in the searched area using an external real estate API and Google Maps API.  I lead the backend development where my main focus was setting up the google maps API and it's display of markers for houses provided by real estate API.  One accomplishment I am particularly proud of is setting up reverse geo-location so the map automatically renders the users location and makes a call to the real estate API to display homes in their current area.",
    skills: "JavaScript, Bootstrap, Express.JS, Google Map API, Reality-In-US API",
    photo: 1,
    link: 'https://jpbaer.github.io/Housing-Market-Project/',
    github: 'https://github.com/JpBaer/Housing-Market-Project'
  }
]

  const style = {
    height: 175,
    width: 175,
  }


  return (
    <div className = "ProjectsPage" id = "Projects">
     
      <h1 className = "projectTitle">Projects</h1>
      
      <ProjectRight name = {projects[0].name} description = {projects[0].description} skills = {projects[0].skills} photo = {projects[0].photo} link = {projects[0].link} github = {projects[0].github}/>
      <hr></hr>
      <ProjectLeft name = {projects[1].name} description = {projects[1].description} skills = {projects[1].skills} photo = {projects[1].photo} link = {projects[1].link} github = {projects[1].github}/>
      <hr></hr>
      <ProjectRight name = {projects[2].name} description = {projects[2].description} skills = {projects[2].skills} photo = {projects[2].photo} link = {projects[2].link} github = {projects[2].github}/>
      <hr></hr>
      <ProjectLeft name = {projects[3].name} description = {projects[3].description} skills = {projects[3].skills} photo = {projects[3].photo} link = {projects[3].link} github = {projects[3].github}/>
      {/* <ProjectLeft name = {projects[0].name} description = {projects[0].description} skills = {projects[0].skills}/> */}
      {/* <h1>Others Carousel?</h1> */}
      <Lottie animationData = {animation} style = {style}/> 
    </div>
    
      
        
  )
}

export default ProjectsPage