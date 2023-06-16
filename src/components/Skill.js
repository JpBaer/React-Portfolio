import React, {useState} from 'react'
import './css/Skill.css'
import JSLogo from '../assets/logos/javascript.svg'
import ReactLogo from '../assets/logos/react.svg'
import NodeLogo from '../assets/logos/node-js.png'
import GraphQlLogo from '../assets/logos/graphql.svg'
import MongoDbLogo from '../assets/logos/Mongo.png'
import pythonLogo from '../assets/logos/Python.png'

const Skill = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const logos = [JSLogo, ReactLogo, NodeLogo, GraphQlLogo, MongoDbLogo, pythonLogo];

  const { Text, Logo, Style } = props;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`Skill ${isHovered ? Style : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={logos[Logo]} alt="Skill Logo" />
      <div className = "skillText">
      <h6>{Style}</h6>
      <hr></hr>
      <p>{Text}</p>
      </div>
    </div>
  );
};

export default Skill;