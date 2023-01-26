import React from 'react';
import Nav from './Components/Nav';
import About from './Components/About';
import { createTheme, ThemeProvider } from '@mui/material';

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
    </ThemeProvider>
  );
}

export default App;
