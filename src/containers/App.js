import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import Header from '../components/Header';
import theme from '../styles/Theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
       <Header/>
       
         Hello
     
    </ThemeProvider>
  );
}

export default App;
