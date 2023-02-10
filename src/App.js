import React from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
          <Header />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
    </BrowserRouter>
  );
}

export default App;
