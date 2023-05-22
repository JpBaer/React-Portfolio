import React from 'react'
import './css/ProjectsPage.css'
import Lottie from 'lottie-react'
import animation from '../assets/2pKdiq4TuV.json'
import ProjectLeft
from './ProjectLeft'
import ProjectRight from './ProjectRight'

const ProjectsPage = () => {

  const projects = [{
    name: "JamSession: Music Sharing App",
    description: "A music sharing social media app that connects to the Spotify API and allows users to display their most listened to songs and artists as well as all of their playlists on a personal profile and public feed. I lead the backend development of the project including all integrations with Spotify's API, database model creation, and RESTful API routes.  I also managed the overall project, setting milestones and delegating tasks to a team of 4.",
    skills: "JavaScript, Express.JS, MySQL, MVC, Handlebars.JS, RESTful API's"
  },
  {
    name: "React Pokedex",
    description: "A pokedex built in React that connects to the Pokemon API and displays all 1000+ pokemon with each card being color-coded based on type.  Users can search for a specific pokemon and the app implements an infinite scroll feature to dynamically render content.",
    skills: "React, JavaScript, CSS"
  },
  {
    name: "Block Party: Real Estate App",
    description: "A web app that allows users to search for houses for sale in any city and any relevant real estate trends in the searched area using an external real estate API and Google Maps API.  I lead the backend development where my main focus was setting up the google maps API and it's display of markers for houses provided by real estate API.  One accomplishment I am particularly proud of is setting up reverse geo-location so the map automatically renders the users location and makes a call to the real estate API to display homes in their current area.",
    skills: "JavaScript, Bootstrap, Express.JS, External API's"
  }
]

  const style = {
    height: 175,
    width: 175,
  }


  return (
    <div className = "ProjectsPage">
     
      <h1 className = "projectTitle">Projects</h1>
      
      <ProjectRight name = {projects[0].name} description = {projects[0].description} skills = {projects[0].skills}/>
      <ProjectLeft name = {projects[1].name} description = {projects[1].description} skills = {projects[1].skills}/>
      <ProjectRight name = {projects[2].name} description = {projects[2].description} skills = {projects[2].skills}/>
      <ProjectLeft name = {projects[0].name} description = {projects[0].description} skills = {projects[0].skills}/>
      
      <Lottie animationData = {animation} style = {style}/> 
    </div>
    
      
        
  )
}

export default ProjectsPage