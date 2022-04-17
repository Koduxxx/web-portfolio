import React from 'react';
import { Navbar, Home, Skills, Experience, Projects, Contact} from './Components/index';
import { Box } from '@chakra-ui/react';

export default function App() {
  return (
    <Box>
        <Navbar />
        <Box>
          <Home />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </Box>
    </Box>
  )
}