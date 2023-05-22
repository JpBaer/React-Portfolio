import React from 'react'
import './css/SkillsPage.css'
import Skill from './Skill'
import JSLogo from '../assets/logos/node-js.png'

const SkillsPage = () => {

  const Javascript = {
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    Style: "Javascript"
  }

  const ReactLogo = {
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    Style: "React"
  }

  const Node = {
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    Style: "Node"
  }

  const GraphQl = {
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    Style: "GraphQl"
  }

  const MongoDb = {
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    Style: "MongoDb"
  }

  const Python = {
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    Style: "Python"
  }

  return (
    <div className = "SkillsPage">
      <Skill Logo = {0} Text = {Javascript.Text} Style = {Javascript.Style}/>
      <Skill Logo = {1} Text = {ReactLogo.Text} Style = {ReactLogo.Style} />
      <Skill Logo = {2} Text = {Node.Text} Style = {Node.Style}/>
      <Skill Logo = {3} Text = {GraphQl.Text} Style = {GraphQl.Style}/>
      <Skill Logo = {4} Text = {MongoDb.Text} Style = {MongoDb.Style}/>
      <Skill Logo = {5} Text = {Python.Text} Style = {Python.Style}/>
    </div>
  )
}

export default SkillsPage