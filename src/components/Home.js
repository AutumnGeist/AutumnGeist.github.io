import React from 'react'
import { Container } from 'react-bootstrap'


const Home = () => {
  return (
    <Container fluid id="home" className="home content-container d-flex flex-column justify-content-center text-shadow">   
      <div className="p-5 ms-5">  
        <h3 className="green-text">Welcome! My name is </h3>
        <h1 className="large-text pt-5 pb-5">Marilyn Holland</h1>
        <h1 className="rotating-words green-text">
          <span>Developer</span>
          <span>IT Professional</span>
          <span>Technophile</span>
        </h1>
      </div>
   </Container>
  )
}

export default Home