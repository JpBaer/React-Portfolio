import React from 'react'
import HeroPage from './HeroPage';
import SkillsPage from './SkillsPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';

const HomePage = () => {
  return (
    <div>
     <HeroPage/> 
     <SkillsPage/>
     <ProjectsPage/> 
     <ContactPage/>
    </div>
  )
}

export default HomePage