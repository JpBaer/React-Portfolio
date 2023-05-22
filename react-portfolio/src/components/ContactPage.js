import React from 'react'
import './css/ContactPage.css'
const ContactPage = () => {
  return (
    <div className = "ContactPage">
       <div className = "contact_header">
        <h2>Contact Me</h2>
        <p>If you're interested in working together send a message in the contact form below.</p>
      </div>

    <div className = "container">
      <div className = "contactInfo">

        <div className = "box">
          <div className = "icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
          <div className = "text">
            <h3>Location</h3>
            <p>Seattle, Washington </p>
            <p>98133</p>
          </div>
          </div>
          <div className = "box">
          <div className = "icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></div>
          <div className = "text">
            <h3>Email</h3>
            <p>Jpbaertsch@gmail.com</p>
          </div>
          </div>

          <div className = "box">
          <div className = "icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
          <div className = "text">
            <h3>Phone Number</h3>
            <p>+1218-348-8032</p>
          </div>
          </div>

        
      </div>

      <div className = "contactForm">
        <form>

          <h2>Send Message</h2>
          <div className = "inputBox">
            {/* <input type = "text" name = '' required = 'required'> */}
            <span>Full Name:</span>
          </div>

          <div className = "inputBox">
            {/* <input type = "text" name = '' required = 'required'> */}
            <span>Email:</span>
          </div>

          <div className = "inputBox">
            <textarea required = 'required'></textarea>
            {/* <span>Type your message here...</span> */}
          </div>


          <div className = "inputBox">
            {/* <input type = "submit" name = '' value ='Send'> */}

          </div>

        </form>
      </div>

    </div>
    </div>
  )
}

export default ContactPage