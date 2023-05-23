import React from 'react'
import './css/Skill.css'
import JSLogo from '../assets/logos/javascript.svg'
import ReactLogo from '../assets/logos/react.svg'
import NodeLogo from '../assets/logos/node-js.png'
import GraphQlLogo from '../assets/logos/graphql.svg'
import MongoDbLogo from '../assets/logos/mongodb_compass_macos_bigsur_icon_189933.png'
import pythonLogo from '../assets/logos/python-svgrepo-com.svg'

const Skill = (props) => {
    const logos = [JSLogo, ReactLogo, NodeLogo, GraphQlLogo, MongoDbLogo, pythonLogo];
   const {Text, Logo, Style} = props
  return (
    // <div className = {`Skill ${Style}`}>
    <div className = {`Skill`}>
        <img src = {logos[Logo]}/>
        <p>{Text}</p>
    </div>
  )
}

export default Skill