import { React } from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import java from '../images/java.png'
import js from '../images/javascript.png'
import react from '../images/react-icon.png'
import html from '../images/html5.png'
import css from '../images/css.png'
import node from '../images/node.png'
import ex from '../images/express.png'
import bs from '../images/bootstrap.png'
import mongo from '../images/mongoDB.png'
import mysql from '../images/mysql.png'
import rest from '../images/restAPI.png'
import git from '../images/git.png'



const Skills = () => {
  return (
    <Container fluid id="skills" className="skills content-container2 p-5 d-flex flex-column justify-content-center">
      <h2 className="pb-5 text-center text-shadow cursive">Technical Skills</h2>      
      <Row fluid className="d-flex flex-wrap col-gap-1 ps-5 pe-5">
        <Col className="align-items-center justify-content-center text-center">
          <Image fluid src={java} alt="java logo" className="skill-img" />
          <p className="p-2">Java</p>
        </Col>
        <Col className="text-center justify-content-center align-items-center">
          <Image fluid src={react} alt="react logo" className="skill-img" />
          <p className="p-2">React</p>
        </Col>
        <Col className="text-center justify-content-center align-items-center">
          <Image fluid src={js} alt="javascript logo" className="skill-img" />
          <p className="p-2">JavaScript</p>
        </Col>
        <Col className="text-center justify-content-center align-items-center">
          <Image fluid src={html} alt="HTML logo" className="skill-img" />
          <p className="p-2">HTML</p>
        </Col>
        <Col className="text-center justify-content-center align-items-center">
          <Image fluid src={css} alt="CSS3 logo" className="skill-img" />
          <p className="p-2">CSS</p>
        </Col>
        <Col className="text-center justify-content-center align-items-center">
          <Image fluid src={bs} alt="Bootstrap logo" className="skill-img" />
          <p className="p-2">Bootstrap</p>
        </Col>
      </Row>
      <Row fluid className="d-flex flex-wrap col-gap-1 ps-5 pe-5">
        <Col className="text-center justify-content-center align-items-center">
          <Image fluid src={node} alt="NodeJS logo" className="skill-img" />
          <p className="p-2">NodeJS</p>
        </Col>
        <Col className="text-center justify-content-center align-items-center">
          <Image fluid src={ex} alt="Express logo" className="skill-img" />
          <p className="p-2">ExpressJS</p>
        </Col>
        <Col className="text-center justify-content-center align-items-center">
          <Image fluid src={mongo} alt="MongoDB logo" className="skill-img" />
          <p className="p-2">MongoDB</p>
        </Col>
        <Col className="text-center justify-content-center align-items-center">
          <Image fluid src={mysql} alt="MySQL logo" className="skill-img" />
          <p className="p-2">MySQL</p>
        </Col>
        <Col className="text-center justify-content-center align-items-center">
          <Image fluid src={rest} alt="rest API logo" className="skill-img" />
          <p className="p-2">Rest API</p>
        </Col>
        <Col className="text-center justify-content-center align-items-center">
          <Image fluid src={git} alt="Git logo" className="skill-img" />
          <p className="p-2">Git</p>
        </Col>
      </Row>

      
    </Container>
  )
}

export default Skills