import React from 'react'
import './css/ContactPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade'


const ContactPage = () => {
  return (
    <div className = "ContactPage" id  = "Contact">
       <div className = "contact_header">
        <h2>Contact Me</h2>
        <p>If you're interested in working together send a message in the contact form below.</p>
      </div>
    <Fade bottom>
    <div className = "contactContainer">
      {/* <Fade left> */}
      <div className = "contactInfo">

        <div className = "contactBox">
          <div className = "contactIcon"><FontAwesomeIcon icon={faMapMarker}/></div>
          <div className = "contactText">
            <h3>Location</h3>
            <p>Seattle, Washington </p>
            <p>98133</p>
          </div>
          </div>
          <div className = "contactBox">
          {/* <div className = "icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></div> */}
          <div className = "contactIcon"><FontAwesomeIcon icon={faEnvelope}/></div>
          <div className = "contactText">
            <h3>Email</h3>
            <p>Jpbaertsch@gmail.com</p>
          </div>
          </div>

          <div className = "contactBox">
          <div className = "contactIcon"><FontAwesomeIcon icon={faPhone}/></div>
          <div className = "contactText">
            <h3>Phone Number</h3>
            <p>+1218-348-8032</p>
          </div>
          </div>

        
      </div>
      {/* </Fade> */}
      <div className = "contactForm">
        <form>

          <h2>Send Message</h2>
          <div className = "inputBox">
            <input type = "text" name = '' required = 'required'/>
            <span>Full Name:</span>
          </div>

          <div className = "inputBox">
             <input type = "text" name = '' required = 'required'/> 
            <span>Email:</span>
          </div>

          <div className = "inputBox">
            <textarea required = 'required'></textarea>
            <span>Type your message here...</span>
          </div>


          <div className = "inputBox">
            <input type = "submit" name = '' value ='Send'/>

          </div>

        </form>
      </div>

    </div>
    </Fade>
    </div>
  )
}

export default ContactPage