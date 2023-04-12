import React from 'react';
//import Nav from './Components/Nav';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import LandingPage from './Pages/LandingPage';
import { createTheme, ThemeProvider } from '@mui/material';
import './Assets/Styles.css';
import NavMenu from './Components/NavMenu';


const theme = createTheme({
  typography: {
    fontFamily: ['Open Sans', 'Proza Libre'].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavMenu />
      <LandingPage />
      <About />
      <Portfolio />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
