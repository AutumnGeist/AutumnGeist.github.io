import React from 'react'
import { Link } from 'react-router-dom'
import {BsGithub, BsLinkedin} from "react-icons/bs"
import {TfiEmail} from "react-icons/tfi"
import { Container} from 'react-bootstrap'


const Contact = () => {
  return (
    <Container fluid id="contact" className="contact content-container2 d-flex align-items-center justify-content-center">
      <Container xs={12} className="text-center gray-box w-50 mt-5 mb-5">     
        <div className="mt-5">  
          <h1 className="text-shadow cursive pt-5 pb-5">Contact Me</h1>     
          <p>I look forward to finding new opportunities to improve my skills and work on new projects!</p>
          <div className="p-3">
            <Link to="https://github.com/AutumnGeist" target="_blank">
              <BsGithub className="icon" size="40px" color="white" />
            </Link>
            <a href="mailto:marilynhsteele@gmail.com">
              <TfiEmail className="icon" size="45px" color="white" />
            </a>
            <Link to="https://www.linkedin.com/in/marilyn-holland/" target="_blank">
              <BsLinkedin className="icon" size="40px" color="white" /> 
            </Link>
          </div>
        </div>
        <div className="footer pt-5 pb-1 justify-content-center d-flex align-items-end">
          <p className="black-text">Copyright © Marilyn Holland. <br/> All rights reserved.</p>
        </div>
      </Container>
    </Container>
  )
}

export default Contact