import React from 'react'
import { Container, Image, Row } from 'react-bootstrap'
import adImg from '../images/addressBook.PNG'
import fpImg from '../images/font-picker.PNG'
import snImg from '../images/sticky-notes.PNG'
import bsImg from '../images/book-search.PNG'
import cpImg from '../images/color-picker.PNG'
import tdImg from '../images/to-doList.PNG'
import blImg from '../images/mybooklist.PNG'

const Projects = () => {
  return (
    <Container fluid id="projects" className="projects content-container d-flex flex-column justify-content-center p-5">
      <h1 className="text-center cursive text-shadow p-3">Projects</h1>
      <Container>
        <Row className="d-flex justify-content-around">
        <Container className="project-box d-flex flex-column align-items-center justify-content-center w-25 m-1 mb-3">
            <Image src={blImg} alt="my book list project img" fluid className="project-img"></Image>
              <div className="flex-column ps-1 pe-1">
                <h3 className="pt-3 pb-1 text-center font-bold">My Book List</h3>
                <div className="languages d-flex justify-content-center pb-1">
                  <p>MongoDB</p>
                  <p>Express</p>
                  <p>React</p>
                  <p>NodeJS</p>
                </div>
                <p className="ps-3 pe-3">Full-stack MERN website used to keep track of books for reading. Incorporates Redux, Axios and Express REST API, and JWT authentication.</p>
                <div className="d-flex justify-content-around pb-2">
                  <a href="https://autumngeist-my-book-list.cyclic.app" target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-dark">Live Demo</button>
                  </a>
                  <a href="https://github.com/AutumnGeist/React-My-Book-List" target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-dark">Source Code</button>
                  </a>
                </div>
              </div>
          </Container>
          
          <Container className="project-box d-flex flex-column align-items-center justify-content-center w-25 m-1 mb-3">
            <Image src={adImg} alt="address book project img" fluid className="project-img"></Image>
              <div className="flex-column ps-1 pe-1">
                <h3 className="pt-3 pb-1 text-center font-bold">Address Book</h3>
                <div className="languages d-flex justify-content-center pb-1">
                  <p>React</p>
                  <p>React-Bootstrap</p>
                  <p>JSON-Server</p>
                </div>
                <p className="ps-3">React web app to save and keep track of contact addresses. Utilizes database storage, pagination, and search functionality.</p>
                <div className="d-flex justify-content-around pb-2">
                  <a href="https://autumngeist.github.io/React-Address-Book/" target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-dark">Live Demo</button>
                  </a>
                  <a href="https://github.com/AutumnGeist/React-Address-Book" target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-dark">Source Code</button>
                  </a>
                </div>
              </div>
          </Container>

          <Container className="project-box d-flex flex-column align-items-center justify-content-center w-25 m-1 mb-3">
            <Image src={snImg} alt="sticky notes project img" fluid className="project-img"></Image>
              <div className="flex-column ps-1 pe-1">
                <h3 className="pt-3 pb-1 text-center font-bold">Sticky Notes</h3>
                <div className="languages d-flex justify-content-center pb-1">
                  <p>JavaScript</p>
                  <p>NodeJS</p>
                  <p>MongoDB</p>
                </div>
                <p className="ps-3 pe-3">Note-keeping app for creating, saving, and updating short colorful notes. Utilizes the ExpressJS and Mongoose frameworks.</p>
                <div className="d-flex justify-content-around pb-2">
                  <a href="https://autumngeist-mongodb-notes-app.cyclic.app/" target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-dark">Live Demo</button>
                  </a>
                  <a href="https://github.com/AutumnGeist/MongoDB-Notes-App" target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-dark">Source Code</button>
                  </a>
                </div>
              </div>
          </Container>

          <Container className="project-box d-flex flex-column align-items-center justify-content-center w-25 m-1 mb-3">
            <Image src={fpImg} alt="font-picker project img" fluid className="project-img"></Image>
              <div className="flex-column ps-1 pe-1">
                <h3 className="pt-3 pb-1 text-center font-bold">CSS Font-Picker</h3>
                <div className="languages d-flex justify-content-center pb-1">
                  <p>JavaScript</p>
                  <p>HTML</p>
                  <p>CSS</p>
                </div>
                <p className="ps-3">A useful web tool for picking web-safe fonts. Preview different font families and styles, and customize the text and headings.</p>
                <div className="d-flex justify-content-around pb-2">
                  <a href="https://autumngeist.github.io/CSS-Font-Picker/" target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-dark">Live Demo</button>
                  </a>
                  <a href="https://github.com/AutumnGeist/CSS-Font-Picker" target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-dark">Source Code</button>
                  </a>
                </div>
              </div>
          </Container>

          <Container className="project-box d-flex flex-column align-items-center justify-content-center w-25 m-1 mb-3">
            <Image src={cpImg} alt="color picker project img" fluid className="project-img"></Image>
              <div className="flex-column ps-1 pe-1">
                <h3 className="pt-3 pb-1 text-center font-bold">CSS Color-Picker</h3>
                <div className="languages d-flex justify-content-center pb-1">
                  <p>JavaScript</p>
                  <p>HTML</p>
                  <p>CSS</p>
                </div>
                <p className="ps-3 pe-3">A fun web tool for picking CSS colors for design purposes. Select and preview different colors and test color contrast.</p>
                <div className="d-flex justify-content-around pb-2">
                  <a href="https://autumngeist.github.io/CSS-Color-Picker/" target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-dark">Live Demo</button>
                  </a>
                  <a href="https://github.com/AutumnGeist/CSS-Color-Picker" target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-dark">Source Code</button>
                  </a>
                </div>
              </div>
          </Container>

          

          <Container className="project-box d-flex flex-column align-items-center justify-content-center w-25 m-1 mb-3">
            <Image src={bsImg} alt="google book search project img" fluid className="project-img"></Image>
              <div className="flex-column ps-1 pe-1">
                <h3 className="pt-3 pb-1 text-center font-bold">Google Book Search</h3>
                <div className="languages d-flex justify-content-center pb-1">
                  <p>JavaScript</p>
                  <p>HTML</p>
                  <p>CSS</p>
                </div>
                <p className="ps-3 pe-3">A Google book search clone that fetches and displays book data and images from the Google Books API. Features async/await Fetch API.</p>
                <div className="d-flex justify-content-around pb-2">
                  <a href="https://autumngeist.github.io/Google-Book-Search/" target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-dark">Live Demo</button>
                  </a>
                  <a href="https://github.com/AutumnGeist/Google-Book-Search" target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-dark">Source Code</button>
                  </a>
                </div>
              </div>
          </Container>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects