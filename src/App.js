import './App.css';
import React from 'react';
import { Navbar, Home, Skills, Experience, Projects, Resume, Contact} from './Components/index';

export default function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
    </div>
  )
}