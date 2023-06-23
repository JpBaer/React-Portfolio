import React from 'react'
import './css/SkillsPage.css'
import Skill from './Skill'
import JSLogo from '../assets/logos/node-js.png'
import Fade from 'react-reveal/Fade'

const SkillsPage = () => {

  const Javascript = {
    Text: "JavaScript is my primary language of choice due to its versatility and widespread adoption. With JavaScript, I can build both front-end and back-end applications, thanks to frameworks like React and Node.js.",
    Style: "Javascript"
  }

  const ReactLogo = {
    Text: "React is my preferred frontend framework due to its widespread adoption and efficient, intuitive component-based UI. Its capability to swiftly update and render data changes enables the development of streamlined applications",
    Style: "React"
  }

  const Node = {
    Text: "Node.js with Express.js is my preferred server-side JavaScript runtime. I've used it to build Restful APIs, connect to databases, fetch data from external APIs, and process data for frontend applications.",
    Style: "NodeJS"
  }

  const GraphQl = {
    Text: "I use GraphQL for its intuitive query capabilities, enabling precise data retrieval from server-side databases. With GraphQL, the fetching process has become streamlined, reducing issues of over-fetching and under-fetching by clients.",
    Style: "GraphQL"
  }

  const MongoDb = {
    Text: "I choose MongoDB for Node.js due to its seamless integration, scalability, and flexible data modeling. MongoDB's document-oriented approach suits dynamic Node.js applications, enabling easy storage, retrieval, and high performance.",
    Style: "MongoDB"
  }

  const Python = {
    Text: "I have utilized Python for small machine learning models and data analysis. Python's easy-to-read syntax and vast collection of libraries, such as NumPy, Pandas, and scikit-learn, make it ideal for data analysis tasks.",
    Style: "Python"
  }

  return (
    <div className = "SkillsPage" id = "Skills">
      <Fade bottom>
      <Skill Logo = {0} Text = {Javascript.Text} Style = {Javascript.Style}/>
      <Skill Logo = {1} Text = {ReactLogo.Text} Style = {ReactLogo.Style} />
      <Skill Logo = {2} Text = {Node.Text} Style = {Node.Style}/>
      <Skill Logo = {3} Text = {GraphQl.Text} Style = {GraphQl.Style}/>
      <Skill Logo = {4} Text = {MongoDb.Text} Style = {MongoDb.Style}/>
      <Skill Logo = {5} Text = {Python.Text} Style = {Python.Style}/>
      </Fade>
    </div>
  )
}

export default SkillsPage