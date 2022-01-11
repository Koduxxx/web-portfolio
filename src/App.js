import './App.css';
import React from 'react';
import { Navbar, Home, Experience, Projects, Resume, Contact} from './Components/index';

export default function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
    </div>
  )
}