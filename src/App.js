import React from 'react';
import Nav from './Components/Nav';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import { createTheme, ThemeProvider } from '@mui/material';
import "./Assets/Styles.css";

const theme = createTheme({
  typography: {
    fontFamily: ['Open Sans', 'Proza Libre'].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <About />
      <Portfolio />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
