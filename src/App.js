import React from 'react';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import LandingPage from './Pages/LandingPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Assets/Styles.css';
import NavMenu from './Components/NavMenu';

const theme = createTheme({
  typography: {
    fontFamily: ['Open Sans', 'Proza Libre'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
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
