import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import mehImg from '../images/meh1.jpg'
import pdf from '../MarilynHollandResume.pdf'

const About = () => {
  return (
    <Container fluid id="about" className="about content-container p-5 d-flex align-items-center">
      <Row>

        {/* Left Column */}
        <Col md className="text-center text-shadow font-bold p-1">
          <Image fluid src={mehImg} alt="marilyn img" roundedCircle className="profilePic"/>
          <h1 className="p-4">Marilyn Holland</h1>
          <p className="m-0 p-0 lg-text">B.S. Information Technology</p>
          <p className="font-italic lg-text">Database Technology & Programming</p>
          <p>George Mason University</p>
        </Col>

        {/* Right Column */}
        <Col sm className="pt-1 d-flex flex-column align-items-center justify-content-center">
          <Container className="black-border">
            <h3 className="pb-3 cursive">About</h3>
            <p>Hello! My name is Marilyn, and I am a web and software developer from Fairfax, Virginia. I'm a <span className="font-italic">magna cum laude</span> graduate from The Volgenau School of Engineering at George Mason University.</p>
            <p>Over the past couple of years, I have worked in the IT industry handling technical support for Geek Squad and Frontier IT. My true passion however lies in coding. I enjoy building full-stack projects to create fun and useful applications! I'm also known for picking up new languages and frameworks quite quickly. </p>
            <p>Recently I've been working on mastering the MERN stack, and learning Java Spring Boot.</p>
          </Container>
          {/* Link to resume */}
          <a href={pdf} target="_blank" rel="noreferrer" className="link">
            <Container className="green-border d-flex justify-content-center align-items-center">
              <p className="heading-color font-bold m-0">Resume</p>
            </Container>
          </a>
        </Col>
      </Row>
    </Container>
  )
}

export default About